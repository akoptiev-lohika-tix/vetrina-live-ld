import React, { useEffect, useState } from 'react';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import NavigationListItem from '../navigation-list-item/navigation-list-item';
import { useTypedSelector } from '../../redux/hooks';
import { Page } from '../../interfaces';

export const NavigationList: React.FC = () => {
  const { pages } = useTypedSelector((state) => state.pages);

  const [selectedId, setSelectedId] = useState<Page['id']>(0);

  const handleItemClick = (id: Page['id']): void => {
    setSelectedId(id);
  };

  useEffect(() => {
    console.log(selectedId);
  }, [selectedId]);

  return (
    <List>
      {pages.map((page) => (
        <>
          <NavigationListItem
            key={page.id}
            page={page}
            onListItemClick={handleItemClick}
            selectedId={selectedId}
          />
          {page.name === 'logOut' && (
            <Divider
              sx={{
                marginBottom: '20px',
                marginTop: '20px'
              }}
            />
          )}
        </>
      ))}
    </List>
  );
};

export default NavigationList;
