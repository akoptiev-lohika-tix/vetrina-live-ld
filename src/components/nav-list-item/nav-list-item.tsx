import React, { memo, useEffect, useState } from 'react';

import { useTheme } from '@mui/material/styles';
import { Collapse, ListItemIcon } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import Badge from '@mui/material/Badge';

import { useExpandedIcon } from '../../hooks';
import { DividerStyled, ListStyled, BoxStyled } from '../shared-styled';
import { Page, SubPage } from '../../interfaces';
import ListItemButtonStyled from './list-item-button-styled';
import { setDisplay } from '../../helpers';
import { useActions, useTypedSelector } from '../../redux/hooks';
import { ListItemStyled } from './list-item-styled';
import { SvgCreator } from '../svg-creator/svg-creator';

type Props = {
  page: Page;
  open: boolean;
};

const NavListItem: React.FC<Props> = ({ page, open }) => {
  const styles = {
    badge: {
      '& .MuiBadge-badge': {
        width: '24px',
        height: '24px',
        fontSize: '14px',
        fontFamily: 'Source Sans Pro, sans-serif',
        fontWeight: 600,
        padding: 0,
        borderRadius: 12,
        color: '#ffffff'
      }
    },
    listIcon: {
      minWidth: 0,
      width: '20px',
      height: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      ...(open && { mr: '16px' })
    },
    expandedIcon: {
      minWidth: 0,
      width: '20px',
      height: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      mr: '20px',
      ...(!open && { display: 'none' })
    },
    link: {
      textDecoration: 'none'
    }
  };
  const { palette } = useTheme();
  const [isExpandedOpen, setIsExpandedOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { activePageName } = useTypedSelector((state) => state.pages);
  const { activeStore } = useTypedSelector((state) => state.stores);
  const { setActivePage } = useActions();
  const icon = useExpandedIcon(page, isExpandedOpen, toggleExpandedOpen, setDisplay(open));

  useEffect(() => {
    checkIsPageActive(activePageName);
  }, [activePageName]);

  useEffect(() => {
    !open && setIsExpandedOpen(false);
  }, [open]);

  function toggleExpandedOpen(): void {
    setIsExpandedOpen(!isExpandedOpen);
  }

  const checkIsPageActive = (
    pageName: Page['displayName'] | SubPage['displayName'] | null
  ): void => {
    if (activePageName && page.displayName === pageName) {
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
              setActivePage(page.displayName);
            }}>
            <ListItemIcon sx={styles.listIcon}>
              <SvgCreator
                iconName={page.iconName}
                color={isActive ? palette.secondary.main : palette.primary.main}
              />
            </ListItemIcon>
            {open && <ListItemText primary={page.displayName} />}
          </ListItemButtonStyled>
          <ListItemIcon sx={styles.expandedIcon}>
            {icon}
            {page.hasBadge && (
              <Badge
                sx={styles.badge}
                badgeContent={activeStore?.data?.ordersNew}
                color="success"
              />
            )}
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
                color={
                  subPage.displayName === activePageName
                    ? palette.secondary.main
                    : palette.primary.dark
                }
                disablePadding
                marginbottom={0}>
                <ListItemButtonStyled
                  disableGutters
                  disableRipple
                  height={36}
                  paddingleft={56}
                  onClick={() => {
                    setActivePage(subPage.displayName);
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

export default memo(NavListItem);
