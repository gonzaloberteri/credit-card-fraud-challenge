import { useAuth } from '@clerk/clerk-react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { RealAuditorDashboard } from './components/RealAuditorDashboard';
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
            console.log('Could not decode JWT for debugging');
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

    // Create Apollo Client
    return new ApolloClient({
      link: authLink.concat(httpLink),
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
      <RealAuditorDashboard />
    </ApolloWrapper>
  )
}

export default App;