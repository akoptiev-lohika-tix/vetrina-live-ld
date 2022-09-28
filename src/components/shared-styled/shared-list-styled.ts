import { List, styled } from '@mui/material';
import { ListProps as MuiListProps } from '@mui/material/List';

interface ListProps extends MuiListProps {
  background?: string;
  paddingtop?: number;
}

export const SharedListStyled = styled(List)<ListProps>(({ background, paddingtop }) => ({
  background: background,
  padding: 0,
  boxSizing: 'border-box',
  paddingTop: paddingtop
}));
