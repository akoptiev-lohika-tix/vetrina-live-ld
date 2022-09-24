import React, { useEffect, useState } from 'react';

import { Box, CircularProgress, SvgIcon } from '@mui/material';

import NavAppBarStyled from './nav-app-bar-styled';
import ToolbarStyled from './toolbar-styled';
import IconButtonStyled from './icon-button-styled';
import BoxStyled from './box-styled';
import { LOGO_ALT, navBarHeight, navigationWidth } from '../../constants';
import { ReactComponent as MenuIcon } from '../../assets/menunav-icon.svg';
import { useActions, useTypedSelector } from '../../redux/hooks';
import Logo from '../../assets/logo.svg';
import NavigationList from '../navigation-list/navigation-list';

const Navigation: React.FC = () => {
  const { loading } = useTypedSelector((state) => state.mainPages);
  const { fetchMainPages } = useActions();

  useEffect(() => {
    fetchMainPages();
  }, []);

  const [open, setOpen] = useState(true);

  const toggleNavigationOpen = (): void => setOpen(!open);
  if (loading) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <NavAppBarStyled position="fixed" width={navigationWidth} height={navBarHeight} elevation={0}>
        <ToolbarStyled disableGutters height={24} variant="dense">
          <BoxStyled component="img" height={14} alt={LOGO_ALT} src={Logo} />
          <IconButtonStyled
            color="inherit"
            aria-label="open drawer"
            onClick={toggleNavigationOpen}
            edge="start"
            disableRipple>
            <SvgIcon component={MenuIcon} inheritViewBox />
          </IconButtonStyled>
        </ToolbarStyled>
      </NavAppBarStyled>
      <NavigationList open={open} />
    </>
  );
};

export default Navigation;
