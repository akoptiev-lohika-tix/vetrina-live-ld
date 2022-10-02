import React, { useEffect, useState } from 'react';

import { Collapse, Typography, useTheme } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';

import ListItemStyled from './list-item-styled';
import { Page, SubPage } from '../../interfaces';
import { useExpandedIcon } from '../../hooks/useExpandedIcon';
import ListItemButtonStyled from './list-item-button-styled';
import { SharedBoxStyled, SharedListStyled } from '../shared-styled';
import ListItemIconStyled from './list-item-icon-styled';

import { SvgCreator } from '../../helpers';

type Props = {
  page: Page;
  selectedId: Page['id'];
  onListItemClick: (id: Page['id']) => void;
};

const NavigationListItem: React.FC<Props> = ({ page, selectedId, onListItemClick }) => {
  const { palette } = useTheme();
  const [isExpandedOpen, setIsExpandedOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    checkIsPageActive(selectedId);
  }, [selectedId]);

  const checkIsPageActive = (id: Page['id'] | SubPage['id']) => {
    if (page.id === id) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const toggleExpandedOpen = (): void => {
    setIsExpandedOpen(!isExpandedOpen);
  };

  return (
    <>
      <ListItemStyled
        disablePadding
        color={palette.primary.main}
        marginbottom={page.name !== 'logOut' ? 2 : 0}>
        <SharedBoxStyled
          width={3}
          height={32}
          bgcolor={isActive && !isExpandedOpen ? palette.secondary.main : 'transparent'}
          marginRight={4}
          borderRadius={20}
        />
        <ListItemButtonStyled
          disableGutters
          disableRipple
          height={32}
          paddingleft={'12px'}
          backgroundcolor={isActive && !isExpandedOpen ? palette.grey['500'] : 'transparent'}
          color={isActive && !isExpandedOpen ? palette.secondary.main : palette.primary.dark}
          onClick={() => onListItemClick(page.id)}>
          <ListItemIconStyled width={36}>
            <SvgCreator iconName={page.iconName} color={palette.primary.main} />
          </ListItemIconStyled>
          <ListItemText primary={page.displayName} />
          {useExpandedIcon(page, isExpandedOpen, toggleExpandedOpen)}
          {page.hasBadge && (
            <SharedBoxStyled
              height={24}
              width={24}
              borderRadius={12}
              color={palette.common.white}
              bgcolor={palette.success.main}>
              <Typography>14</Typography>
            </SharedBoxStyled>
          )}
        </ListItemButtonStyled>
      </ListItemStyled>
      {page.subPages && (
        <Collapse in={isExpandedOpen} timeout="auto" unmountOnExit>
          <SharedListStyled background={palette.secondary.light} paddingtop={6} paddingbottom={6}>
            {page.subPages.map((subPage) => (
              <ListItemStyled
                key={subPage.id}
                color={palette.primary.dark}
                disablePadding
                marginbottom={0}>
                <ListItemButtonStyled
                  disableGutters
                  disableRipple
                  height={36}
                  paddingleft={'56px'}
                  backgroundcolor={subPage.id === selectedId ? palette.grey['500'] : 'transparent'}
                  onClick={() => onListItemClick(subPage.id)}>
                  <ListItemText primary={subPage.displayName} />
                </ListItemButtonStyled>
              </ListItemStyled>
            ))}
          </SharedListStyled>
        </Collapse>
      )}
    </>
  );
};

export default NavigationListItem;
