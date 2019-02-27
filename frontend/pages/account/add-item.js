import AccountLayout from '../../components/account/AccountLayout';
import CreateItem from '../../components/account/CreateItem';
import 'react-day-picker/lib/style.css';

const AddItemPage = () => (
  <AccountLayout active="add-item">
    <CreateItem />
  </AccountLayout>
);

export default AddItemPage;
