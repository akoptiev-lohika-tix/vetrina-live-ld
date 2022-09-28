import React, { useEffect } from 'react';
import { Box, FormControl, MenuItem, Select } from '@mui/material';
import { useTypedSelector } from '../../redux/hooks';
import { fetchStores } from '../../redux/action-creators/stores';

const NavigationSelect: React.FC = () => {
  const { stores } = useTypedSelector((state) => state.stores);

  useEffect(() => {
    fetchStores();
  }, [stores]);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={'0'}>
          {stores.map((store) => (
            <MenuItem value={store.id} key={store.id}>
              {store.displayName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default NavigationSelect;
