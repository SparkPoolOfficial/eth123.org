import React, { PureComponent } from 'react';
import {
  Hidden,
  Box,
  Link,
  Drawer,
  Divider,
} from '@material-ui/core';
import classnames from 'classnames';

import LogoImg from '../../assets/logo_title_new.svg';
import styles from './styles.module.css';

let navHeight;

class NavBar extends PureComponent {

  state = {
    sticky: false,
    activeKey: 'Home',
    top: 0,
  }

  componentDidMount() {
    const { tagList } = this.props;
    if ((tagList || []).length) {
      // nav bar height
      navHeight = (tagList || []).length * 36;
      this.initActiveKey();
      window.addEventListener("scroll", this.onScroll)
    }
  }

  initActiveKey = () => {
    const { tagList } = this.props;
    const { hash } = window.location;
    let activeKey = hash ? hash.split('#')[1] : encodeURI((tagList[0] || {}).tag_en);
    this.setState({ activeKey });
  }

  onScroll = () => {
    let top  = 0;
    // scroll top
    const scrollTop = document.documentElement.scrollTop;
    if (navHeight > window.innerHeight - 232) {
      if (scrollTop > document.body.clientHeight / 2) {
        top = - (scrollTop / (document.body.clientHeight / 2) - 1) * (navHeight - window.innerHeight + 234 + 166);
      } else {
        top = 0;
      }
    }
    this.setState({
      top: parseInt(top, 10),
      sticky: scrollTop > 157,
      activeKey: this.getCurrentAnchor()
    });
  }

  getCurrentAnchor = () => {
    const { tagList } = this.props;
    let linkList = [];
    tagList.forEach((item) => {
      let link = encodeURI(item.tag_en);
      let el = document.getElementById(link);
      if (el) {
        const top = this.getOffsetTop(el);
        linkList.push({
          link,
          top,
        });
      }
    });
    if (linkList.length) {
      for (let i = 1; i < linkList.length; i++) {
        if (linkList[i].top > 0) {
          return linkList[i - 1].link;
        }
      }
    }
    return '';
  }

  getOffsetTop = (element) => {
    const rect = element.getBoundingClientRect();

    if (rect.width || rect.height) {
      return rect.top - element.ownerDocument.documentElement.clientTop;
    }
  }

  render() {

    const { tagList, language, drawerVisible, onClose } = this.props;

    const { sticky, activeKey, top } = this.state;

    return (
      <Box>
        <Hidden lgUp>
          <Drawer
            open={drawerVisible}
            onClose={onClose}>
            <Box
              display="flex"
              flexDirection="column"
              style={{
                height: 'inherit',
                overflow: 'hideen'
              }}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={2}>
                <img src={LogoImg} alt="eth123" height={17} />
              </Box>
              <Divider />
              <Box
                flex="1"
                style={{ overflow: 'auto' }}
                onClick={onClose}>
                {
                  (tagList || []).map(({ tag, tag_en }, index) => {
                    let tagName = language === 'zh' ? tag : tag_en;
                    return (
                      <Link
                        href={`#${tag_en}`}
                        key={tag_en}
                        className={classnames(styles.drawer_link, activeKey === encodeURI(tag_en) ? styles.drawer_link_active : {})}
                        color="textPrimary"
                        underline="none">
                        <Box px={4} py={1}>
                          {tagName}
                        </Box>
                      </Link>
                    )
                  })
                }
              </Box>
            </Box>
          </Drawer>
        </Hidden>
        <Hidden mdDown>
          <Box
            px={1}
            display="flex"
            flexDirection="column"
            id="NavBar"
            className={classnames(styles.NavBar, sticky ? styles.NavBa_fixed : {})}
            style={{ top }}>
            {
              (tagList || []).map(({ tag, tag_en }, index) => {
                let tagName = language === 'zh' ? tag : tag_en;
                return (
                  <Link
                    href={`#${tag_en}`}
                    key={tag_en}
                    className={classnames(styles.link, activeKey === encodeURI(tag_en) ? styles.link_active : {})}
                    color="textPrimary"
                    underline="none"
                    >
                    <Box px={2} py={1}>
                      {tagName}
                    </Box>
                  </Link>
                )
              })
            }
          </Box>
        </Hidden>
      </Box>
    )
  }

}

export default NavBar;
