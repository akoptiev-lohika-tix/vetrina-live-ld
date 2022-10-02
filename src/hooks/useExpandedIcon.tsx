import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material';

import { Page } from '../interfaces';
import { SvgCreator } from '../helpers';
import IconButtonStyled from '../components/navigation/icon-button-styled';

type MouseEventHandler = React.MouseEventHandler<HTMLButtonElement>;

export const useExpandedIcon = (
  page: Page,
  isExpandedOpen: boolean,
  handler: MouseEventHandler
): JSX.Element | null => {
  const { palette } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (page.subPages) {
      setIsExpanded(true);
    }
  }, [page]);

  if (isExpanded) {
    return (
      <IconButtonStyled onClick={handler} disableRipple>
        {isExpandedOpen ? (
          <SvgCreator iconName={'ChevronUp'} color={palette.primary.main} />
        ) : (
          <SvgCreator iconName={'ChevronDown'} color={palette.primary.main} />
        )}
      </IconButtonStyled>
    );
  } else {
    return null;
  }
};
