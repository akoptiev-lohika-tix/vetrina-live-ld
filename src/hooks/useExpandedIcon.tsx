import React, { useEffect, useState } from 'react';

import { IconButton } from '@mui/material';

import { Page } from '../interfaces';
import SvgCreator from '../components/svg-creator/svg-creator';

export const useExpandedIcon = (page: Page): JSX.Element | null => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (page.subPages) {
      setIsExpanded(!isExpanded);
    }
  }, [page]);

  if (isExpanded) {
    return (
      <IconButton disableRipple>
        <SvgCreator iconName={'ChevronDown'} />
      </IconButton>
    );
  } else {
    return null;
  }
};
