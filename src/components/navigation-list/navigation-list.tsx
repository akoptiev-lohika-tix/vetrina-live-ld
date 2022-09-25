import React from 'react';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import NavigationListItem from '../navigation-list-item/navigation-list-item';
import { useTypedSelector } from '../../redux/hooks';

export const NavigationList: React.FC = () => {
  const { pages } = useTypedSelector((state) => state.pages);

  return (
    <List>
      {pages.map((page) => {
        return (
          <>
            <NavigationListItem key={page.id} page={page} />
            {page.name === 'logOut' && <Divider />}
          </>
        );
      })}
    </List>
  );
};

export default NavigationList;
