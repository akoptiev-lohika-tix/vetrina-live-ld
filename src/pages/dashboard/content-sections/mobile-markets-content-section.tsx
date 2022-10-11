import React from 'react';

import { Link, useTheme } from '@mui/material';

import { BoxStyled, TypographyStyled } from '../../../components/shared-styled';
import { MOBILE_MARKET_CARD_LINK_TEXT, MOBILE_MARKET_CARD_TEXT } from '../../../constants';

import PhoneImage from '../../../assets/phone.png';
import AppStore from '../../../assets/app_store.svg';
import GooglePlay from '../../../assets/google_play.svg';
import { LinkCreator } from '../../../components/link-creator/link-creator';

export const MobileMarketsContentSection: React.FC = () => {
  const { palette, typography } = useTheme();

  const linkProps = {
    linkColor: palette.common.white,
    linkText: MOBILE_MARKET_CARD_LINK_TEXT,
    iconName: 'ArrowRight',
    linkTo: 'mobile-market'
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
          <LinkCreator {...linkProps} />
        </BoxStyled>
        <BoxStyled component={'img'} src={PhoneImage} alt={'Phone'} />
      </BoxStyled>
      <BoxStyled gap={26}>
        <Link href="https://www.apple.com/ru/app-store" target="_blank" rel="noopener">
          <BoxStyled component={'img'} src={AppStore} alt={'App Store'} />
        </Link>
        <Link href="https://play.google.com/store/games" target="_blank" rel="noopener">
          <BoxStyled component={'img'} src={GooglePlay} alt={'Google Play'} />
        </Link>
      </BoxStyled>
    </BoxStyled>
  );
};
