import { Box, styled } from '@mui/material';
import { BoxProps as MuiBoxProps } from '@mui/material/Box';

interface BoxProps extends MuiBoxProps {
  height: number;
  width?: number;
  padding?: string;
  bgcolor?: string;
  marginRight?: number;
  borderRadius?: number;
  color?: string;
  gap?: number;
  justifyContent: string;
  alignItems: string;
}

export const BoxStyled = styled(Box)<BoxProps>(
  ({
    height,
    borderRadius,
    width,
    marginRight,
    color,
    bgcolor,
    gap,
    padding,
    justifyContent = 'center',
    alignItems = 'center'
  }) => ({
    height: height,
    width: width,
    padding: padding,
    bgcolor: bgcolor,
    marginRight: marginRight,
    borderRadius: borderRadius,
    color: color,
    display: 'flex',
    justifyContent: justifyContent,
    alignItems: alignItems,
    boxSizing: 'border-box',
    gap: gap
  })
) as typeof Box;
