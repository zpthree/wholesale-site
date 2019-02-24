import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './Me';

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signOut {
      message
    }
  }
`;

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
