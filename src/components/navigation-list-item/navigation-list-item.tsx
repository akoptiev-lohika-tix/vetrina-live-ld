import React, { useState } from 'react';

import { Badge, Collapse, useTheme } from '@mui/material';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import SvgCreator from '../svg-creator/svg-creator';
import ListItemStyled from './list-item-styled';
import { Page } from '../../interfaces';
import { useExpandedIcon } from '../../hooks/useExpandedIcon';
import ListItemButtonStyled from './list-item-button-styled';
import { SharedBoxStyled } from '../shared-styled';

type Props = {
  page: Page;
  selectedId: Page['id'];
  onListItemClick: (id: Page['id']) => void;
};

export const NavigationListItem: React.FC<Props> = ({ page, selectedId, onListItemClick }) => {
  const { palette } = useTheme();

  const [isExpandedOpen, setIsExpandedOpen] = useState(false);

  const toggleExpandedOpen = (): void => {
    setIsExpandedOpen(!isExpandedOpen);
  };

  return (
    <>
      <ListItemStyled disablePadding color={palette.primary.main}>
        <SharedBoxStyled
          width={3}
          height={32}
          bgcolor={palette.secondary.main}
          marginRight={4}
          borderRadius={20}
        />
        <ListItemButtonStyled
          disableGutters
          disableRipple
          height={32}
          paddingleft={'12px'}
          onClick={() => onListItemClick(page.id)}>
          <ListItemIcon>
            <SvgCreator iconName={'Catalogue'} />
          </ListItemIcon>
          <ListItemText primary={page.displayName} />
        </ListItemButtonStyled>
        {useExpandedIcon(page, isExpandedOpen, toggleExpandedOpen)}
        {page.hasBadge && <Badge badgeContent={4} color="primary" />}
      </ListItemStyled>
      {page.subPages && (
        <Collapse in={isExpandedOpen} timeout="auto" unmountOnExit>
          <List
            sx={{
              width: '250px',
              background: palette.secondary.light
            }}>
            {page.subPages.map((subPage) => (
              <ListItemStyled key={subPage.id} color={palette.primary.dark}>
                <ListItemButtonStyled
                  disableGutters
                  disableRipple
                  height={36}
                  paddingleft={'32px'}
                  onClick={() => onListItemClick(subPage.id)}>
                  <ListItemText primary={subPage.displayName} />
                </ListItemButtonStyled>
              </ListItemStyled>
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default NavigationListItem;
