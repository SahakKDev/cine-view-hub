import { styled } from '@mui/material/styles';

const AvatarContainer = styled('div')<{ hide: boolean }>(({ hide }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '40px',
  color: 'white',
  fontSize: 25,
  visibility: hide ? 'hidden' : 'visible',
  // 225px(image original height) * 30%(image defined height) / 100
  height: '67.5px',
}));

type Props = {
  src: string;
  label: string;
  hide?: boolean;
};

const Avatar = ({ src, label, hide = false }: Props) => {
  return (
    <AvatarContainer hide={hide}>
      <img
        src={src}
        alt={label}
        style={{ width: '30%', borderRadius: '50%' }}
      />
      <span>{label}</span>
    </AvatarContainer>
  );
};

export default Avatar;
