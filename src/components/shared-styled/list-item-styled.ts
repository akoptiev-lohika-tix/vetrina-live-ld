import { styled, ListItem } from '@mui/material';
import { ListItemProps as MuiListItemProps } from '@mui/material/ListItem';

interface ListItemProps extends MuiListItemProps {
  marginbottom: number;
  color: string;
}

export const ListItemStyled = styled(ListItem)<ListItemProps>(({ marginbottom, color }) => ({
  marginBottom: marginbottom,
  color: color,
  '& .MuiListItemText-root': {
    margin: 0
  }
}));
