import { styled, Card } from '@mui/material';
import { CardProps as MuiCardProps } from '@mui/material/Card';

interface CardProps extends MuiCardProps {
  background?: string;
  padding?: string | number;
  gap?: number;
}

export const CardStyled = styled(Card)<CardProps>(({ background, padding = 24, gap = 24 }) => ({
  background: background,
  padding: padding,
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  gap: gap,
  '& .MuiCardActions-root': {
    padding: 0,
    justifyContent: 'space-between'
  }
}));
