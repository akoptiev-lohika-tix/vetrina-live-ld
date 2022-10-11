import React from 'react';

import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';

import { BoxStyled, TypographyStyled } from '../../../components/shared-styled';

const styles = {
  boldText: {
    display: 'inline',
    fontWeight: 700
  },
  greenText: {
    display: 'inline',
    color: '#00c48c'
  }
};

export const TrustpilotContentSection: React.FC = () => {
  const { palette } = useTheme();

  return (
    <BoxStyled justifyContent={'flex-start'}>
      <TypographyStyled fontSize={17} color={palette.common.white} lineHeight={'22px'}>
        Show us your love by leaving a{' '}
        <Box component={'span'} sx={styles.greenText}>
          positive{' '}
        </Box>
        review on trust pilot and receive the extension of{' '}
        <Box component={'span'} sx={styles.boldText}>
          50 additional products
        </Box>
      </TypographyStyled>
    </BoxStyled>
  );
};
