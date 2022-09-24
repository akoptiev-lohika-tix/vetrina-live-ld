import React from 'react';

import { useTheme } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import SvgCreator from '../svg-creator/svg-creator';
import ListItemStyled from './list-item-styled';
import { Page } from '../../interfaces';
import { useExpandedIcon } from '../../hooks/useExpandedIcon';

type Props = {
  page: Page;
};

export const NavigationListItem: React.FC<Props> = ({ page }) => {
  const { palette } = useTheme();

  return (
    <ListItemStyled
      disablePadding
      color={palette.primary.main}
      secondaryAction={useExpandedIcon(page)}>
      <ListItemButton>
        <ListItemIcon>
          <SvgCreator iconName={'Catalogue'} />
        </ListItemIcon>
        <ListItemText primary={page.displayName} />
      </ListItemButton>
    </ListItemStyled>
  );
};

export default NavigationListItem;
