import { Mutation } from 'react-apollo';
import { CURRENT_USER_QUERY } from './graphql/query';
import { SIGN_OUT_MUTATION } from './graphql/mutation';

const SignOut = props => {
  return (
    <Mutation
      mutation={SIGN_OUT_MUTATION}
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    >
      {(signOut, { loading, error }) => (
        <li>
          <button
            onClick={() => {
              signOut();
              location.href = '/sign-in';
            }}
          >
            Sign Out
          </button>
        </li>
      )}
    </Mutation>
  );
};

export default SignOut;
