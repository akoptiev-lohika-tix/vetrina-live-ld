import React, { useEffect, useState } from 'react';

import { Page } from '../interfaces';
import SvgCreator from '../components/svg-creator/svg-creator';
import IconButtonStyled from '../components/navigation/icon-button-styled';

type MouseEventHandler = React.MouseEventHandler<HTMLButtonElement>;

export const useExpandedIcon = (
  page: Page,
  isExpandedOpen: boolean,
  handler: MouseEventHandler
): JSX.Element | null => {
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
          <SvgCreator iconName={'ChevronUp'} />
        ) : (
          <SvgCreator iconName={'ChevronDown'} />
        )}
      </IconButtonStyled>
    );
  } else {
    return null;
  }
};
