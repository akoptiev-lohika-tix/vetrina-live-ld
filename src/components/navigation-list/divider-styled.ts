import { styled, Divider } from '@mui/material';
import { DividerProps as MuiDividerProps } from '@mui/material/Divider';

interface DividerProps extends MuiDividerProps {
  margintop: number;
  marginbottom: number;
  color: string;
}

const DividerStyled = styled(Divider)<DividerProps>(({ margintop, marginbottom, color }) => ({
  marginTop: margintop,
  marginBottom: marginbottom,
  color: color,
  height: 1,
  border: 0
}));

export default DividerStyled;
