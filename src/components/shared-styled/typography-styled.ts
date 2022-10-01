import { Typography, styled } from '@mui/material';
import { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';

interface TypographyProps extends MuiTypographyProps {
  fontSize?: string;
  fontWeight?: any;
  lineHeight?: string;
  color?: string;
}

export const TypographyStyled = styled(Typography)<TypographyProps>(
  ({ fontSize, fontWeight, lineHeight, color }) => ({
    fontSize: fontSize,
    fontWeight: fontWeight,
    lineHeight: lineHeight,
    color: color
  })
);
