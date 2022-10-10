import React from 'react';

import { useTheme } from '@mui/material/styles';

import { SvgCreator } from '../../helpers';
import { IconButtonStyled, ListStyled } from '../shared-styled';
import NavListItem from '../nav-list-item/nav-list-item';
import NavigationSelect from '../navigation-select/navigation-select';
import { DrawerStyled } from './drawer-styled';
import { DrawerHeaderStyled } from './drawer-header-styled';
import { Page } from '../../interfaces';

type Props = {
  pages: Page[];
  open: boolean;
  onClose: () => void;
};

export const Drawer: React.FC<Props> = ({ open, onClose, pages }) => {
  const { palette } = useTheme();

  return (
    <DrawerStyled variant="permanent" open={open}>
      <DrawerHeaderStyled
        sx={{
          display: 'flex',
          gap: 12,
          justifyContent: 'flex-start',
          paddingLeft: 2.5,
          mb: '16px'
        }}>
        {open && <SvgCreator iconName={'Logo'} />}
        <IconButtonStyled onClick={onClose} width={24} height={24} disableRipple>
          <SvgCreator iconName={'Menu'} color={palette.primary.main} />
        </IconButtonStyled>
      </DrawerHeaderStyled>
      <ListStyled marginbottom={60}>
        {pages.map((page) => (
          <NavListItem key={page.id} page={page} open={open} />
        ))}
      </ListStyled>
      <NavigationSelect open={open} />
    </DrawerStyled>
  );
};
