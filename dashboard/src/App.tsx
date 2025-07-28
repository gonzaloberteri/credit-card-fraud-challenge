import { useAuth } from '@clerk/clerk-react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, split } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { AuditorDashboard } from './components/AuditorDashboard';
import { useMemo } from 'react';
import './App.css'

// Apollo Client component that uses Clerk auth
function ApolloWrapper({ children }: { children: React.ReactNode }) {
  const { getToken, isLoaded } = useAuth();

  // Create Apollo Client with memoization to prevent recreation on every render
  const client = useMemo(() => {
    // Create HTTP link to Hasura GraphQL endpoint
    const httpLink = createHttpLink({
      uri: 'http://localhost:8080/v1/graphql',
    });

    // Create WebSocket link for subscriptions
    const wsLink = new GraphQLWsLink(createClient({
      url: 'ws://localhost:8080/v1/graphql',
      connectionParams: async () => {
        try {
          const token = await getToken({ template: 'auditor' });
          return {
            headers: {
              authorization: token ? `Bearer ${token}` : "",
              // Temporary fallback for debugging - remove this in production
              'x-hasura-admin-secret': 'myadminsecretkey',
            }
          };
        } catch (error) {
          console.warn('Failed to get auth token for WebSocket:', error);
          return {
            headers: {
              'x-hasura-admin-secret': 'myadminsecretkey',
            }
          };
        }
      },
    }));

    // Add authorization header with Clerk JWT token
    const authLink = setContext(async (_, { headers }) => {
      // Only try to get token if Clerk is loaded
      if (!isLoaded) {
        return { headers };
      }

      try {
        // Get the JWT token from Clerk using the 'auditor' template
        const token = await getToken({ template: 'auditor' });
        
        // Debug: Log the token to see what claims it contains
        if (token) {
          try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            console.log('JWT payload:', payload);
            console.log('Hasura claims:', payload['https://hasura.io/jwt/claims']);
          } catch (e) {
            console.log('Could not decode JWT for debugging', e);
          }
        }
        
        return {
          headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
            // Temporary fallback for debugging - remove this in production
            'x-hasura-admin-secret': 'myadminsecretkey',
          }
        };
      } catch (error) {
        console.warn('Failed to get auth token:', error);
        return { headers };
      }
    });

    // Split link based on operation type
    const splitLink = split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === 'OperationDefinition' &&
          definition.operation === 'subscription'
        );
      },
      wsLink,
      authLink.concat(httpLink),
    );

    // Create Apollo Client
    return new ApolloClient({
      link: splitLink,
      cache: new InMemoryCache(),
    });
  }, [getToken, isLoaded]);

  // Don't render Apollo Provider until Clerk is loaded
  if (!isLoaded) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        backgroundColor: '#0f172a',
        color: '#f1f5f9',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
      }}>
        Loading authentication...
      </div>
    );
  }

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}

function App() {
  return (
    <ApolloWrapper>
      <AuditorDashboard />
    </ApolloWrapper>
  )
}

export default App;