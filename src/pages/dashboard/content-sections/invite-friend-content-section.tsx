import React from 'react';

import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';

import { BoxStyled, TypographyStyled } from '../../../components/shared-styled';

export const InviteFriendContentSection: React.FC = () => {
  const { palette, typography } = useTheme();

  const styles = {
    greenText: {
      display: 'inline',
      fontWeight: typography.fontWeightBold,
      color: palette.success.main
    }
  };

  return (
    <BoxStyled width={'302px'} justifyContent={'flex-start'}>
      <TypographyStyled fontSize={17} color={palette.primary.main} lineHeight={'22px'}>
        <Box sx={styles.greenText}>Receive 50 products</Box> by inviting a friend who subscribes to
        a plan. Your friend will receive a 30% discount coupon valid for any plan.
      </TypographyStyled>
    </BoxStyled>
  );
};
