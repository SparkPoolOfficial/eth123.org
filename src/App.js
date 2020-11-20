import React from 'react';
import {
  CssBaseline,
  Container,
  Box,
  Select,
  MenuItem,
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

class App extends React.Component {

  state = {
    sticky: false,
    footerVisible: false,
    activityKey: '',
    tagList: [],
    navList: [],
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

  renderNavCard = (tag) => {
    const { navList } = this.state;
    let node = [];
    navList.forEach((item, index) => {
      if (item.tags.indexOf(tag) > -1) {
        node.push(
          <Grid item xs={3} key={index}>
            <Link
              color="textPrimary"
              href={item.website}
              underline='none'>
              <Box
                className='cardItem'
                display="flex"
                flexDirection="row"
                p={1}
                borderRadius={8}>
                <Box mr={1}>
                  <Avatar>{item.name.slice(0, 1)}</Avatar>
                </Box>
                <Box>
                  <Box mb={1}>
                    <Typography variant="body1" style={{ fontWeight: 500, color: '#333'}}>
                      {item.name}
                    </Typography>
                  </Box>
                  <Typography variant="caption" style={{ color: '#999', wordBreak: 'break-all' }}>
                    {item.desc || (item.website || '').replace(/htt(p|ps):\/\//, '')}
                  </Typography>
                </Box>
              </Box>
            </Link>
          </Grid>
        )
      }
    });
    return node;
  }

  renderHotCard = () => {
    const { navList, tagList } = this.state;
    let node = [];
    navList.forEach((item, index) => {
      if (item.tags.indexOf('Home') > -1) {
        node.push(
          <Grid item xs={3} key={index}>
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
    const { tagList } = this.state;
    return (tagList || []).filter((item) => item.tag_en !== 'Home').map(({ tag, tag_en}) => (
      <Box
        bgcolor="white"
        borderRadius={16}
        mb={2}
        key={tag}
        id={tag}
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
          <Typography>{tag}</Typography>
        </Box>
        <Box py={3}>
          <Grid container spacing={1}>
            { this.renderNavCard(tag) }
          </Grid>
        </Box>
      </Box>
    ))
  }

  render() {

    const { tagList, sticky, footerVisible, activityKey } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Box mt={2} display="flex" flexDirection="column" alignItems="flex-end">
            <Button>简体中文</Button>
          </Box>
          <Box mb={4} display="flex" flexDirection="column" alignItems="center">
            <Box mb={1}>
              <img src={LogoImg} alt="eth123" />
            </Box>
            <Box>
              <Typography color="textSecondary">
                -- 以太坊生态项目导航 --
              </Typography>
            </Box>
          </Box>
          <Box display="flex" flexDirection="row">
            <Box
              mr={2}
              px={1}
              className={sticky ? "tagNav tagNav_fixed" : "tagNav"}
              id="tagNav">
              {
                (tagList || []).map(({ tag, tag_en }, index) => (
                  <Link
                    color="textPrimary"
                    href={`#${tag}`}
                    key={tag}
                    className={ activityKey === tag ? "tagLink tagLink_active" : 'tagLink'}
                    underline="none"
                    onClick={() => {
                      this.setState({
                        activityKey: tag,
                      });
                    }}
                  >
                    <Box py={1} px={2}>{tag}</Box>
                  </Link>
                ))
              }
            </Box>
            <Box flex={1}></Box>
            <Box className="tagContent">
              {this.renderHotCard()}
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
                  一起发现更多新产品
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
                提交
              </Button>
            </Box>
          ) : null
        }
      </ThemeProvider>
    );

  }

}

export default App;
