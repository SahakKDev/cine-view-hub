import { Alert } from '@mui/material';

type Props = {
  errorMessage: string;
};

const ErrorComponent = ({ errorMessage }: Props) => {
  return <Alert severity="error">{errorMessage}</Alert>;
};

export default ErrorComponent;
