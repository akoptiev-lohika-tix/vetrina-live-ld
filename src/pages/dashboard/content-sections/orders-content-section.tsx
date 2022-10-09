import React from 'react';

import { useTheme } from '@mui/material';

import { BoxStyled, TypographyStyled } from '../../../components/shared-styled';
import { useTypedSelector } from '../../../redux/hooks';
import {
  ORDERS_SECTION_EARNINGS_TITLE,
  ORDERS_SECTION_ORDERS_RECEIVED_TITLE
} from '../../../constants';
import { financeFormatter } from '../../../helpers';

export const OrdersContentSection: React.FC = () => {
  const { activeStore } = useTypedSelector((state) => state.stores);
  const { palette, typography } = useTheme();

  return (
    <BoxStyled flexDirection={'column'} gap={12} marginBottom={24}>
      <BoxStyled justifyContent={'space-between'} width={'100%'}>
        <TypographyStyled fontSize={17} lineHeight={'22px'} color={palette.grey['300']}>
          {ORDERS_SECTION_ORDERS_RECEIVED_TITLE}
        </TypographyStyled>
        <TypographyStyled
          fontSize={17}
          lineHeight={'22px'}
          fontWeight={typography.fontWeightMedium}
          color={palette.primary.main}>
          {activeStore?.data.ordersReceived}
        </TypographyStyled>
      </BoxStyled>
      <BoxStyled justifyContent={'space-between'} width={'100%'}>
        <TypographyStyled fontSize={17} lineHeight={'22px'} color={palette.grey['300']}>
          {ORDERS_SECTION_EARNINGS_TITLE}
        </TypographyStyled>
        <TypographyStyled
          fontSize={17}
          lineHeight={'22px'}
          fontWeight={typography.fontWeightMedium}
          color={palette.primary.main}>
          {activeStore && financeFormatter(activeStore?.data.earnings, activeStore?.data.currency)}
        </TypographyStyled>
      </BoxStyled>
    </BoxStyled>
  );
};
