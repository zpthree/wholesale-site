import Items from '../components/Items';

const ItemsPage = props => (
  <Items dept={props.query.dept} page={parseFloat(props.query.page) || 1} />
);

export default ItemsPage;
