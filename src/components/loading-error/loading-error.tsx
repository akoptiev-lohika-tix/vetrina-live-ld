import React from 'react';

import { useTheme } from '@mui/material/styles';

import { BoxStyled, TypographyStyled } from '../shared-styled';

type Props = {
  error: string;
};

export const LoadingError: React.FC<Props> = ({ error }) => {
  const { palette } = useTheme();

  return (
    <BoxStyled bgcolor={palette.error.main} margin={'auto'} padding={8} borderRadius={10}>
      <TypographyStyled fontSize={24} color={palette.common.white}>
        {error}
      </TypographyStyled>
    </BoxStyled>
  );
};
