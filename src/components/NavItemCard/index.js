import React, { PureComponent } from 'react';
import {
  Box,
  Grid,
  Typography,
} from '@material-ui/core';

import CardSkeleton from './CardSkeleton';
import NavItemList from './NavItemList';

class NavItemCard extends PureComponent {

  render() {

    const { tagList, navList, language } = this.props;

    if (!(tagList || []).length) {
      return <CardSkeleton />
    }

    return (tagList || []).slice(1).map((item) => (
      <Box
        bgcolor="white"
        borderRadius={16}
        mb={2}
        key={item.tag_en}
        id={encodeURI(item.tag_en)}
        px={{ xs: 2, sm: 2, md: 3 }}
      >
        <Box
          py={2}
          border={1}
          borderTop={0}
          borderRight={0}
          borderLeft={0}
          borderColor="grey.100"
        >
          <Typography>
            {language === 'zh' ? item.tag : item.tag_en}
          </Typography>
        </Box>
        <Box py={{ xs: 2, sm: 2, md: 3 }}>
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
