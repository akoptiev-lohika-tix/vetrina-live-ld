import React from 'react';

import { Grid } from '@mui/material';

import { useTypedSelector } from '../../../redux/hooks';
import { NewsContentItem } from './news-content-item';
import { LoadingError } from '../../../components/loading-error/loading-error';

export const NewsContentSection: React.FC = () => {
  const styles = {
    gridBox: {
      marginTop: '22px'
    }
  };

  const { news, errorNews } = useTypedSelector((state) => state.news);

  return (
    <Grid container sx={styles.gridBox} columnSpacing={2.5} rowSpacing={4}>
      {errorNews && <LoadingError error={errorNews} />}
      {news &&
        [...news].slice(0, 8).map((newsItem) => (
          <Grid item xs={6} key={newsItem.title}>
            <NewsContentItem newsItem={newsItem} />
          </Grid>
        ))}
    </Grid>
  );
};
