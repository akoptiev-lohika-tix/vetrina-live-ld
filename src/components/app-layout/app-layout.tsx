import * as React from 'react';
import { useEffect } from 'react';

import { styled, Theme, useTheme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';

import { SvgCreator } from '../../helpers';
import { IconButtonStyled, ListStyled } from '../shared-styled';
import { useActions, useTypedSelector } from '../../redux/hooks';
import NavListItem from '../nav-list-item/nav-list-item';
import NavigationSelect from '../navigation-select/navigation-select';
import AppBar from '../app-bar/app-bar';

const drawerOpenedWidth = 256;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerOpenedWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
});

const closedMixin = (theme: Theme): CSSObject => ({
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
    width: drawerOpenedWidth,
    flexShrink: 0,
    // whiteSpace: 'nowrap',
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
  const [open, setOpen] = React.useState(true);
  const { palette } = useTheme();
  const { pages } = useTypedSelector((state) => state.pages);
  const { fetchPages, fetchStores } = useActions();

  useEffect(() => {
    fetchPages();
    fetchStores();
  }, []);

  const handleDrawerOpenClose = (): void => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <AppBar open={open} />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader
          sx={{
            display: 'flex',
            gap: 12,
            justifyContent: 'flex-start',
            paddingLeft: 2.5,
            height: '60px',
            mb: '16px'
          }}>
          {open && <SvgCreator iconName={'Logo'} />}
          <IconButtonStyled onClick={handleDrawerOpenClose} width={24} height={24} disableRipple>
            <SvgCreator iconName={'Menu'} color={palette.primary.main} />
          </IconButtonStyled>
        </DrawerHeader>
        <ListStyled marginbottom={60}>
          {pages.map((page) => (
            <NavListItem key={page.id} page={page} open={open} />
          ))}
        </ListStyled>
        {open && <NavigationSelect />}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
};

export default AppLayout;