import { styled, ListItemIcon } from '@mui/material';
import { ListItemIconProps as MuiListItemIconProps } from '@mui/material/ListItemIcon';

interface ListItemIconProps extends MuiListItemIconProps {
  width: number;
}

const ListItemIconStyled = styled(ListItemIcon)<ListItemIconProps>(({ width }) => ({
  width: width,
  minWidth: 20
}));

export default ListItemIconStyled;
