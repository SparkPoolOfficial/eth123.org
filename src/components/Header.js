import React, { useState } from 'react';
import {
  Container,
  Button,
  Hidden,
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { Language } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';

import NavBar from './NavBar';

import ETHLOGO from './Icons/123ETH';
import BTCLOGO from './Icons/123BTC';
import selectDomainIcon from '../assets/domain_select.svg';

import Box from './Box';

const BTC123URL = 'https://123btc.org/';

const Header = ({
  language,
  onChangeLanguage,
  tagList,
}) => {

  const [visible, setVisible] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const translations = {
    zh: {
      ethTitle: '以太坊生态资源导航',
      btcTitle: '比特币生态资源导航',
    },
    en: {
      ethTitle: 'A Portal to Ethereum Ecosystem',
      btcTitle: 'A Portal to Bitcoin Ecosystem'
    }
  }

  const t = (key) => {
    return translations[language][key];
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // render language change btn
  const renderLanguageBtn = () => {
    return (
      <Button
        disableElevation={true}
        variant="outlined"
        onClick={() => {
          const lng = language === 'zh' ? 'en' : 'zh';
          window.localStorage.setItem('i18nextLng', lng);
          document.cookie = `i18next=${lng};path=/;domain=.123eth.org`;
          onChangeLanguage(lng);
        }}
        size="small"
        startIcon={<Language />}
        className="languageBtn"
        style={{ textTransform: 'none' }}>
        <Box fontWeight="400" className="languageBtn_text">
          {language === "zh" ? 'English' : '中文'}
        </Box>
      </Button>
    )
  }

  // web header
  const webHeader = () => {
    return (
      <Box
        mb={3.75}
        backgroundColor="#fff"
        boxShadow="0 2px 8px #f0f1f2">
        <Container>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            py={2}>
            <Box
              display="flex"
              flexDirection="row">
              <a
                href={BTC123URL}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'none' }}>
                <Box
                  mr={4.5}
                  pr={4.5}
                  borderRight="1px solid rgba(0, 0, 0, .1)">
                  <BTCLOGO />
                  <Box
                    mt={.5}
                    fontSize={14}
                    color="#999">
                    {t('btcTitle')}
                  </Box>
                </Box>
              </a>
              <a
                href="/"
                style={{ textDecoration: 'none' }}>
                <Box position="relative">
                  <ETHLOGO />
                  <Box
                    mt={.5}
                    fontSize={14}
                    color="#999">
                    {t('ethTitle')}
                  </Box>
                  <Box
                    position="absolute"
                    bottom={-16}
                    left={0}
                    height={4}
                    width="100%"
                    borderRadius={2}
                    backgroundColor="#FF7828"
                  />
                </Box>
              </a>
            </Box>
            <Box>
              {renderLanguageBtn()}
            </Box>
          </Box>
        </Container>
      </Box>
    )
  }

  // wap header
  const wapHeader = () => {
    return (
      <Box
        mb={2}
        py={1.25}
        backgroundColor="#fff">
        <Container>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            height={30}>
            <Box
              display="flex"
              cursor="pointer"
              onClick={() => {
                setVisible(true);
              }}>
              <MenuIcon />
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center">
              <ETHLOGO />
              <IconButton
                aria-label="more"
                aria-controls="domain-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <img
                  src={selectDomainIcon}
                  alt=""
                  height={24}
                />
              </IconButton>
            </Box>
            <Box width={32}>
              <Box
                position="absolute"
                top={10}
                right={16}>
                {renderLanguageBtn()}
              </Box>
            </Box>
          </Box>
        </Container>
        <Menu
          id="domain-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => {
            window.open(BTC123URL);
            handleClose();
          }}>
            123BTC
          </MenuItem>
        </Menu>
      </Box>
    )
  }

  return (
    <Box>
      <Hidden smDown>
        {webHeader()}
      </Hidden>
      <Hidden mdUp>
        {wapHeader()}
        <NavBar
          tagList={tagList}
          language={language}
          key={`NavBar-${(tagList || []).length}`}
          drawerVisible={visible}
          onClose={() => {
            setVisible(false);
          }}
        />
      </Hidden>
    </Box>
  )
}

export default Header;
