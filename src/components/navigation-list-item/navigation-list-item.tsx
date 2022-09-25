import React, { useState } from 'react';

import { Collapse, useTheme } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import SvgCreator from '../svg-creator/svg-creator';
import ListItemStyled from './list-item-styled';
import { Page } from '../../interfaces';
import { useExpandedIcon } from '../../hooks/useExpandedIcon';
import DrawerStyled from '../navigation/drawer-styled';

type Props = {
  page: Page;
};

export const NavigationListItem: React.FC<Props> = ({ page }) => {
  const { palette } = useTheme();

  const [isExpandedOpen, setIsExpandedOpen] = useState(false);

  const toggleExpandedOpen = (): void => {
    setIsExpandedOpen(!isExpandedOpen);
  };

  return (
    <ListItemStyled
      disablePadding
      color={palette.primary.main}
      secondaryAction={useExpandedIcon(page, toggleExpandedOpen)}>
      <ListItemButton>
        <ListItemIcon>
          <SvgCreator iconName={'Catalogue'} />
        </ListItemIcon>
        <ListItemText primary={page.displayName} />
      </ListItemButton>
      {page.subPages && (
        <Collapse
          in={isExpandedOpen}
          timeout="auto"
          unmountOnExit
          sx={{
            width: '250px'
          }}>
          <DrawerStyled variant="persistent" anchor="top" open={isExpandedOpen}>
            <List>
              {page.subPages.map((subPage) => (
                <ListItemStyled key={subPage.id} color={palette.primary.dark}>
                  <ListItemButton>
                    <ListItemText primary={subPage.displayName} />
                  </ListItemButton>
                </ListItemStyled>
              ))}
            </List>
          </DrawerStyled>
        </Collapse>
      )}
    </ListItemStyled>
  );
};

export default NavigationListItem;
