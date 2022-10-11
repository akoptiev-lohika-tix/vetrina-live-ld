import React from 'react';

import { useTheme } from '@mui/material';

import { BoxStyled, TypographyStyled } from '../../../components/shared-styled';
import { CONFIGURE_SECTION_DESCRIPTION } from '../../../constants';
import { useTypedSelector } from '../../../redux/hooks';

const styles = {
  box: {
    flexDirection: 'column'
  },
  typography: {
    display: 'flex'
  }
};

export const ConfigureContentSection: React.FC = () => {
  const { palette, typography } = useTheme();
  const { activeStore } = useTypedSelector((state) => state.stores);

  return (
    <BoxStyled sx={styles.box} alignItems={'flex-start'} gap={24}>
      <BoxStyled sx={styles.box} alignItems={'flex-start'}>
        <TypographyStyled
          fontSize={34}
          lineHeight={'39px'}
          color={palette.warning.main}
          fontFamily={'Source Sans Pro, sans-serif'}
          fontWeight={600}>
          {`${activeStore?.data.shopConfigurationProgress}%`}
        </TypographyStyled>
        <TypographyStyled
          sx={styles.typography}
          fontSize={15}
          lineHeight={'20px'}
          color={palette.warning.main}
          fontWeight={typography.fontWeightMedium}>
          Completed
        </TypographyStyled>
      </BoxStyled>
      <BoxStyled>
        <TypographyStyled fontSize={17} lineHeight={'22px'} color={palette.primary.main}>
          {CONFIGURE_SECTION_DESCRIPTION}
        </TypographyStyled>
      </BoxStyled>
    </BoxStyled>
  );
};
