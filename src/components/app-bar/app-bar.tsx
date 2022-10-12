import React, { memo } from 'react';

import { Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Toolbar from '@mui/material/Toolbar';

import { AppBarStyled } from './app-bar-styled';
import { BoxStyled, TypographyStyled } from '../shared-styled';
import { NOTIFICATION_TITLE } from '../../constants';
import { useTypedSelector } from '../../redux/hooks';
import { SvgCreator } from '../svg-creator/svg-creator';

const styles = {
  badge: {
    '& .MuiBadge-badge': {
      fontSize: '15px',
      lineHeight: '20px'
    }
  }
};

type Props = {
  open: boolean;
};

const AppBar: React.FC<Props> = ({ open }) => {
  const { activePageName } = useTypedSelector((state) => state.pages);
  const { activeStore } = useTypedSelector((state) => state.stores);
  const { palette, typography } = useTheme();

  return (
    <AppBarStyled position="fixed" open={open} role={'app-bar'}>
      <Container maxWidth="xl" disableGutters>
        <Toolbar>
          <TypographyStyled
            color={palette.primary.main}
            fontWeight={typography.fontWeightMedium}
            fontSize={17}
            lineHeight={'22px'}>
            {activePageName}
          </TypographyStyled>
          <BoxStyled gap={4}>
            <SvgCreator iconName={'Lightning'} color={palette.primary.main} />
            <Badge
              sx={styles.badge}
              badgeContent={activeStore?.data?.notifications.length}
              color="error">
              <TypographyStyled
                color={palette.primary.main}
                fontFamily={'Source Sans Pro, sans-serif'}
                fontWeight={typography.fontWeightRegular}
                fontSize={15}
                lineHeight={'20px'}
                role={'notification'}>
                {NOTIFICATION_TITLE}
              </TypographyStyled>
            </Badge>
          </BoxStyled>
        </Toolbar>
      </Container>
    </AppBarStyled>
  );
};

export default memo(AppBar);
