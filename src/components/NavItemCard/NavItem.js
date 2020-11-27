import React from 'react';
import {
  Grid,
  Box,
  Link,
  Avatar,
  Typography,
} from '@material-ui/core';
import LazyLoad from 'react-lazyload';

import {
  trackEvent,
  formatWebpImageSrc,
} from '../../services';

const NavItem = ({
  item: {
    tag_en,
    logo,
    name,
    name_en,
    desc,
    desc_en,
    website,
    logoWidthAuto,
    logoHeightAuto,
  },
  language,
}) => {

  const size = 30;

  // render item desc
  const renderDesc = () => {
    if (language === 'zh' && desc) {
      return desc;
    } else if (language === 'en' && desc_en) {
      return desc_en;
    }
    let url = (website || '').replace(/htt(p|ps):\/\//, '');
    if (url.slice('-1') === '/') {
      url = url.slice(0, url.length - 1);
    }
    return url;
  }

  return (
    <Grid item xs={6} sm={4} md={3}>
      <Link
        color="textPrimary"
        href={`${website}?utm_resource=eth123.org`}
        target="_blank"
        underline='none'
        onClick={() => {
          trackEvent(tag_en, (name_en || name));
        }}>
        <Box
          className='cardItem'
          display="flex"
          flexDirection="row"
          p={{ xs: 0, sm: 1 }}
          borderRadius={8}>
          <Box mr={{ xs: 1, sm: 1 }}>
            <LazyLoad
              height={size}
              style={{ width: size }}
              once>
              <Avatar
                alt={language === 'zh' ? name : (name_en || name)}
                src={formatWebpImageSrc(logo)}
                style={{
                  height: logoHeightAuto ? 'auto' : size,
                  width: logoWidthAuto ? 'auto' : size
                }}
                imgProps={{
                  height: logoHeightAuto ? 'auto' : size,
                  width: logoWidthAuto ? 'auto' : size
                }}
              >
                {(language === 'zh' ? name : (name_en || name)).slice(0, 1)}
              </Avatar>
            </LazyLoad>
          </Box>
          <Box>
            <Typography
              variant="body1"
              className="cardItem_title"
              style={{ fontWeight: 500 }}>
              {language === 'zh' ? name : (name_en || name)}
            </Typography>
            <Typography
              variant="caption"
              style={{ color: '#999', wordBreak: 'break-all' }}>
              {renderDesc()}
            </Typography>
          </Box>
        </Box>
      </Link>
    </Grid>
  )
}

export default NavItem;
