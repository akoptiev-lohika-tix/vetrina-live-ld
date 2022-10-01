import React, { useState } from 'react';

import { Box, FormControl, MenuItem, Select, SelectChangeEvent, useTheme } from '@mui/material';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

import { useTypedSelector } from '../../redux/hooks';
import { NAV_SELECT_LABEL } from '../../constants';
import { TypographyStyled, InputStyled } from '../shared-styled';

const NavigationSelect: React.FC = () => {
  const { stores } = useTypedSelector((state) => state.stores);
  const [value, setValue] = useState('0');
  const { palette, typography, shadows } = useTheme();

  const getBorders = (index: number, list: any[]): Record<string, string> | undefined => {
    if (index !== list.indexOf(list.at(-1))) {
      return {
        borderBottom: '1px solid rgba(10, 37, 64, 0.08)'
      };
    }
  };

  const handleSelectChange = (event: SelectChangeEvent): void => {
    setValue(event.target.value);
  };

  const classes = {
    box: {
      width: '216px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      alignItems: 'flex-start',
      marginBottom: '24px',
      marginLeft: '16px'
    },
    menu: {
      PaperProps: {
        style: {
          borderRadius: '5px',
          marginTop: '15px'
        }
      }
    },
    menuItem: {
      fontSize: '14px',
      lineHeight: '18px',
      padding: '16px',
      color: palette.primary.main,
      // TODO - change important
      background: 'transparent !important',
      '&:hover': {
        background: palette.common.white
      }
    }
  };

  return (
    <Box sx={classes.box}>
      <TypographyStyled
        fontSize={'15px'}
        fontWeight={typography.fontWeightMedium}
        lineHeight={'20px'}
        color={palette.primary.light}>
        {NAV_SELECT_LABEL}
      </TypographyStyled>
      <FormControl fullWidth>
        <Select
          value={value}
          onChange={handleSelectChange}
          input={
            <InputStyled
              border={'1px solid #0025403d'}
              textcolor={palette.primary.dark}
              textsize={'14px'}
              lineheight={'18px'}
              focuscolor={palette.secondary.main}
              focusshadow={shadows[1]}
            />
          }
          IconComponent={KeyboardArrowDownRoundedIcon}
          MenuProps={classes.menu}>
          {stores.map((store, i, arr) => (
            <MenuItem
              sx={classes.menuItem}
              value={store.id}
              key={store.id}
              style={getBorders(i, arr)}>
              {store.displayName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default NavigationSelect;
