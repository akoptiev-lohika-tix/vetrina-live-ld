import { styled, ListItemButton } from '@mui/material';
import { ListItemButtonProps as MuiListItemButtonProps } from '@mui/material/ListItemButton';

interface ListItemButtonProps extends MuiListItemButtonProps {
  height: number;
  paddingleft: string;
  backgroundcolor?: string;
  color?: string;
}

const ListItemButtonStyled = styled(ListItemButton)<ListItemButtonProps>(
  ({ theme, height, paddingleft, backgroundcolor, color }) => ({
    height: height,
    padding: `8px 0 8px ${paddingleft}`,
    backgroundColor: backgroundcolor,
    borderRadius: 4,
    color: color,
    paddingRight: 24,

    ':hover': {
      backgroundColor: backgroundcolor
    },

    '& .MuiTypography-root': {
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: '14px',
      lineHeight: '16px'
    },

    '& .MuiSvgIcon-root': {
      width: 20,
      height: 20,
      color: 'red'
    }
  })
);

export default ListItemButtonStyled;
