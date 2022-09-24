import { styled, Toolbar } from '@mui/material';
import { ToolbarProps as MuiToolBarProps } from '@mui/material/Toolbar';

interface ToolbarProps extends MuiToolBarProps {
  height: number;
}

const ToolbarStyled = styled(Toolbar)<ToolbarProps>(({ theme, height }) => ({
  minHeight: 0,
  height: height,
  color: theme.palette.primary.main,
  justifyContent: 'space-between'
}));

export default ToolbarStyled;
