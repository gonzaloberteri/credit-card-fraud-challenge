import { ApolloClient, InMemoryCache, ApolloProvider, split, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { SignIn, SignedIn, SignedOut, UserButton, useAuth } from '@clerk/clerk-react';
import { ProviderTables } from './components/ProviderTables';
import { Toaster } from 'react-hot-toast';
import './App.css';

function ApolloWrapper({ children }: { children: React.ReactNode }) {
  const { getToken } = useAuth();

  // HTTP link for queries and mutations
  const httpLink = createHttpLink({
    uri: import.meta.env.VITE_HASURA_GRAPHQL_ENDPOINT,
  });

  // Auth link to add JWT token to headers
  const authLink = setContext(async (_, { headers }) => {
    const token = await getToken({ template: 'hasura' });
    
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
      url: import.meta.env.VITE_HASURA_WEBSOCKET_ENDPOINT,
      connectionParams: async () => {
        const token = await getToken({ template: 'hasura' });
        console.log('WebSocket connection params:', {
          url: import.meta.env.VITE_HASURA_WEBSOCKET_ENDPOINT,
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
    <div className="app">
      <SignedOut>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh',
          background: '#0f172a'
        }}>
          <SignIn />
        </div>
      </SignedOut>
      <SignedIn>
        <ApolloWrapper>
          <div style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: 1000
          }}>
            <UserButton />
          </div>
          <ProviderTables />
        </ApolloWrapper>
      </SignedIn>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1e293b',
            color: '#f1f5f9',
            border: '1px solid #334155',
          },
          success: {
            iconTheme: {
              primary: '#22c55e',
              secondary: '#f1f5f9',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#f1f5f9',
            },
          },
        }}
      />
      <style>{`
        .app {
          min-height: 100vh;
          background: #0f172a;
          width: 100%;
          max-width: 100vw;
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  );
}

export default App;