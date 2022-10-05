import React from 'react';

import { Grid } from '@mui/material';

import DashboardHeader from './dashboard-header/dashboard-header';
import DashboardContentCard from './dashboard-content-card/dashboard-content-card';
import { BoxStyled } from '../../components/shared-styled';

const Dashboard: React.FC = () => {
  return (
    <>
      <DashboardHeader />
      <BoxStyled padding={'0 40px'}>
        <Grid container spacing={3}>
          <Grid item lg={4}>
            <DashboardContentCard height={'220px'} />
          </Grid>
          <Grid item lg={4}>
            <DashboardContentCard height={'220px'} />
          </Grid>
          <Grid item lg={4}>
            <DashboardContentCard height={'290px'} />
          </Grid>
          <Grid item lg={4}>
            <DashboardContentCard height={'344px'} />
          </Grid>
          <Grid item lg={4}>
            <DashboardContentCard height={'344px'} />
          </Grid>
        </Grid>
      </BoxStyled>
    </>
  );
};

export default Dashboard;
