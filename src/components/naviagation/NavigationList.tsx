import { ReactNode } from 'react';

import List, { ListProps } from '@mui/material/List';
import { styled } from '@mui/material/styles';

const StyledList = styled(List, {
  shouldForwardProp: (prop: string) => !['expand'].includes(prop),
})<ListProps & { expand: boolean }>(({ expand }) => ({
  height: '100vh',
  width: expand ? '300px' : '157px',
  transition: 'all 0.3s',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '60px',
  gap: '20px',
  backgroundColor: `rgba(4, 4, 4, ${expand ? '0.3' : '1'})`,
  overflowX: 'hidden',
}));

type Props = {
  children: ReactNode;
  expand: boolean;
  onMouseLeave: () => void;
  onMouseOver: () => void;
};

const NavigationList = ({
  children,
  expand,
  onMouseLeave,
  onMouseOver,
}: Props) => {
  return (
    <StyledList
      expand={expand}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </StyledList>
  );
};

export default NavigationList;
