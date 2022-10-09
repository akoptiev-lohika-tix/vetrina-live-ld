import { styled, Card } from '@mui/material';
import { CardProps as MuiCardProps } from '@mui/material/Card';

interface CardProps extends MuiCardProps {
  background?: string;
}

export const CardStyled = styled(Card)<CardProps>(({ background }) => ({
  background: background,
  padding: 24,
  borderRadius: '10px',
  minWidth: 'max-content',
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  '& .MuiCardActions-root': {
    padding: 0,
    justifyContent: 'space-between'
  }
}));
