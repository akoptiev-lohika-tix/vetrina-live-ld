import { styled, Divider } from '@mui/material';
import { DividerProps as MuiDividerProps } from '@mui/material/Divider';
import { CSSObject } from '@mui/material/styles';

interface DividerProps extends MuiDividerProps {
  margintop?: number;
  marginbottom?: number;
  color?: string;
}

export const DividerStyled = styled(Divider)<DividerProps>(
  ({ margintop = 0, marginbottom = 0, color }): CSSObject => ({
    marginTop: margintop,
    marginBottom: marginbottom,
    color: color,
    height: 1,
    width: '100%',
    border: 0
  })
);
