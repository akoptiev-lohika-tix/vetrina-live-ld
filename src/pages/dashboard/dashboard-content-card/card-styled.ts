import { styled, Card } from '@mui/material';

export const CardStyled = styled(Card)({
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
});
