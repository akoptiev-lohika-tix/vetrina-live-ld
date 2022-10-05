import React from 'react';

import { Container } from '@mui/material';
import { BoxStyled, TypographyStyled } from '../../../components/shared-styled';

import { dashBoardBannerHeight, WELCOME_TEXT } from '../../../constants';
import { useTheme } from '@mui/material/styles';

const styles = {
  box: {
    background: 'linear-gradient(180deg, #21B8F9 0%, rgba(33, 184, 249, 0) 132.05%)'
  }
};

const DashboardHeader: React.FC = () => {
  const { palette } = useTheme();
  return (
    <Container maxWidth="xl" disableGutters>
      <BoxStyled
        sx={styles.box}
        height={dashBoardBannerHeight}
        padding={'40px 38px 0 38px'}
        justifyContent={'space-between'}
        alignItems={'flex-start'}>
        <TypographyStyled
          fontFamily={'Source Sans Pro, sans-serif'}
          fontWeight={600}
          fontSize={34}
          lineHeight={'39px'}
          color={palette.common.white}>
          {WELCOME_TEXT}
        </TypographyStyled>
        <BoxStyled>Link</BoxStyled>
      </BoxStyled>
    </Container>
  );
};

export default DashboardHeader;
