import React, { useState } from 'react';

import { FormControl, MenuItem, Select, SelectChangeEvent, useTheme } from '@mui/material';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

import { useTypedSelector } from '../../redux/hooks';
import { NAV_SELECT_LABEL } from '../../constants';
import { TypographyStyled, InputStyled, BoxStyled } from '../shared-styled';

type Props = {
  open: boolean;
};

const NavigationSelect: React.FC<Props> = ({ open }) => {
  const { stores } = useTypedSelector((state) => state.stores);
  const [value, setValue] = useState('0');
  const { palette, typography, shadows } = useTheme();

  const styles = {
    box: {
      flexDirection: 'column'
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

  const getVisibility = (): Record<string, string> => {
    return !open
      ? {
          ...styles.box,
          visibility: 'hidden'
        }
      : styles.box;
  };

  return (
    <BoxStyled
      sx={getVisibility}
      width={216}
      gap={16}
      alignItems={'flex-start'}
      marginBottom={24}
      marginLeft={16}>
      <TypographyStyled
        fontSize={15}
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
          MenuProps={styles.menu}>
          {stores.map((store, i, arr) => (
            <MenuItem
              sx={styles.menuItem}
              value={store.id}
              key={store.id}
              style={getBorders(i, arr)}>
              {store.displayName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </BoxStyled>
  );
};

export default NavigationSelect;
