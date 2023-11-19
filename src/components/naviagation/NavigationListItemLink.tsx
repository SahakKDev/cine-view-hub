import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';

const Image = styled('img')(() => ({
  display: 'inline-block',
  borderRadius: '50%',
}));

const Div = styled('div')<{ expand: boolean; active: boolean }>(
  ({ expand, active }) => ({
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '50px',
    margin: '0 auto',
    width: '100%',
    backgroundColor: active && expand ? '#232a3f' : 'none',
    borderRadius: '9px',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#232a3f',
    },
    '&::before': {
      content: "''",
      display: active && !expand ? 'inline-block' : 'none',
      width: '60px',
      height: '60px',
      backgroundColor: '#232a3f',
      position: 'absolute',
      zIndex: -1,
      borderRadius: '50%',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  }),
);

type Props = {
  icon: string;
  label: string;
  expand: boolean;
  active: boolean;
};

const NavigationListItemLink = ({
  icon,
  label,
  expand,
  active = false,
}: Props) => {
  return (
    <Div expand={expand} active={active}>
      <Image src={icon} alt={label} />
      {expand && (
        <ListItemText
          primary={label}
          sx={{ whiteSpace: 'nowrap', overflow: 'hidden' }}
        />
      )}
    </Div>
  );
};

export default NavigationListItemLink;
