import { setDisplay, SvgCreator } from '../../helpers';
import ListItemText from '@mui/material/ListItemText';
import { useExpandedIcon } from '../../hooks/useExpandedIcon';
import { DividerStyled, ListStyled, ListItemStyled, BoxStyled } from '../shared-styled';
import * as React from 'react';
import { Page } from '../../interfaces';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Collapse, ListItemIcon } from '@mui/material';

import ListItemButtonStyled from '../shared-styled/list-item-button-styled';

type Props = {
  page: Page;
  open: boolean;
  selectedId: Page['id'];
  onListItemClick: (id: Page['id']) => void;
};

const NavListItem: React.FC<Props> = ({ page, open, selectedId, onListItemClick }) => {
  const { palette } = useTheme();
  const [isExpandedOpen, setIsExpandedOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    checkIsPageActive(selectedId);
  }, [selectedId]);

  useEffect(() => {
    !open && setIsExpandedOpen(false);
  }, [open]);

  const toggleExpandedOpen = (): void => {
    setIsExpandedOpen(!isExpandedOpen);
  };

  const checkIsPageActive = (id: Page['id']) => {
    if (page.id === id) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <>
      <ListItemStyled
        disablePadding
        color={palette.primary.main}
        marginbottom={page.name !== 'logOut' ? 2 : 0}>
        <BoxStyled
          width={3}
          height={32}
          bgcolor={isActive ? palette.secondary.main : 'transparent'}
          marginRight={4}
          borderRadius={20}
        />
        <BoxStyled
          bgcolor={isActive ? palette.grey['500'] : 'transparent'}
          width={'100%'}
          borderRadius={4}>
          <ListItemButtonStyled
            disableGutters
            disableRipple
            paddingleft={open ? 13 : 15}
            height={32}
            color={isActive ? palette.secondary.main : palette.primary.dark}
            onClick={() => {
              onListItemClick(page.id);
            }}>
            <ListItemIcon
              sx={{
                minWidth: 0,
                width: '20px',
                height: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                ...(open && { mr: '16px' })
              }}>
              <SvgCreator
                iconName={page.iconName}
                color={isActive ? palette.secondary.main : palette.primary.main}
              />
            </ListItemIcon>
            {open && <ListItemText primary={page.displayName} />}
          </ListItemButtonStyled>
          <ListItemIcon
            sx={{
              minWidth: 0,
              width: '20px',
              height: '20px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mr: '20px',
              ...(!open && { display: 'none' })
            }}>
            {useExpandedIcon(page, isExpandedOpen, toggleExpandedOpen, setDisplay(open))}
          </ListItemIcon>
        </BoxStyled>
      </ListItemStyled>
      {page.name === 'logOut' && (
        <DividerStyled marginbottom={24} margintop={24} color={palette.grey['400']} />
      )}
      {page.subPages && (
        <Collapse in={isExpandedOpen} timeout="auto" unmountOnExit>
          <ListStyled background={palette.secondary.light} paddingtop={6} paddingbottom={6}>
            {page.subPages.map((subPage) => (
              <ListItemStyled
                key={subPage.id}
                color={subPage.id === selectedId ? palette.secondary.main : palette.primary.dark}
                disablePadding
                marginbottom={0}>
                <ListItemButtonStyled
                  disableGutters
                  disableRipple
                  height={36}
                  paddingleft={56}
                  onClick={() => {
                    onListItemClick(subPage.id);
                  }}>
                  <ListItemText primary={subPage.displayName} />
                </ListItemButtonStyled>
              </ListItemStyled>
            ))}
          </ListStyled>
        </Collapse>
      )}
    </>
  );
};

export default NavListItem;
