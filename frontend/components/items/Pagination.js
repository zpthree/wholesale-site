import { Query } from 'react-apollo';
import Head from 'next/head';
import Link from 'next/link';
import { itemsPerPage } from '../../config';
import PaginationStyles from './styles/PaginationStyles';
import { PAGINATION_QUERY } from './graphql/query';

const Pagination = props => (
  <Query query={PAGINATION_QUERY} variables={{ dept: props.dept }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      const { count } = data.itemsConnection.aggregate;
      const pages = Math.ceil(count / itemsPerPage);
      const { page } = props;
      const dept = props.dept ? props.dept : null;
      const pageCount =
        page * itemsPerPage < count ? page * itemsPerPage : count;

      let prev = { page: page - 1 };
      let next = { page: page + 1 };

      if (dept) {
        prev = { dept, ...prev };
        next = { dept, ...next };
      }

      return (
        <PaginationStyles>
          <Head>
            <title>
              Wholesale | Page {page} of {pages}
            </title>
          </Head>
          <Link prefetch href={{ pathname: 'items', query: { ...prev } }}>
            <a className="prev" aria-disabled={page <= 1}>
              Prev
            </a>
          </Link>
          <p>
            Page {page} of {pages}
          </p>
          {/* <p>
            Showing {pageCount} of {count} Results
          </p> */}
          <Link prefetch href={{ pathname: 'items', query: { ...next } }}>
            <a className="next" aria-disabled={page >= pages}>
              Next
            </a>
          </Link>
        </PaginationStyles>
      );
    }}
  </Query>
);

export default Pagination;
