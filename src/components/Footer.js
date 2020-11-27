import React, { PureComponent } from 'react';
import {
  Box,
  Typography,
  Button,
  Link,
} from '@material-ui/core';

class Footer extends PureComponent {

  render() {

    const { footerVisible, t } = this.props;

    // console.log(19, footerVisible);

    if (!footerVisible) return null;

    return (
      <Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          className="footer"
          py={{ xs: 3, sm: 3, md: 4 }}>
          <Box mb={{ xs: 1.25, sm: 2, md: 3 }}>
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
              window.open('https://github.com/SparkPoolOfficial/eth123.org/issues');
            }}
            >
            {t('submit')}
          </Button>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          py={{ xs: 1, sm: 2 }}>
          <Box>Sponsored By&nbsp;</Box>
          <Box color="#ff7828">
            <Link href="https://www.sparkpool.com" underline="none">
              SparkPool
            </Link>
          </Box>
        </Box>
      </Box>
    )

  }

}

export default Footer;
