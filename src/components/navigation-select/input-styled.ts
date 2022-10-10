import { InputBase, styled } from '@mui/material';
import { InputBaseProps as MuiInputBaseProps } from '@mui/material/InputBase';
import { CSSObject } from '@mui/material/styles';

interface InputBaseProps extends MuiInputBaseProps {
  border?: string;
  textcolor?: string;
  textsize?: string;
  lineheight?: string;
  focuscolor?: string;
  focusshadow?: string;
}

export const InputStyled = styled(InputBase)<InputBaseProps>(
  ({ border, textcolor, textsize, lineheight, focuscolor, focusshadow }): CSSObject => ({
    '& .MuiInputBase-input': {
      border: border,
      color: textcolor,
      fontSize: textsize,
      lineHeight: lineheight,
      borderRadius: 5,
      padding: '16px 20px',
      textAlign: 'left',
      boxSizing: 'border-box',
      '&:focus': {
        borderColor: focuscolor,
        color: focuscolor,
        boxShadow: focusshadow
      }
    },
    '& .MuiSvgIcon-root': {
      color: textcolor,
      right: '12px'
    }
  })
);
