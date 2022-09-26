import { Box, styled } from '@mui/material';
import { BoxProps as MuiBoxProps } from '@mui/material/Box';

interface BoxProps extends MuiBoxProps {
  height: number;
  width?: number;
  bgcolor?: string;
  marginRight?: number;
  borderRadius?: number;
}

export const SharedBoxStyled = styled(Box)<BoxProps>(
  ({ height, borderRadius, width, marginRight, bgcolor }) => ({
    height: height,
    width: width,
    bgcolor: bgcolor,
    marginRight: marginRight,
    borderRadius: borderRadius
  })
) as typeof Box;
