import { useAuth } from '@clerk/clerk-react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, split } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { AuditorDashboard } from './components/AuditorDashboard';
import './App.css'

// Apollo Client component that uses Clerk auth
function ApolloWrapper({ children }: { children: React.ReactNode }) {
  const { getToken } = useAuth();

  // HTTP link for queries and mutations
  const httpLink = createHttpLink({
    uri: 'https://credit-card-fraud-challenge-hasura.fly.dev/v1/graphql',
  });

  // Auth link to add JWT token to headers
  const authLink = setContext(async (_, { headers }) => {
    const token = await getToken({ template: 'auditor' });
    
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  // WebSocket link for subscriptions
  const wsLink = new GraphQLWsLink(
    createClient({
      url: 'wss://credit-card-fraud-challenge-hasura.fly.dev/v1/graphql',
      connectionParams: async () => {
        const token = await getToken({ template: 'auditor' });
        console.log('WebSocket connection params:', {
          url: 'wss://credit-card-fraud-challenge-hasura.fly.dev/v1/graphql',
          hasToken: !!token,
          tokenPreview: token ? token.substring(0, 50) + '...' : 'no token'
        });
        return {
          headers: {
            authorization: token ? `Bearer ${token}` : '',
          },
        };
      },
      on: {
        error: (error) => {
          console.error('WebSocket connection error:', error);
        },
        closed: (event) => {
          console.log('WebSocket connection closed:', event);
        },
        connected: () => {
          console.log('WebSocket connected successfully');
        }
      }
    })
  );

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
    authLink.concat(httpLink)
  );

  // Apollo Client instance
  const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

function App() {
  return (
    <ApolloWrapper>
      <AuditorDashboard />
    </ApolloWrapper>
  )
}

export default App;