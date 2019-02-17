import AccountLayout from '../../components/AccountLayout';
import CreateItem from '../../components/CreateItem';
import 'react-day-picker/lib/style.css';

const AddItemPage = () => (
  <AccountLayout active="add-item">
    <CreateItem />
  </AccountLayout>
);

export default AddItemPage;
