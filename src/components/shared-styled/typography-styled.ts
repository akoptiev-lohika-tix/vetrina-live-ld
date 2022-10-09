import { Typography, styled } from '@mui/material';
import { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';

interface TypographyProps extends MuiTypographyProps {
  fontfamily?: string;
  fontSize?: number;
  fontWeight?: any;
  lineHeight?: string;
  color?: string;
  textdecorationline?: string;
  width?: number | string;
}

export const TypographyStyled = styled(Typography)<TypographyProps>(
  ({
    fontfamily,
    fontSize,
    fontWeight,
    lineHeight,
    color,
    textdecorationline = 'none',
    width
  }) => ({
    fontfamily: fontfamily,
    fontSize: fontSize,
    fontWeight: fontWeight,
    lineHeight: lineHeight,
    color: color,
    textDecorationLine: textdecorationline,
    width: width
  })
);
