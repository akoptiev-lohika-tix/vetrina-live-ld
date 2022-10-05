import React from 'react';
import { Link } from '@mui/material';

import { BoxStyled, TypographyStyled } from '../components/shared-styled';
import { SvgCreator } from '../helpers';

type Props = {
  color?: string;
  fontFamily?: string;
  fontWeight?: number;
  lineHeight?: string;
  hasIcon?: boolean;
  linkText?: string;
  gap: number;
};
export const useLink: React.FC<Props> = ({
  color,
  fontFamily,
  fontWeight = 400,
  lineHeight = '20px',
  hasIcon = true,
  linkText = '',
  gap = 12
}) => {
  return (
    <Link href="/fenoh-store">
      <BoxStyled color={color} gap={gap} alignItems={'flex-end'} marginTop={8}>
        <TypographyStyled
          fontFamily={fontFamily}
          fontWeight={fontWeight}
          fontSize={17}
          lineHeight={lineHeight}
          textdecorationline={'underline'}>
          {linkText}
        </TypographyStyled>
        {hasIcon && <SvgCreator iconName={'HyperLink'} color={color} />}
      </BoxStyled>
    </Link>
  );
};
