import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar/AppBar';
import { APP_BAR_HEIGHT, DRAWER_OPEN, DRAWER_CLOSED } from '../../constants';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

export const AppBarStyled = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})<AppBarProps>(({ theme, open }) => ({
  background: theme.palette.common.white,
  height: APP_BAR_HEIGHT,
  width: `calc(100% - ${DRAWER_CLOSED}px)`,
  zIndex: theme.zIndex.drawer + 1,
  borderBottom: '1px solid rgba(10, 37, 64, 0.24)',
  display: 'flex',
  alignItems: 'flex-start',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${DRAWER_OPEN}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  }),
  '& .MuiToolbar-root': {
    minHeight: 0,
    height: APP_BAR_HEIGHT,
    padding: '0 36px',
    display: 'flex',
    justifyContent: 'space-between'
  }
}));
