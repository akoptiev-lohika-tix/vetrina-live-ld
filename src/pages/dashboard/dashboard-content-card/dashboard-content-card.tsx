import React from 'react';

import { CardActions, useTheme } from '@mui/material';

import { CardStyled } from './card-styled';
import { useLink } from '../../../hooks';
import { BoxStyled, IconButtonStyled, TypographyStyled } from '../../../components/shared-styled';
import { SvgCreator } from '../../../helpers';
import { CONTENT_DROPDOWN_TEXT } from '../../../constants';

type Props = {
  headerIcon: string;
  headerText: string;
  hasDropDown?: boolean;
  children?: JSX.Element;
  linkText: string;
  linkColor: string;
  hasIcon?: boolean;
  iconName?: string;
  linkGap?: number;
  width?: number | string;
};

const DashboardContentCard: React.FC<Props> = ({
  headerIcon,
  headerText,
  hasDropDown = true,
  children,
  ...linkProps
}) => {
  const { palette, typography } = useTheme();

  return (
    <CardStyled elevation={1}>
      <BoxStyled gap={96} justifyContent={'space-between'}>
        <BoxStyled gap={16}>
          <SvgCreator iconName={headerIcon} color={palette.primary.main} />
          <TypographyStyled
            fontSize={20}
            fontWeight={typography.fontWeightMedium}
            lineHeight={'25px'}
            color={palette.primary.main}>
            {headerText}
          </TypographyStyled>
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
      </BoxStyled>
      {children}
      <CardActions>{useLink(linkProps)}</CardActions>
    </CardStyled>
  );
};

export default DashboardContentCard;
