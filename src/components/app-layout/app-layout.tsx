import * as React from 'react';
import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import { useActions, useTypedSelector } from '../../redux/hooks';
import AppBar from '../app-bar/app-bar';
import Dashboard from '../../pages/dashboard/dashboard';
import { APP_BAR_HEIGHT } from '../../constants';
import { Drawer } from '../drawer/drawer';
import { DrawerHeaderStyled } from '../drawer/drawer-header-styled';

const AppLayout = () => {
  const styles = {
    main: {
      display: 'flex',
      height: '100vh'
    },
    content: {
      flexGrow: 1,
      p: 3,
      padding: 0,
      height: APP_BAR_HEIGHT,
      position: 'relative'
    },
    loader: {
      margin: 'auto'
    }
  };

  const [open, setOpen] = useState(true);

  const { pages, loadingPages } = useTypedSelector((state) => state.pages);
  const { stores, loadingStores } = useTypedSelector((state) => state.stores);
  const { news, loadingNews } = useTypedSelector((state) => state.news);
  const { fetchPages, fetchStores, fetchNews } = useActions();

  useEffect(() => {
    fetchPages();
    fetchStores();
    fetchNews();
  }, []);

  const handleDrawerOpenClose = (): void => {
    setOpen(!open);
  };

  return (
    <Box sx={styles.main}>
      {(loadingPages || loadingStores || loadingNews) && (
        <CircularProgress size={100} thickness={2} sx={styles.loader} />
      )}
      {stores.length && pages.length && news.length && (
        <>
          <AppBar open={open} />
          <Drawer open={open} onClose={handleDrawerOpenClose} pages={pages} />

          <Box sx={styles.content}>
            <DrawerHeaderStyled />
            <Dashboard />
          </Box>
        </>
      )}
    </Box>
  );
};

export default AppLayout;
