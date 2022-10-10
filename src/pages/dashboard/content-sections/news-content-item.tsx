import React from 'react';

import { useTheme } from '@mui/material/styles';

import { News } from '../../../interfaces';
import { BoxStyled, TypographyStyled } from '../../../components/shared-styled';
import NoImage from '../../../assets/no_image.png';
import { NEWS_CARD_ESTIMATED_TEXT } from '../../../constants';

type Props = {
  newsItem: News;
};

export const NewsContentItem: React.FC<Props> = ({ newsItem }) => {
  const { palette, typography } = useTheme();

  const styles = {
    imageBox: {
      objectFit: 'cover'
    },
    newsCategory: {
      textTransform: 'uppercase'
    },
    newsTitle: {
      height: '40px',
      overflow: 'hidden'
    }
  };
  return (
    <BoxStyled justifyContent={'flex-start'}>
      <BoxStyled
        component={'img'}
        src={newsItem.image_url ? newsItem.image_url : NoImage}
        height={100}
        width={100}
        sx={styles.imageBox}
      />
      <BoxStyled
        flexDirection={'column'}
        alignItems={'flex-start'}
        justifyContent={'flex-start'}
        padding={'10px 18px 8px 16px'}
        gap={8}>
        <TypographyStyled
          sx={styles.newsCategory}
          fontSize={11}
          fontWeight={typography.fontWeightMedium}
          lineHeight={'13px'}
          color={palette.secondary.main}>
          {newsItem.category[0]}
        </TypographyStyled>
        <TypographyStyled
          sx={styles.newsTitle}
          fontSize={15}
          fontWeight={typography.fontWeightMedium}
          lineHeight={'20px'}
          color={palette.primary.main}>
          {newsItem.title}
        </TypographyStyled>
        <TypographyStyled
          fontSize={12}
          fontWeight={typography.fontWeightLight}
          lineHeight={'12px'}
          textdecorationline={'underline'}
          color={palette.primary.main}>
          {NEWS_CARD_ESTIMATED_TEXT}
        </TypographyStyled>
      </BoxStyled>
    </BoxStyled>
  );
};
