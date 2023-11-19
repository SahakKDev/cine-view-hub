import Drawer, { DrawerProps } from '@mui/material/Drawer';

import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import searchIcon from 'assets/icons/ICON - Search.png';
import homeIcon from 'assets/icons/Group 46.png';
import tvShowIcon from 'assets/icons/Group 47.png';
import moviesIcon from 'assets/icons/Group 53.png';
import genresIcon from 'assets/icons/Group 54.png';
import watchLaterIcon from 'assets/icons/Group 56.png';
import avatarImage from 'assets/images/avatar.jpg';

import NavigationList from 'components/naviagation/NavigationList';
import NavigationListItemLink from 'components/naviagation/NavigationListItemLink';

import Avatar from 'components/Avatar';
import NavListItem from 'components/naviagation/NavListItem';
import Settings from 'components/Settings';

const NavigationDrawer = styled(Drawer, {
  shouldForwardProp: (prop: string) => !['isDrawerOpen'].includes(prop),
})<DrawerProps & { isDrawerOpen: boolean }>(({ isDrawerOpen }) => ({
  height: '100vh',
  position: 'relative',
  background: isDrawerOpen
    ? `transparent linear-gradient(90deg, rgba(4, 4, 4, 1), rgba(4, 4, 4, 0.21),
    rgba(4, 4, 4, 0)) 0% 0% no-repeat padding-box`
    : 'none',
}));

const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: 'rgba(4, 4, 4, 0.7)',
          boxShadow: 'none',
        },
      },
    },
  },
});

type Props = {
  isDrawerOpen: boolean;
  expandDrawer: () => void;
  reduceDrower: () => void;
};

const Navigation = ({ isDrawerOpen, expandDrawer, reduceDrower }: Props) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavigationDrawer
          hideBackdrop={!isDrawerOpen}
          slotProps={{
            backdrop: {
              invisible: true,
            },
          }}
          anchor={'left'}
          open
          isDrawerOpen={isDrawerOpen}
        >
          <NavigationList
            expand={isDrawerOpen}
            onMouseOver={expandDrawer}
            onMouseLeave={reduceDrower}
          >
            <>
              <NavListItem>
                <Avatar hide={!isDrawerOpen} label="Daniel" src={avatarImage} />
              </NavListItem>

              <NavListItem>
                <NavigationListItemLink
                  expand={isDrawerOpen}
                  icon={searchIcon}
                  label="Search"
                  active={false}
                />
              </NavListItem>
              <NavListItem>
                <NavigationListItemLink
                  expand={isDrawerOpen}
                  icon={homeIcon}
                  label="Home"
                  active
                />
              </NavListItem>
              <NavListItem>
                <NavigationListItemLink
                  expand={isDrawerOpen}
                  icon={tvShowIcon}
                  label="TX Shows"
                  active={false}
                />
              </NavListItem>
              <NavListItem>
                <NavigationListItemLink
                  expand={isDrawerOpen}
                  icon={moviesIcon}
                  label="Movies"
                  active={false}
                />
              </NavListItem>
              <NavListItem>
                <NavigationListItemLink
                  expand={isDrawerOpen}
                  icon={genresIcon}
                  label="Genres"
                  active={false}
                />
              </NavListItem>
              <NavListItem>
                <NavigationListItemLink
                  expand={isDrawerOpen}
                  icon={watchLaterIcon}
                  label="Watch Later"
                  active={false}
                />
              </NavListItem>

              {isDrawerOpen && (
                <NavListItem pushBottom>
                  <Settings />
                </NavListItem>
              )}
            </>
          </NavigationList>
        </NavigationDrawer>
      </ThemeProvider>
    </div>
  );
};

export default Navigation;
