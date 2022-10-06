import * as React from 'react';
import { useEffect } from 'react';

import { styled, Theme, useTheme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import CircularProgress from '@mui/material/CircularProgress';

import { SvgCreator } from '../../helpers';
import { IconButtonStyled, ListStyled } from '../shared-styled';
import { useActions, useTypedSelector } from '../../redux/hooks';
import NavListItem from '../nav-list-item/nav-list-item';
import NavigationSelect from '../navigation-select/navigation-select';
import AppBar from '../app-bar/app-bar';
import Dashboard from '../../pages/dashboard/dashboard';
import { appBarCollapsed, appBarHeight } from '../../constants';

const drawerOpenedWidth = 256;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerOpenedWidth,
  height: 'max-content',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
});

const closedMixin = (theme: Theme): CSSObject => ({
  height: 'max-content',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: theme.spacing(9)
  // [theme.breakpoints.up('sm')]: {
  //   width: `calc(${theme.spacing(8)} + 1px)`
  // }
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: appBarCollapsed,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme)
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme)
    }),
    '& .MuiPaper-root': {
      boxSizing: 'border-box',
      borderRight: '1px solid rgba(10, 37, 64, 0.32)'
    }
  })
);

const AppLayout = () => {
  const styles = {
    loader: {
      margin: 'auto'
    }
  };

  const [open, setOpen] = React.useState(true);
  const { palette } = useTheme();
  const { pages, loadingPages } = useTypedSelector((state) => state.pages);
  const { stores, loadingStores } = useTypedSelector((state) => state.stores);
  const { fetchPages, fetchStores } = useActions();

  useEffect(() => {
    fetchPages();
    fetchStores();
  }, []);

  const handleDrawerOpenClose = (): void => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {(loadingPages || loadingStores) && (
        <CircularProgress size={100} thickness={2} sx={styles.loader} />
      )}
      {stores.length && pages.length && (
        <>
          <AppBar open={open} />
          <Drawer variant="permanent" open={open}>
            <DrawerHeader
              sx={{
                display: 'flex',
                gap: 12,
                justifyContent: 'flex-start',
                paddingLeft: 2.5,
                mb: '16px'
              }}>
              {open && <SvgCreator iconName={'Logo'} />}
              <IconButtonStyled
                onClick={handleDrawerOpenClose}
                width={24}
                height={24}
                disableRipple>
                <SvgCreator iconName={'Menu'} color={palette.primary.main} />
              </IconButtonStyled>
            </DrawerHeader>
            <ListStyled marginbottom={60}>
              {pages.map((page) => (
                <NavListItem key={page.id} page={page} open={open} />
              ))}
            </ListStyled>
            <NavigationSelect open={open} />
          </Drawer>
          <Box sx={{ flexGrow: 1, p: 3, padding: 0, height: appBarHeight, position: 'relative' }}>
            <DrawerHeader />
            <Dashboard />
          </Box>
        </>
      )}
    </Box>
  );
};

export default AppLayout;
