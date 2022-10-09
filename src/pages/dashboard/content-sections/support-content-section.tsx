import React from 'react';

import Box from '@mui/material/Box';
import { Button, useTheme } from '@mui/material';

import { BoxStyled, TypographyStyled } from '../../../components/shared-styled';
import SimeoneAvatar from '../../../assets/simeone_avatar.png';
import { SUPPORT_CARD_BUTTON_TEXT, SUPPORT_CARD_SECTION_TEXT } from '../../../constants';

export const SupportContentSection: React.FC = () => {
  const { palette, shadows } = useTheme();

  const styles = {
    button: {
      background: palette.secondary.main,
      width: 168,
      height: 50,
      borderRadius: '5px',
      fontFamily: 'Source Sans Pro, sans-serif',
      fontSize: 14,
      fontWeight: 600,
      textTransform: 'none',
      boxShadow: shadows[1]
    }
  };
  const activeSupportName = 'Simeone';
  return (
    <BoxStyled flexDirection={'column'} alignItems={'flex-start'} gap={16}>
      <BoxStyled gap={22} justifyContent={'flex-start'}>
        <Box component={'img'} src={SimeoneAvatar} />
        <TypographyStyled
          fontSize={15}
          lineHeight={'24px'}
          color={
            palette.primary.main
          }>{`${activeSupportName} ${SUPPORT_CARD_SECTION_TEXT}`}</TypographyStyled>
      </BoxStyled>
      <Button variant="contained" sx={styles.button} disableRipple>
        {SUPPORT_CARD_BUTTON_TEXT}
      </Button>
    </BoxStyled>
  );
};
