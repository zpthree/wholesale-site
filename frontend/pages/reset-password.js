import ResetPassword from '../components/auth/ResetPassword';

const ResetPasswordPage = ({ query }) => (
  <ResetPassword resetToken={query.resetToken} />
);

export default ResetPasswordPage;
