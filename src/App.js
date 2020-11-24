import React from 'react';
import {
  CssBaseline,
  Container,
  Box,
  Typography,
  Grid,
  Link,
  Avatar,
  Button,
} from '@material-ui/core';
import {
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';
import { Language } from '@material-ui/icons';

import NavBar from './components/NavBar';

import LogoImg from './assets/logo_title_new.svg';

import { get } from './services/fetch';

import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff7828',
      contrastText: '#fff',
    },
  },
});

const translation = {
  zh: {
    subTitle: '以太坊生态项目导航',
    more: '一起发现更多新产品',
    submit: '提交',
  },
  en: {
    subTitle: 'A Portal to Ethereum Ecosystem',
    more: 'Discover more new products',
    submit: 'Submit',
  }
}

class App extends React.Component {

  state = {
    footerVisible: false,
    tagList: [],
    navList: [],

    language: 'zh',
  }

  componentDidMount() {
    this.fetchTagList();
    this.fetchNavList();
  }

  fetchTagList = async (navList) => {
    // const res = await get('/tagList.json');
    const res = await get('https://expo-res.sparkpool.com/SparkPoolOfficial/eth123.org/main/tagList.json');
    if (res && (res || []).length) {
      this.setState({
        tagList: res,
      });
    }
  }

  fetchNavList = async () => {
    // const res = await get('/resource.json');
    const res = await get('https://expo-res.sparkpool.com/SparkPoolOfficial/eth123.org/main/resource.json');
    if (res && (res || []).length) {
      this.setState({
        navList: res,
        footerVisible: true,
      });
    }
  }

  translate = (key) => {
    const { language } = this.state;
    return translation[language][key];
  }

  getSkeletonList = (length = 8) => {
    let list = [];
    for (let i = 0; i < length; i++) {
      list.push(i);
    }
    return list;
  }

  renderHotCard = () => {
    const { navList, tagList } = this.state;
    if (!(tagList || []).length) return null;
    if (!(navList || []).length) {
      let skeletonList = this.getSkeletonList();
      return (
        <Box mb={2} id={encodeURI((tagList[0] || {}).tag_en)}>
          <Grid container spacing={2}>
            {
              (skeletonList).map((key, index) => (
                <Grid item xs={6} sm={4} md={3} key={`${key}-${index}`}>
                  <Box
                    bgcolor="white"
                    borderRadius={8}
                    className="skeletonHotCard"
                  />
                </Grid>
              ))
            }
          </Grid>
        </Box>
      )
    }
    return (
      <Box mb={2} id={encodeURI((tagList[0] || {}).tag_en)}>
        <Grid container spacing={2}>
          {
            (navList || [])
              .filter(item => (item.tag_en || '').indexOf('Hot') > -1)
              .map((item, index) => (
                <Grid item xs={6} sm={4} md={3} key={`Hot-${index}`}>
                  <Link
                    color="textPrimary"
                    href={`${item.website}?utm_resource=eth123.org`}
                    target="_blank"
                    underline='none'>
                    <Box
                      bgcolor="white"
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      justifyContent="center"
                      className="hotCard"
                      px={2}
                      borderRadius={8}
                    >
                      <img
                        src={item.image}
                        alt=""
                      />
                    </Box>
                  </Link>
                </Grid>
              ))
          }
        </Grid>
      </Box>
    );
  }

  /**
   * render wrap of category for navList
   * @return {ReactNode}
   */
  renderNavContentCard = () => {
    const { tagList, language } = this.state;
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
            {this.renderNavCard(item.tag_en)}
          </Grid>
        </Box>
      </Box>
    ));
  }

  /**
   * render nav category item
   * @param  {String} tag navList.item_tag_en
   * @return {ReactNode}
   */
  renderNavCard = (tag_en) => {
    const { navList, language } = this.state;
    if (!(navList || []).length) {
      let skeletonList = this.getSkeletonList();
      return (
        (skeletonList).map((key, index) => (
          <Grid item xs={6} sm={4} md={3} key={`${key}-${index}`}>
            <Box display="flex" flexDirection="row" p={{ xs: 0, sm: 1 }}>
              <Box mr={1}>
                <Skeleton variant="circle" width={30} height={30} />
              </Box>
              <Box flex="1">
                <Skeleton variant="text" />
                <Skeleton variant="text" />
              </Box>
            </Box>
          </Grid>
        ))
      )
    }
    return (navList || [])
      .filter((item) => item.tag_en.indexOf(tag_en) > -1)
      .map((item, index) => (
        <Grid item xs={6} sm={4} md={3} key={index}>
          <Link
            color="textPrimary"
            href={`${item.website}?utm_resource=eth123.org`}
            target="_blank"
            underline='none'>
            <Box
              className='cardItem'
              display="flex"
              flexDirection="row"
              p={{ xs: 0, sm: 1 }}
              borderRadius={8}>
              <Box mr={{ xs: 1, sm: 1 }}>
                {this.renderItemLogo(item, language)}
              </Box>
              <Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center">
                  <Typography
                    variant="body1"
                    className="cardItem_title"
                    style={{ fontWeight: 500 }}>
                    {language === 'zh' ? item.name : (item.name_en || item.name)}
                  </Typography>
                </Box>
                <Box style={{ lineHeight: '20px' }}>
                  <Typography
                    variant="caption"
                    style={{ color: '#999', wordBreak: 'break-all' }}>
                    {this.renderDesc(item, language)}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Link>
        </Grid>
      ));
  }

  // render nav item logo
  renderItemLogo = (item, language) => {
    const { logo, name, name_en } = item;
    const size = 30;
    if (logo) {
      return (
        <Avatar
          style={{
            height: item.logoHeightAuto ? 'auto' : size,
            width: item.logoWidthAuto ? 'auto' : size
          }}
          src={item.logo}
        />
      )
    }
    return (
      <Avatar style={{ height: size, width: size }}>
        {(language === 'zh' ? name : (name_en || name)).slice(0, 1)}
      </Avatar>
    )
  }

  // render item desc
  renderDesc = (item, language) => {
    const { desc, desc_en, website } = item;
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

  render() {

    const {
      navList,
      tagList,
      footerVisible,
      language,
    } = this.state;

    const t = this.translate;

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
            mt={{ xs: 1, sm: 2 }}>
            <Button
              disableElevation={true}
              variant="outlined"
              onClick={() => {
                this.setState({
                  language: language === 'zh' ? 'en' : 'zh',
                })
              }}
              size="small"
              startIcon={<Language />}
              className="languageBtn"
              style={{ textTransform: 'none' }}>
              <Box fontWeight="400" className="languageBtn_text">
                {language === "zh" ? 'English' : '简体中文'}
              </Box>
            </Button>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mb={{ xs: 2, sm: 3, md: 4 }}>
            <Box mb={{ xs: .5, sm: 1 }}>
              <img src={LogoImg} alt="eth123" height={34}/>
            </Box>
            <Box>
              <Typography color="textSecondary">
                -- {t('subTitle')} --
              </Typography>
            </Box>
          </Box>
          <Box display="flex" flexDirection="row">
            <NavBar
              tagList={tagList}
              language={language}
              key={`NavBar-${(tagList || []).length}`}
            />
            <Box className="tagContent" key={(navList || []).length}>
              {this.renderHotCard()}
              {this.renderNavContentCard()}
            </Box>
          </Box>
        </Container>
        {
          footerVisible ? (
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
          ) : null
        }
      </ThemeProvider>
    );

  }

}

export default App;
