import { List, styled } from '@mui/material';
import { ListProps as MuiListProps } from '@mui/material/List';

interface ListProps extends MuiListProps {
  background?: string;
  paddingtop?: number;
  paddingbottom?: number;
  marginbottom?: number;
}

export const ListStyled = styled(List)<ListProps>(
  ({ background, paddingtop, marginbottom, paddingbottom }) => ({
    background: background,
    paddingTop: paddingtop,
    paddingBottom: paddingbottom,
    marginBottom: marginbottom,
    padding: 0,
    boxSizing: 'border-box'
  })
);