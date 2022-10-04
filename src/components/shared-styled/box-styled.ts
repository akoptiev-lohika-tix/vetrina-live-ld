import { Box, styled } from '@mui/material';
import { BoxProps as MuiBoxProps } from '@mui/material/Box';

interface BoxProps extends MuiBoxProps {
  height: number;
  width?: number;
  bgcolor?: string;
  marginRight?: number;
  borderRadius?: number;
  color?: string;
  gap?: number;
}

export const BoxStyled = styled(Box)<BoxProps>(
  ({ height, borderRadius, width, marginRight, color, bgcolor, gap }) => ({
    height: height,
    width: width,
    bgcolor: bgcolor,
    marginRight: marginRight,
    borderRadius: borderRadius,
    color: color,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    gap: gap
  })
) as typeof Box;
