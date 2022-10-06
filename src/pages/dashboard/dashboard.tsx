import React from 'react';

import { Grid } from '@mui/material';

import DashboardHeader from './dashboard-header/dashboard-header';
import DashboardContentCard from './dashboard-content-card/dashboard-content-card';
import { BoxStyled } from '../../components/shared-styled';

const Dashboard: React.FC = () => {
  const styles = {
    grid: {
      mb: '40px',
      position: 'absolute',
      top: '-54px',
      padding: '0 40px 40px'
    },
    gridItem: {
      height: '100%'
    },
    box: {
      position: 'relative'
    }
  };

  return (
    <>
      <DashboardHeader />
      <BoxStyled marginBottom={40} sx={styles.box}>
        <Grid container spacing={3} sx={styles.grid}>
          <Grid item xs={8} container spacing={3}>
            <Grid item xs={6}>
              <DashboardContentCard height={'220px'} />
            </Grid>
            <Grid item xs={6}>
              <DashboardContentCard height={'220px'} />
            </Grid>
            <Grid item xs={6}>
              <DashboardContentCard height={'344px'} />
            </Grid>
            <Grid item xs={6}>
              <DashboardContentCard height={'344px'} />
            </Grid>
            <Grid item xs={12}>
              <DashboardContentCard height={'617px'} />
            </Grid>
          </Grid>
          <Grid item xs={4} container spacing={3} sx={styles.gridItem}>
            <Grid item xs={12}>
              <DashboardContentCard height={'290px'} />
            </Grid>
            <Grid item xs={12}>
              <DashboardContentCard height={'232px'} />
            </Grid>
            <Grid item xs={12}>
              <DashboardContentCard height={'232px'} />
            </Grid>
            <Grid item xs={12}>
              <DashboardContentCard height={'198px'} />
            </Grid>
          </Grid>
        </Grid>
      </BoxStyled>
    </>
  );
};

export default Dashboard;
