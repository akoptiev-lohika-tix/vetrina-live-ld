import React from 'react';

import { Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { BoxStyled, TypographyStyled } from '../../../components/shared-styled';
import {
  DASHBOARD_HEADER_LINK_BASE,
  DASHBOARD_BANNER_APP_BAR_HEIGHT,
  WELCOME_TEXT
} from '../../../constants';
import { useTypedSelector } from '../../../redux/hooks';
import { LinkCreator } from '../../../components/link-creator/link-creator';

const DashboardHeader: React.FC = () => {
  const { palette } = useTheme();
  const { activeStore } = useTypedSelector((state) => state.stores);

  const styles = {
    box: {
      background: 'linear-gradient(180deg, #21B8F9 0%, rgba(33, 184, 249, 0) 132.05%)'
    },
    link: {
      linkColor: '#ffffff',
      fontFamily: 'Source Sans Pro, sans-serif',
      lineHeight: '22px',
      fontWeight: 500,
      gap: 16,
      iconName: 'HyperLink',
      marginTop: 8,
      linkText: DASHBOARD_HEADER_LINK_BASE + activeStore?.path
    }
  };

  return (
    <Container maxWidth="xl" disableGutters>
      <BoxStyled
        sx={styles.box}
        height={DASHBOARD_BANNER_APP_BAR_HEIGHT}
        padding={'40px 38px 0 38px'}
        justifyContent={'space-between'}
        alignItems={'flex-start'}>
        <TypographyStyled
          fontFamily={'Noto Sans HK, sans-serif'}
          fontWeight={600}
          fontSize={34}
          lineHeight={'39px'}
          color={palette.common.white}>
          {WELCOME_TEXT}
        </TypographyStyled>
        <LinkCreator {...styles.link} />
      </BoxStyled>
    </Container>
  );
};

export default DashboardHeader;
