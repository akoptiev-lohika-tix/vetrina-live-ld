import React from 'react';

import { Grid, useTheme } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';

import DashboardHeader from './dashboard-header/dashboard-header';
import DashboardContentCard from './dashboard-content-card/dashboard-content-card';
import { BoxStyled } from '../../components/shared-styled';
import { useTypedSelector } from '../../redux/hooks';
import {
  CONFIGURE_CARD_LINK_TEXT,
  CONFIGURE_CARD_TITLE,
  INVITE_FRIEND_CARD_LINK_TEXT,
  INVITE_FRIEND_CARD_TITLE,
  ORDERS_CARD_LINK_TEXT,
  ORDERS_CARD_TITLE,
  TRUSTPILOT_CARD_LINK_TEXT,
  VISITORS_CARD_LINK_TEXT,
  VISITORS_CARD_TITLE
} from '../../constants';

import {
  ConfigureContentSection,
  InviteFriendContentSection,
  OrdersContentSection,
  TrustpilotContentSection,
  VisitorsContentSection
} from './content-sections';

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
                    background={palette.common.white}
                    headerText={VISITORS_CARD_TITLE}
                    headerIcon={'ViewShop'}
                    iconName={'ArrowRight'}
                    linkColor={palette.secondary.main}
                    linkText={VISITORS_CARD_LINK_TEXT}
                    linkGap={20}>
                    <VisitorsContentSection />
                  </DashboardContentCard>
                </Grid>
                <Grid item xs={6}>
                  <DashboardContentCard
                    background={palette.common.white}
                    headerText={ORDERS_CARD_TITLE}
                    headerIcon={'Orders'}
                    linkColor={palette.secondary.main}
                    linkText={ORDERS_CARD_LINK_TEXT}>
                    <OrdersContentSection />
                  </DashboardContentCard>
                </Grid>
                {/* <Grid item xs={6}>*/}
                {/*  <DashboardContentCard*/}
                {/*    headerText={CONFIGURE_CARD_TITLE}*/}
                {/*    headerIcon={'ConfigureShop'}*/}
                {/*    hasDropDown={false}*/}
                {/*    linkColor={palette.secondary.main}*/}
                {/*    linkText={CONFIGURE_CARD_LINK_TEXT}></DashboardContentCard>*/}
                {/* </Grid>*/}
                {/* <Grid item xs={6}>*/}
                {/*  <DashboardContentCard iconName={'ArrowRight'} />*/}
                {/* </Grid>*/}
                {/* <Grid item xs={12}>*/}
                {/*  <DashboardContentCard iconName={'ArrowRight'} />*/}
                {/* </Grid>*/}
              </Grid>
              <Grid item xs={4} container spacing={3} sx={styles.gridItem}>
                <Grid item xs={12}>
                  <DashboardContentCard
                    background={palette.common.white}
                    headerText={CONFIGURE_CARD_TITLE}
                    headerIcon={'ConfigureShop'}
                    hasDropDown={false}
                    iconName={'ArrowRight'}
                    linkColor={palette.secondary.main}
                    linkText={CONFIGURE_CARD_LINK_TEXT}>
                    <ConfigureContentSection />
                  </DashboardContentCard>
                </Grid>
                <Grid item xs={12}>
                  <DashboardContentCard
                    background={palette.secondary.dark}
                    iconName={'ArrowRight'}
                    linkText={TRUSTPILOT_CARD_LINK_TEXT}
                    linkColor={palette.success.dark}
                    headerIcon={'TrustPilot'}
                    hasDropDown={false}
                    hasHeaderText={false}>
                    <TrustpilotContentSection />
                  </DashboardContentCard>
                </Grid>
                <Grid item xs={12}>
                  <DashboardContentCard
                    headerText={INVITE_FRIEND_CARD_TITLE}
                    background={palette.common.white}
                    iconName={'ArrowRight'}
                    linkText={INVITE_FRIEND_CARD_LINK_TEXT}
                    linkColor={palette.secondary.main}
                    headerIcon={'InviteFriends'}
                    hasDropDown={false}>
                    <InviteFriendContentSection />
                  </DashboardContentCard>
                </Grid>
              </Grid>

              {/* <Grid item xs={12}>*/}
              {/*  <DashboardContentCard iconName={'ArrowRight'} />*/}
              {/* </Grid>*/}
            </Grid>
          </BoxStyled>
        </>
      )}
    </>
  );
};

export default Dashboard;
