import React, { PureComponent } from 'react';
import {
  // Box,
  Typography,
  Button,
  // Link,
} from '@material-ui/core';
import classnames from 'classnames';

import Box from './Box';
import BoxStyle from './Box.module.css';

class Footer extends PureComponent {

  render() {

    const { footerVisible, t } = this.props;

    // console.log(19, footerVisible);

    if (!footerVisible) return null;

    return (
      <>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          className={classnames("footer", BoxStyle.footer)}>
          <Box className={BoxStyle.footer_title}>
            <Typography variant="h5" className="footer_title">
              {t('more')}
            </Typography>
          </Box>
          <Button
            variant="contained"
            className="submitBtn"
            color="primary"
            style={{ textTransform: 'none' }}
            onClick={() => {
              window.open('https://forms.gle/qAWrAKwC5WSJzsEw7');
            }}
            >
            {t('submit')}
          </Button>
        </Box>
        {/* <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          className={BoxStyle.footer_sponsored}>
          <div>Sponsored By&nbsp;</div>
          <div style={{ color: "#ff7828" }}>
            <Link href="https://www.sparkpool.com" underline="none">
              SparkPool
            </Link>
          </div>
        </Box> */}
      </>
    )

  }

}

export default Footer;
