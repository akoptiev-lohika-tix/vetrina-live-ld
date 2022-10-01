import React, { useEffect, useState } from 'react';

import { SvgIcon } from '@mui/material';

import NavAppBarStyled from './nav-app-bar-styled';
import ToolbarStyled from './toolbar-styled';
import IconButtonStyled from './icon-button-styled';
import { SharedBoxStyled } from '../shared-styled';
import { LOGO_ALT, navBarHeight, navigationWidth } from '../../constants';
import { ReactComponent as MenuIcon } from '../../assets/menunav-icon.svg';
import { useActions } from '../../redux/hooks';
import Logo from '../../assets/logo.svg';
import NavigationList from '../navigation-list/navigation-list';
import DrawerStyled from './drawer-styled';
import NavigationSelect from '../navigation-select/navigation-select';

const Navigation: React.FC = () => {
  const { fetchPages, fetchStores } = useActions();

  useEffect(() => {
    fetchPages();
    fetchStores();
  }, []);

  const [open, setOpen] = useState(true);

  const toggleNavigationOpen = (): void => setOpen(!open);

  return (
    <>
      <NavAppBarStyled position="fixed" width={navigationWidth} height={navBarHeight} elevation={0}>
        <ToolbarStyled disableGutters height={24} variant="dense">
          <SharedBoxStyled component="img" height={14} alt={LOGO_ALT} src={Logo} />
          <IconButtonStyled
            aria-label="open drawer"
            onClick={toggleNavigationOpen}
            edge="start"
            disableRipple>
            <SvgIcon component={MenuIcon} inheritViewBox />
          </IconButtonStyled>
        </ToolbarStyled>
      </NavAppBarStyled>
      <DrawerStyled variant="persistent" anchor="top" open={open}>
        <NavigationList />
        <NavigationSelect />
      </DrawerStyled>
    </>
  );
};

export default Navigation;
