import React from 'react';
import { Link } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';
import { Button } from '@mui/material';

import { BoxStyled, TypographyStyled } from '../../components/shared-styled';
import { NOT_FOUND_PAGE_BUTTON_TEXT, NOT_FOUND_PAGE_TEXT } from '../../constants';

export const NotFoundPage: React.FC = () => {
  const { palette, typography, shadows } = useTheme();

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
      boxShadow: shadows[1],
      '&:hover': {
        background: palette.primary.main
      }
    },
    link: {
      textDecoration: 'none'
    }
  };
  return (
    <BoxStyled width={'75%'} margin={'auto'} paddingTop={'40px'} flexDirection={'column'} gap={24}>
      <TypographyStyled
        fontSize={24}
        color={palette.error.main}
        fontWeight={typography.fontWeightBold}>
        {NOT_FOUND_PAGE_TEXT}
      </TypographyStyled>

      <Link to="/" style={styles.link}>
        <Button sx={styles.button} variant="contained" disableRipple>
          {NOT_FOUND_PAGE_BUTTON_TEXT}
        </Button>
      </Link>
    </BoxStyled>
  );
};
