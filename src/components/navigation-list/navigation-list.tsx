import React from 'react';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import DrawerStyled from './drawer-styled';
import NavigationListItem from '../navigation-list-item/navigation-list-item';
import { useTypedSelector } from '../../redux/hooks';

type Props = {
  open: boolean;
};

export const NavigationList: React.FC<Props> = ({ open }) => {
  const { mainPages } = useTypedSelector((state) => state.mainPages);

  return (
    <DrawerStyled variant="persistent" anchor="top" open={open}>
      <List>
        {mainPages.map((page) => {
          if (page.name === 'logOut') {
            return (
              <>
                <NavigationListItem key={page.id} page={page} />
                <Divider />
              </>
            );
          }

          return <NavigationListItem key={page.id} page={page} />;
        })}
      </List>
    </DrawerStyled>
  );
};

export default NavigationList;
