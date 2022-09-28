import React, { useState } from 'react';

import { useTypedSelector } from '../../redux/hooks';
import { Page } from '../../interfaces';
import { SharedListStyled } from '../shared-styled';
import DividerStyled from './divider-styled';
import { useTheme } from '@mui/material';
import NavigationListItem from '../navigation-list-item/navigation-list-item';

export const NavigationList: React.FC = () => {
  const { pages } = useTypedSelector((state) => state.pages);
  const { palette } = useTheme();

  const [selectedId, setSelectedId] = useState<Page['id']>(0);

  const handleItemClick = (id: Page['id']): void => {
    setSelectedId(id);
  };

  return (
    <SharedListStyled paddingtop={15}>
      {pages.map((page) => (
        <>
          <NavigationListItem
            key={page.id}
            page={page}
            onListItemClick={handleItemClick}
            selectedId={selectedId}
          />
          {page.name === 'logOut' && (
            <DividerStyled marginbottom={16} margintop={16} color={palette.grey['400']} />
          )}
        </>
      ))}
    </SharedListStyled>
  );
};

export default NavigationList;
