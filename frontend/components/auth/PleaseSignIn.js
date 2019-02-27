import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from './graphql/query';
import SignIn from './SignIn';

const PleaseSignIn = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return <p>Loading...</p>;
      if (!data.me) {
        return (
          <>
            <SignIn message="Please sign in before continuing." />
          </>
        );
      }

      return props.children;
    }}
  </Query>
);

export default PleaseSignIn;
