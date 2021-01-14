import React from 'react';
import {
  CssBaseline,
  Container,
  // Box,
  Typography,
  Button,
  Hidden,
} from '@material-ui/core';
import {
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import { Language, Menu } from '@material-ui/icons';

import NavBar from './components/NavBar';
import NavHotItemCard from './components/NavHotItemCard';
import NavItemCard from './components/NavItemCard';
import Logo from './components/Logo';
import Header from './components/Header';
import Footer from './components/Footer';
import Box from './components/Box';

import { jsonHost } from './services/config';
import { get } from './services/fetch';
import { getDefaultLanguage } from './services';

import './App.css';
import BoxStyles from './components/Box.module.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff7828',
      contrastText: '#fff',
    },
  },
});

const translations = {
  zh: {
    subTitle: '以太坊生态资源导航',
    more: '一起发现更多新产品',
    submit: '提　交',
  },
  en: {
    subTitle: 'A Portal to Ethereum Ecosystem',
    more: 'Discover more new products',
    submit: 'Submit',
  }
}

class App extends React.Component {

  state = {
    tagList: [],
    navList: [],

    language: getDefaultLanguage(),
    drawerVisible: false,
    footerVisible: false,
  }

  componentDidMount() {
    // this.initPageLanguage();
    this.fetchTagList();
    this.fetchNavList();
  }

  fetchTagList = async (navList) => {
    // const res = await get('/tagList.json');
    const res = await get(`${jsonHost}/main/tagList.json`);
    if (res && (res || []).length) {
      this.setState({
        tagList: res,
      });
    }
  }

  fetchNavList = async () => {
    // const res = await get('/resource.json');
    // let startTime = new Date().getTime();
    const res = await get(`${jsonHost}/main/resource.json`);
    if (res && (res || []).length) {
      // console.log('fetch resource times:', new Date().getTime() - startTime);
      this.setState({
        navList: res,
        footerVisible: true,
      });
    }
  }

  translate = (key) => {
    const { language } = this.state;
    return translations[language][key];
  }

  render() {

    const {
      navList,
      tagList,
      footerVisible,
      language,

      drawerVisible,
    } = this.state;

    const t = this.translate;

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header
          tagList={tagList}
          language={language}
          onChangeLanguage={(language) => {
            this.setState({ language });
          }}
        />
        <Container>
          {/* <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            className={BoxStyles.header}>
            <Hidden lgUp>
              <Box
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  this.setState({
                    drawerVisible: true,
                  });
                }}>
                <Menu />
              </Box>
            </Hidden>
          </Box> */}
          <Box display="flex" flexDirection="row">
            <NavBar
              tagList={tagList}
              language={language}
              key={`NavBar-${(tagList || []).length}`}
              drawerVisible={drawerVisible}
              onClose={() => {
                this.setState({ drawerVisible: false });
              }}
            />
            <Box flex="1" />
            <Box className="tagContent" key={(navList || []).length}>
              <NavHotItemCard
                navList={navList}
                tagList={tagList}
                language={language}
              />
              <NavItemCard
                navList={navList}
                tagList={tagList}
                language={language}
              />
            </Box>
            <Hidden lgUp>
              <Box flex="1" />
            </Hidden>
          </Box>
        </Container>
        <Footer
          footerVisible={footerVisible}
          t={t}
        />
      </ThemeProvider>
    );

  }

}

export default App;
