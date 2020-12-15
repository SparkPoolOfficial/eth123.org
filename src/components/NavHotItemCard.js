import React, { PureComponent } from 'react';
import {
  Grid,
  Link,
} from '@material-ui/core';

import Box from './Box';
import {
  getSkeletonList,
  trackEvent,
  formatWebpImageSrc,
} from '../services';

class NavHotItemCard extends PureComponent {

  render() {

    const { navList, tagList, language } = this.props;

    if (!(tagList || []).length || !(navList || []).length) {
      let skeletonList = getSkeletonList();
      return (
        <div id={encodeURI((tagList[0] || {}).tag_en)} style={{ marginBottom: 16 }}>
          <Grid container spacing={2}>
            {
              (skeletonList).map((key, index) => (
                <Grid item xs={6} sm={4} md={3} key={`${key}-${index}`}>
                  <div
                    className="skeletonHotCard"
                    style={{
                      backgroundColor: '#fff',
                      borderRadius: 8,
                    }}
                  />
                </Grid>
              ))
            }
          </Grid>
        </div>
      )
    }

    // console.log('NavHotItemCard');
    return (
      <div id={encodeURI((tagList[0] || {}).tag_en)} style={{ marginBottom: 16 }}>
        <Grid container spacing={2}>
          {
            (navList || [])
              .filter(item => (item.tag_en || '').indexOf('Hot') > -1)
              .map((item, index) => (
                <Grid item xs={6} sm={4} md={3} key={`Hot-${index}`}>
                  <Link
                    color="textPrimary"
                    href={`${language === 'zh' ? item.url : (item.url_en || item.url)}?utm_resource=eth123.org`}
                    target="_blank"
                    underline='none'
                    onClick={() => {
                      trackEvent(item.tag_en, (item.name_en || item.name));
                    }}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      py={2}
                      borderRadius={8}
                      backgroundColor="#fff"
                      className="hotCard">
                      <img
                        src={formatWebpImageSrc(item.image)}
                        alt=""
                      />
                    </Box>
                  </Link>
                </Grid>
              ))
          }
        </Grid>
      </div>
    );
  }

}

export default NavHotItemCard;
