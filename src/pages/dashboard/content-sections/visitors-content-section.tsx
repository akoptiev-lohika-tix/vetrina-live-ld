import React from 'react';

import { useTheme } from '@mui/material';

import { BoxStyled, TypographyStyled } from '../../../components/shared-styled';
import { useTypedSelector } from '../../../redux/hooks';

export const VisitorsContentSection: React.FC = () => {
  const { palette, typography } = useTheme();
  const { activeStore } = useTypedSelector((state) => state.stores);
  return (
    <BoxStyled height={80} justifyContent={'flex-start'}>
      <TypographyStyled
        fontSize={42}
        color={palette.primary.main}
        fontWeight={typography.fontWeightMedium}
        lineHeight={'61px'}>
        {activeStore && activeStore.data.visitors}
      </TypographyStyled>
    </BoxStyled>
  );
};
