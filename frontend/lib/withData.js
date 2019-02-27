import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { endpoint } from '../config';

const createClient = ({ headers }) =>
  new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
    // local data
    clientState: {
      resolvers: {},
      defaults: {
        cartOpen: true,
      },
    },
  });

export default withApollo(createClient);
