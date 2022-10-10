import React from 'react';

import { ImageList, ImageListItem, ImageListItemBar, useTheme } from '@mui/material';

import OrangeImage from '../../../assets/extension_orange_img.svg';
import GreenImage from '../../../assets/extension_green_img.svg';

import {
  EXTENSION_MARKETPLACE_GREEN_DESCRIPTION,
  EXTENSION_MARKETPLACE_ORANGE_DESCRIPTION
} from '../../../constants';

export const ExtensionContentSection: React.FC = () => {
  const { palette } = useTheme();
  const styles = {
    list: {
      width: '100%',
      margin: 0
    },
    listItem: {
      width: '152px',
      height: '150px'
    },
    itemBar: {
      fontFamily: 'Source Sans Pro, sans-serif',
      lineHeight: '20px',
      padding: 0,
      color: palette.primary.main,
      '& .MuiImageListItemBar-title': {
        whiteSpace: 'wrap',
        width: '140px'
      }
    }
  };
  return (
    <ImageList cols={3} rowHeight={'auto'} gap={50} sx={styles.list}>
      <ImageListItem sx={styles.listItem}>
        <img src={OrangeImage} loading="lazy" alt={EXTENSION_MARKETPLACE_ORANGE_DESCRIPTION} />
        <ImageListItemBar
          sx={styles.itemBar}
          position="below"
          title={EXTENSION_MARKETPLACE_ORANGE_DESCRIPTION}
        />
      </ImageListItem>
      <ImageListItem sx={styles.listItem}>
        <img src={GreenImage} loading="lazy" alt={EXTENSION_MARKETPLACE_GREEN_DESCRIPTION} />
        <ImageListItemBar
          sx={styles.itemBar}
          position="below"
          title={EXTENSION_MARKETPLACE_GREEN_DESCRIPTION}
        />
      </ImageListItem>
      <ImageListItem sx={styles.listItem}>
        <img src={OrangeImage} loading="lazy" alt={EXTENSION_MARKETPLACE_ORANGE_DESCRIPTION} />
        <ImageListItemBar
          sx={styles.itemBar}
          position="below"
          title={EXTENSION_MARKETPLACE_ORANGE_DESCRIPTION}
        />
      </ImageListItem>
    </ImageList>
  );
};
