import { Box, styled } from '@mui/material';
import { BoxProps as MuiBoxProps } from '@mui/material/Box';

interface BoxProps extends MuiBoxProps {
  height: number;
}

const BoxStyled = styled(Box)<BoxProps>(({ height }) => ({
  height: height
}));

export default BoxStyled as typeof Box;
