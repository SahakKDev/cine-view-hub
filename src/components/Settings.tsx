import { styled } from '@mui/material/styles';

const Ul = styled('ul')(() => ({
  listStyle: 'none',
  padding: '10px 20px',
  textTransform: 'uppercase',
  letterSpacing: '4.8px',

  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
}));

const Settings = () => {
  return (
    <Ul>
      <li style={{ cursor: 'pointer' }}>Language</li>
      <li style={{ cursor: 'pointer' }}>Get Help</li>
      <li style={{ cursor: 'pointer' }}>Exit</li>
    </Ul>
  );
};

export default Settings;
