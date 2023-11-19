import { ReactNode } from 'react';

import { styled } from '@mui/material/styles';
import ListItem, { ListItemProps } from '@mui/material/ListItem';

const StyledListItem = styled(ListItem, {
  shouldForwardProp: (prop: string) => !['pushbottom'].includes(prop),
})<ListItemProps & { pushbottom?: boolean }>(({ pushbottom }) => ({
  zIndex: 1,
  position: 'relative',
  color: '#fff',
  width: '70%',
  '&:last-child': {
    marginTop: pushbottom ? 'auto' : 0,
    marginBottom: pushbottom ? '65px' : 0,
  },
}));

type Props = {
  children: ReactNode;
  pushBottom?: boolean | undefined;
};

const NavListItem = ({ children, pushBottom }: Props) => {
  return (
    <StyledListItem disablePadding pushbottom={pushBottom}>
      {children}
    </StyledListItem>
  );
};

export default NavListItem;
