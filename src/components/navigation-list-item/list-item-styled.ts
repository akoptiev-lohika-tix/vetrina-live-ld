import { styled, ListItem } from '@mui/material';
import { ListItemProps as MuiListItemProps } from '@mui/material/ListItem';

interface ListItemProps extends MuiListItemProps {
  color: string;
}

const ListItemStyled = styled(ListItem)<ListItemProps>(({ theme, color }) => ({
  marginBottom: 2,
  borderRadius: 4,
  '& .MuiListItemText-root': {
    margin: 0
  },
  '& .MuiTypography-root': {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: '14px',
    lineHeight: '16px',
    color: color
  },
  '& .MuiListItemButton-root:hover': {
    backgroundColor: 'transparent'
  }
}));

export default ListItemStyled;
