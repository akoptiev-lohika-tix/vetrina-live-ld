import { Drawer, styled } from '@mui/material';

import { navigationWidth, navBarHeight } from '../../constants';

const DrawerStyled = styled(Drawer)({
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    top: navBarHeight,
    zIndex: 0,
    width: navigationWidth,
    borderRight: '1px solid rgba(10, 37, 64, 0.32)',
    boxSizing: 'border-box'
  }
});

export default DrawerStyled as typeof Drawer;
