import React from 'react';

import { Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { BoxStyled, TypographyStyled } from '../../../components/shared-styled';
import {
  DASHBOARD_HEADER_LINK_BASE,
  dashBoardBannerHeight,
  WELCOME_TEXT
} from '../../../constants';
import { useLink } from '../../../hooks';
import { useTypedSelector } from '../../../redux/hooks';

const styles = {
  box: {
    background: 'linear-gradient(180deg, #21B8F9 0%, rgba(33, 184, 249, 0) 132.05%)'
  },
  link: {
    color: '#ffffff',
    fontFamily: 'Source Sans Pro, sans-serif',
    lineHeight: '22px',
    fontWeight: 500,
    gap: 16
  }
};

const DashboardHeader: React.FC = () => {
  const { palette } = useTheme();
  const { activeStore } = useTypedSelector((state) => state.stores);

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
        {useLink({
          ...styles.link,
          linkText: `${DASHBOARD_HEADER_LINK_BASE}/${activeStore?.path}`
        })}
      </BoxStyled>
    </Container>
  );
};

export default DashboardHeader;
