import React from 'react';

import { useTheme } from '@mui/material';

import { BoxStyled, TypographyStyled } from '../../../components/shared-styled';
import { MOBILE_MARKET_CARD_LINK_TEXT, MOBILE_MARKET_CARD_TEXT } from '../../../constants';
import { useLink } from '../../../hooks';
import PhoneImage from '../../../assets/phone_image.svg';
import AppStore from '../../../assets/app_store.svg';
import GooglePlay from '../../../assets/google_play.svg';

export const MobileMarketsContentSection: React.FC = () => {
  const { palette, typography } = useTheme();

  const linkProps = {
    linkColor: palette.common.white,
    linkText: MOBILE_MARKET_CARD_LINK_TEXT,
    iconName: 'ArrowRight'
  };
  return (
    <BoxStyled flexDirection={'column'} gap={34}>
      <BoxStyled gap={24} alignItems={'flex-start'}>
        <BoxStyled flexDirection={'column'} gap={12} alignItems={'flex-start'} padding={'8px 0 0'}>
          <TypographyStyled
            fontSize={22}
            lineHeight={'27px'}
            fontWeight={typography.fontWeightMedium}
            color={palette.common.white}>
            {MOBILE_MARKET_CARD_TEXT}
          </TypographyStyled>
          {useLink(linkProps)}
        </BoxStyled>
        <BoxStyled component={'img'} src={PhoneImage} alt={'Phone'} />
      </BoxStyled>
      <BoxStyled gap={26}>
        <BoxStyled component={'img'} src={AppStore} alt={'App Store'} />
        <BoxStyled component={'img'} src={GooglePlay} alt={'Google Play'} />
      </BoxStyled>
    </BoxStyled>
  );
};
