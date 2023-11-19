import { ReactNode } from 'react';

import MuiButton, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Btn = styled(MuiButton, {
  shouldForwardProp: (prop: string) =>
    !['backgroundColor', 'textColor'].includes(prop),
})<
  ButtonProps & {
    backgroundColor?: string;
    textColor?: string;
  }
>(({ backgroundColor, textColor }) => ({
  padding: '12px 48px',
  borderRadius: '100px',
  backgroundColor: backgroundColor || 'none',
  color: textColor || 'none',
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: 'none',
    color: '#fff',
  },
}));

type Props = {
  children: string;
  Icon?: ReactNode;
  backgroundColor?: string;
  color?: string;
};

const Button = ({ children, Icon, backgroundColor, color }: Props) => {
  return (
    <Btn
      variant="outlined"
      startIcon={Icon}
      backgroundColor={backgroundColor}
      textColor={color}
    >
      {children}
    </Btn>
  );
};

export default Button;
