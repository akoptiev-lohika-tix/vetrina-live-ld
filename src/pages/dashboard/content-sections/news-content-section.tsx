import React from 'react';

import { Grid } from '@mui/material';

import { useTypedSelector } from '../../../redux/hooks';
import { NewsContentItem } from './news-content-item';

export const NewsContentSection: React.FC = () => {
  const styles = {
    gridBox: {
      marginTop: '22px'
    }
  };

  const { news } = useTypedSelector((state) => state.news);

  return (
    <Grid container sx={styles.gridBox} columnSpacing={2.5} rowSpacing={4}>
      {news &&
        [...news].slice(0, 8).map((newsItem) => (
          <Grid item xs={6} key={newsItem.title}>
            <NewsContentItem newsItem={newsItem} />
          </Grid>
        ))}
    </Grid>
  );
};
