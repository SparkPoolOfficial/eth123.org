import React from 'react';
import {
  CssBaseline,
  Container,
  Box,
  Typography,
  Hidden,
  Grid,
  Link,
  Avatar,
  Button,
} from '@material-ui/core';
import {
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';

import LogoImg from './assets/logo_title.svg';

import { get } from './services/fetch';

import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff7828',
      contrastText: '#fff',
    },
  }
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
    sticky: false,
    footerVisible: false,
    activityKey: '热门推荐',
    tagList: [],
    navList: [],

    language: 'zh',
  }

  componentDidMount() {
    this.getTagList();
    this.fetchData();

    const { hash } = window.location;
    if (hash) {
      this.setState({
        activityKey: decodeURIComponent(hash.split('#')[1]),
      });
    }

    window.addEventListener("scroll", () => {
      const { sticky } = this.state;
      if (document.documentElement.scrollTop > 157 && !sticky) {
        this.setState({
          sticky: true,
        });
      } else if (document.documentElement.scrollTop < 157 && sticky) {
        this.setState({
          sticky: false,
        });
      }
    });
  }

  fetchData = async () => {
    // const res = await get('/resource.json');
    const res = await get('https://expo-res.sparkpool.com/SparkPoolOfficial/eth123.org/main/resource.json');
    if (res && (res || []).length) {
      try {
        this.setState({
          navList: res,
          footerVisible: true,
        });
      } catch (e) {
      }
    }
  }

  getTagList = async (navList) => {
    // const res = await get('/tagList.json');
    const res = await get('https://expo-res.sparkpool.com/SparkPoolOfficial/eth123.org/main/tagList.json');
    if (res && (res || []).length) {
      this.setState({
        tagList: res,
      });
    }
  }

  translate = (key) => {
    const { language } = this.state;
    return translation[language][key];
  }

  renderDesc = (item) => {
    const { language } = this.state;
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

  renderHotCard = () => {
    const { navList, tagList } = this.state;
    let node = [];
    navList.forEach((item, index) => {
      if (item.tag_en.indexOf('Home') > -1) {
        node.push(
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Link
              color="textPrimary"
              href={item.website}
              underline='none'>
              <Box
                bgcolor="white"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                className="hotCard"
                py={2}
                px={2}
                borderRadius={8}
              >
                <img
                  src={item.logo}
                  alt=""
                />
              </Box>
            </Link>
          </Grid>
        )
      }
    });
    return (
      <Box mb={2} id={(tagList[0] || {}).tag}>
        <Grid container spacing={2}>
          {node}
        </Grid>
      </Box>
    );
  }

  renderNavContentCard = () => {
    const { tagList, language } = this.state;
    // return (tagList || []).filter((item) => item.tag_en !== 'Home').map(({ tag, tag_en}) => (
    return (tagList || []).map((item) => {
      let tagName = language === 'zh' ? item.tag : item.tag_en;
      return (
        <Box
          bgcolor="white"
          borderRadius={16}
          mb={2}
          key={tagName}
          id={tagName}
          px={3}
        >
          <Box
            py={2}
            border={1}
            borderTop={0}
            borderRight={0}
            borderLeft={0}
            borderColor="grey.100"
          >
            <Typography>{tagName}</Typography>
          </Box>
          <Box py={3}>
            <Grid container spacing={1}>
              { this.renderNavCard(tagName) }
            </Grid>
          </Box>
        </Box>
      )
    })
  }

  renderNavCard = (tag) => {
    const { navList, language } = this.state;
    let node = [];
    (navList || []).forEach((item, index) => {
      let tagName = language === 'zh' ? item.tag : item.tag_en;
      if (tagName.indexOf(tag) > -1) {
        node.push(
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
                p={1}
                borderRadius={8}>
                <Box mr={1}>
                  {
                    item.logo ? (
                      <Avatar style={{ height: 30, width: 30 }} src={item.logo} />
                    ) : (
                      <Avatar style={{ height: 30, width: 30 }}>
                        {(language === 'zh' ? item.name : (item.name_en || item.name)).slice(0, 1)}
                      </Avatar>
                    )
                  }
                </Box>
                <Box>
                  <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    style={{ height: 30 }}
                    mb={1}>
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
                      {this.renderDesc(item)}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Link>
          </Grid>
        )
      }
    });
    return node;
  }

  render() {

    const {
      tagList,
      sticky,
      footerVisible,
      activityKey,
      language,
    } = this.state;

    const t = this.translate;

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Box mt={2} display="flex" flexDirection="column" alignItems="flex-end">
            <Button
              onClick={() => {
                this.setState({
                  language: language === 'zh' ? 'en' : 'zh',
                })
              }}>
              {
                language === "zh" ? 'English' : '简体中文'
              }
            </Button>
          </Box>
          <Box mb={4} display="flex" flexDirection="column" alignItems="center">
            <Box mb={1}>
              <img src={LogoImg} alt="eth123" />
            </Box>
            <Box>
              <Typography color="textSecondary">
                -- {t('subTitle')} --
              </Typography>
            </Box>
          </Box>
          <Box display="flex" flexDirection="row">
            <Hidden mdDown>
              <Box
                px={1}
                className={sticky ? "tagNav tagNav_fixed" : "tagNav"}
                id="tagNav">
                {
                  (tagList || []).map(({ tag, tag_en }, index) => {
                    let tagName = language === 'zh' ? tag : tag_en;
                    return (
                      <Link
                        color="textPrimary"
                        href={`#${tagName}`}
                        key={tagName}
                        className={ activityKey === tagName ? "tagLink tagLink_active" : 'tagLink'}
                        underline="none"
                        onClick={() => {
                          this.setState({
                            activityKey: tagName,
                          });
                        }}
                        >
                          <Box py={1} px={2}>{tagName}</Box>
                        </Link>
                      )
                  })
                  }
                </Box>
                <Box flex={1}></Box>
            </Hidden>
            <Box className="tagContent">
              {/* {this.renderHotCard()} */}
              {this.renderNavContentCard()}
            </Box>
          </Box>
        </Container>
        {
          footerVisible ? (
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              className="footer"
              py={4}>
              <Box mb={3}>
                <Typography variant="h5" className="footer_title">
                  {t('more')}
                </Typography>
              </Box>
              <Button
                variant="contained"
                className="submitBtn"
                color="primary"
                onClick={() => {
                  window.open('https://github.com/SparkPoolOfficial/eth123.org/issues');
                }}
                >
                {t('submit')}
              </Button>
            </Box>
          ) : null
        }
      </ThemeProvider>
    );

  }

}

export default App;
