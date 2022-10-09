import React from 'react';

import { Grid, useTheme } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';

import DashboardHeader from './dashboard-header/dashboard-header';
import DashboardContentCard from './dashboard-content-card/dashboard-content-card';
import { BoxStyled } from '../../components/shared-styled';
import { useTypedSelector } from '../../redux/hooks';
import {
  ORDERS_CARD_LINK_TEXT,
  ORDERS_CARD_TITLE,
  VISITORS_CARD_LINK_TEXT,
  VISITORS_CARD_TITLE
} from '../../constants';
import { VisitorsContentSection } from './content-sections/visitors-content-section';
import { OrdersContentSection } from './content-sections/orders-content-section';

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
  },
  loader: {
    width: '100%',
    height: '6px',
    position: 'absolute'
  }
};

const Dashboard: React.FC = () => {
  const { loadingPages } = useTypedSelector((state) => state.pages);
  const { loadingActiveStore, activeStore } = useTypedSelector((state) => state.stores);
  const { palette } = useTheme();

  return (
    <>
      {loadingActiveStore && !loadingPages && <LinearProgress color="warning" sx={styles.loader} />}
      {activeStore && (
        <>
          <DashboardHeader />
          <BoxStyled marginBottom={40} sx={styles.box}>
            <Grid container spacing={3} sx={styles.grid}>
              <Grid item xs={8} container spacing={3}>
                <Grid item xs={6}>
                  <DashboardContentCard
                    headerText={VISITORS_CARD_TITLE}
                    headerIcon={'ViewShop'}
                    iconName={'ArrowRight'}
                    linkColor={palette.secondary.main}
                    linkText={VISITORS_CARD_LINK_TEXT}
                    linkGap={20}
                    width={'100%'}>
                    <VisitorsContentSection />
                  </DashboardContentCard>
                </Grid>
                <Grid item xs={6}>
                  <DashboardContentCard
                    headerText={ORDERS_CARD_TITLE}
                    headerIcon={'Orders'}
                    linkColor={palette.secondary.main}
                    linkText={ORDERS_CARD_LINK_TEXT}>
                    <OrdersContentSection />
                  </DashboardContentCard>
                </Grid>
                {/* <Grid item xs={6}>*/}
                {/*  <DashboardContentCard iconName={'ArrowRight'} />*/}
                {/* </Grid>*/}
                {/* <Grid item xs={6}>*/}
                {/*  <DashboardContentCard iconName={'ArrowRight'} />*/}
                {/* </Grid>*/}
                {/* <Grid item xs={12}>*/}
                {/*  <DashboardContentCard iconName={'ArrowRight'} />*/}
                {/* </Grid>*/}
              </Grid>
              {/* <Grid item xs={4} container spacing={3} sx={styles.gridItem}>*/}
              {/*  <Grid item xs={12}>*/}
              {/*    <DashboardContentCard iconName={'ArrowRight'} />*/}
              {/*  </Grid>*/}
              {/*  <Grid item xs={12}>*/}
              {/*    <DashboardContentCard iconName={'ArrowRight'} />*/}
              {/*  </Grid>*/}
              {/*  <Grid item xs={12}>*/}
              {/*    <DashboardContentCard iconName={'ArrowRight'} />*/}
              {/*  </Grid>*/}
              {/*  <Grid item xs={12}>*/}
              {/*    <DashboardContentCard iconName={'ArrowRight'} />*/}
              {/*  </Grid>*/}
              {/* </Grid>*/}
            </Grid>
          </BoxStyled>
        </>
      )}
    </>
  );
};

export default Dashboard;
