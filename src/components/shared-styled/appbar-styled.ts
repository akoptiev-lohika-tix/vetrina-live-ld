import { AppBar, styled } from '@mui/material';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

interface AppBarProps extends MuiAppBarProps {
  width?: number;
  height?: number;
}

export const AppBarStyled = styled(AppBar)<AppBarProps>(({ theme, width, height }) => ({
  background: theme.palette.common.white,
  width: width,
  height: height,
  paddingTop: '24px',
  left: 0,
  boxSizing: 'border-box',
  borderRight: '1px solid rgba(10, 37, 64, 0.32)'
}));
