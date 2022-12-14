import React from 'react';

import { CardActions, useTheme } from '@mui/material';

import { CardStyled } from './card-styled';

import { BoxStyled, IconButtonStyled, TypographyStyled } from '../../../components/shared-styled';

import { CONTENT_DROPDOWN_TEXT } from '../../../constants';
import { SvgCreator } from '../../../components/svg-creator/svg-creator';
import { LinkCreator } from '../../../components/link-creator/link-creator';
import TrustPilot from '../../../assets/trustpilot.svg';

type Props = {
  headerIcon?: string;
  headerText?: string;
  hasDropDown?: boolean;
  hasHeaderText?: boolean;
  hasLink?: boolean;
  children?: JSX.Element;
  background: string;
  linkText?: string;
  linkColor?: string;
  hasIcon?: boolean;
  iconName?: string;
  linkGap?: number;
  width?: number | string;
  isTrustpilot?: boolean;
  isNews?: boolean;
  isExtension?: boolean;
  isMobileMarket?: boolean;
  linkTo: string;
};

const DashboardContentCard: React.FC<Props> = ({
  headerIcon = 'ViewShop',
  headerText,
  hasDropDown = true,
  hasHeaderText = true,
  children,
  background,
  hasLink = true,
  isNews = false,
  isExtension = false,
  isMobileMarket = false,
  isTrustpilot = false,
  ...linkProps
}) => {
  const { palette, typography } = useTheme();

  return (
    <CardStyled
      gap={isNews ? 14 : 24}
      elevation={1}
      background={background}
      padding={isExtension ? '24px 0 24px 24px' : 24}>
      {!isMobileMarket && (
        <BoxStyled gap={96} justifyContent={'space-between'}>
          <BoxStyled gap={16} padding={isNews ? '0 8px' : '0'}>
            {!isTrustpilot ? (
              <SvgCreator iconName={headerIcon} color={palette.primary.main} />
            ) : (
              <BoxStyled component={'img'} src={TrustPilot} />
            )}
            {hasHeaderText && (
              <TypographyStyled
                fontSize={20}
                fontWeight={typography.fontWeightMedium}
                lineHeight={'25px'}
                color={palette.primary.main}>
                {headerText}
              </TypographyStyled>
            )}
          </BoxStyled>
          {hasDropDown && (
            <BoxStyled gap={8}>
              <>
                <TypographyStyled fontSize={14} lineHeight={'18px'} color={palette.grey['600']}>
                  {CONTENT_DROPDOWN_TEXT}
                </TypographyStyled>
                <IconButtonStyled width={16} height={16} disableRipple>
                  <SvgCreator iconName={'ChevronDownSmall'} color={palette.grey['600']} />
                </IconButtonStyled>
              </>
            </BoxStyled>
          )}
          {isNews && (
            <CardActions>
              <LinkCreator {...linkProps} />
            </CardActions>
          )}
        </BoxStyled>
      )}
      {children}

      {hasLink && !isMobileMarket && (
        <CardActions>
          <LinkCreator {...linkProps} />
        </CardActions>
      )}
    </CardStyled>
  );
};

export default DashboardContentCard;
