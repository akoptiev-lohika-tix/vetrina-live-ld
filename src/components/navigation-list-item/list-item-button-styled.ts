import { styled, ListItemButton } from '@mui/material';
import { ListItemButtonProps as MuiListItemButtonProps } from '@mui/material/ListItemButton';

interface ListItemButtonProps extends MuiListItemButtonProps {
  height: number;
  paddingleft: string;
}

const ListItemButtonStyled = styled(ListItemButton)<ListItemButtonProps>(
  ({ height, paddingleft }) => ({
    height: height,
    padding: `8px 0 8px ${paddingleft}`
  })
);

export default ListItemButtonStyled;
