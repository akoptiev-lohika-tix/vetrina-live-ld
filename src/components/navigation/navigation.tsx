import React, { useState } from 'react';

import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import NavAppBarStyled from './nav-app-bar-styled';
import { navBarHeight, navigationWidth } from '../../constants';
import { Box, SvgIcon } from '@mui/material';
import Logo from '../../assets/logo.svg';
import { ReactComponent as MenuIcon } from '../../assets/menunav-icon.svg';
import { loadPagesData } from '../../api';

const Navigation: React.FC = () => {
  loadPagesData()
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = (): void => {
    setOpen(true);
  };

  const handleDrawerClose = (): void => {
    setOpen(false);
  };

  const toolbarStyles = {
    minHeight: 0,
    height: '24px',
    justifyContent: 'space-between'
  };

  const buttonStyles = {
    padding: 0
  };

  return (
    <>
      <NavAppBarStyled position="fixed" width={navigationWidth} height={navBarHeight} elevation={0}>
        <Toolbar disableGutters sx={toolbarStyles} variant="dense">
          <Box
            component="img"
            sx={{
              height: '14px'
            }}
            alt="Vetrina Logo"
            src={Logo}
          />
          <IconButton
            sx={buttonStyles}
            color="inherit"
            aria-label="open drawer"
            onClick={() => {
              if (!open) {
                handleDrawerOpen();
              } else {
                handleDrawerClose();
              }
            }}
            edge="start"
            disableRipple>
            <SvgIcon component={MenuIcon} inheritViewBox />
          </IconButton>
        </Toolbar>
      </NavAppBarStyled>
      <Drawer
        sx={{
          width: navigationWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            top: '60px',
            width: navigationWidth,
            boxSizing: 'border-box',
            zIndex: 0
          }
        }}
        variant="persistent"
        anchor="top"
        open={open}>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </>
  );
};

export default Navigation;
