import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/system';

import logo from '../../assets/logo.svg';
import navIcon from '../../assets/menunav-icon.svg';
import { IconButton } from '@mui/material';

const StyledAppBar = styled(
  AppBar,
  {}
)({
  background: '#fff',
  width: '256px'
});

const NavBar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <Toolbar variant="dense">
          <img src={logo} alt="logo" />
          <IconButton>
            <img src={navIcon} alt="nav Icon" />
          </IconButton>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
};

export default NavBar;
