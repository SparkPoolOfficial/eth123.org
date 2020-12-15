import React, { PureComponent } from 'react';
import {
  Grid,
  Typography,
} from '@material-ui/core';

import CardSkeleton from './CardSkeleton';
import NavItemList from './NavItemList';

import Box from '../Box';
import BoxStyles from '../Box.module.css';

class NavItemCard extends PureComponent {

  render() {

    const { tagList, navList, language } = this.props;

    if (!(tagList || []).length) {
      return <CardSkeleton />
    }

    return (tagList || []).slice(1).map((item) => (
      <Box
        backgroundColor="white"
        borderRadius={16}
        mb={2}
        key={item.tag_en}
        id={encodeURI(item.tag_en)}
        className={BoxStyles.navItemCard}
      >
        <Box
          py={2}
          borderBottom="1px solid #f5f5f5"
        >
          <Typography>
            {language === 'zh' ? item.tag : item.tag_en}
          </Typography>
        </Box>
        <Box className={BoxStyles.navItemCard_card}>
          <Grid container spacing={2}>
            <NavItemList
              tag={item.tag_en}
              navList={navList}
              language={language}
            />
          </Grid>
        </Box>
      </Box>
    ));
  }

}

export default NavItemCard;
