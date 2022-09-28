import { styled, ListItem } from '@mui/material';
import { ListItemProps as MuiListItemProps } from '@mui/material/ListItem';

interface ListItemProps extends MuiListItemProps {
  marginbottom: number;
}

const ListItemStyled = styled(ListItem)<ListItemProps>(({ marginbottom }) => ({
  marginBottom: marginbottom,
  '& .MuiListItemText-root': {
    margin: 0
  }
}));

export default ListItemStyled;
