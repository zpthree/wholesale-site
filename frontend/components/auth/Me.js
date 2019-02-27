import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import { CURRENT_USER_QUERY } from './graphql/query';

const Me = props => (
  <Query {...props} query={CURRENT_USER_QUERY}>
    {payload => props.children(payload)}
  </Query>
);

Me.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Me;
export { CURRENT_USER_QUERY };
