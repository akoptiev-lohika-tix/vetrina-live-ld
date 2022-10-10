import React from 'react';
import { Link } from '@mui/material';

import { BoxStyled, TypographyStyled } from '../shared-styled';
import { SvgCreator } from '../svg-creator/svg-creator';

type Props = {
  linkColor?: string;
  fontFamily?: string;
  fontWeight?: number;
  lineHeight?: string;
  hasIcon?: boolean;
  linkText?: string;
  linkGap?: number;
  iconName?: string;
  marginTop?: string | number;
};
export const LinkCreator: React.FC<Props> = ({
  linkColor,
  fontFamily = 'Source Sans Pro, sans-serif',
  fontWeight = 400,
  lineHeight = '20px',
  hasIcon = true,
  linkText = '',
  linkGap = 12,
  iconName,
  marginTop = 0
}) => {
  return (
    <Link href="/src/pages#">
      <BoxStyled
        color={linkColor}
        gap={linkGap}
        alignItems={'flex-end'}
        marginTop={marginTop}
        justifyContent={'space-between'}>
        <TypographyStyled
          fontFamily={fontFamily}
          fontWeight={fontWeight}
          fontSize={17}
          lineHeight={lineHeight}
          textdecorationline={'underline'}>
          {linkText}
        </TypographyStyled>
        {hasIcon && iconName && <SvgCreator iconName={iconName} color={linkColor} />}
      </BoxStyled>
    </Link>
  );
};
