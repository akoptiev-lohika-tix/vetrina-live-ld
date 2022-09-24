import { styled, ListItem } from '@mui/material';
import { ListItemProps as MuiListItemProps } from '@mui/material/ListItem';

interface ListItemProps extends MuiListItemProps {
  color: string;
}

const ListItemStyled = styled(ListItem)<ListItemProps>(({ theme, color }) => ({
  height: 32,
  '& .MuiTypography-root': {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: '14px',
    lineHeight: '16px',
    color: color
  }
}));

export default ListItemStyled;
