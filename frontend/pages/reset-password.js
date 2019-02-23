import ResetPassword from '../components/ResetPassword';

const ResetPasswordPage = ({ query }) => (
  <ResetPassword resetToken={query.resetToken} />
);

export default ResetPasswordPage;
