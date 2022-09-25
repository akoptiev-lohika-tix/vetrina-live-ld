import { AppBar, styled } from '@mui/material';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

interface AppBarProps extends MuiAppBarProps {
  width: number;
  height: number;
}

const NavAppBarStyled = styled(AppBar)<AppBarProps>(({ theme, width, height }) => ({
  background: theme.palette.secondary.main,
  width: width,
  height: height,
  padding: '24px 24px 12px 20px',
  marginBottom: 15,
  left: 0,
  boxSizing: 'border-box',
  borderRight: '1px solid rgba(10, 37, 64, 0.32)'
}));

export default NavAppBarStyled;