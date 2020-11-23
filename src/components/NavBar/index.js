import React, { PureComponent } from 'react';
import {
  Hidden,
  Box,
  Link
} from '@material-ui/core';
import classnames from 'classnames';

import styles from './styles.module.css';

class NavBar extends PureComponent {

  state = {
    sticky: false,
    activeKey: 'Home'
  }

  componentDidMount() {
    const { tagList } = this.props;
    if ((tagList || []).length) {
      this.initActiveKey();
      window.addEventListener("scroll", this.onScroll)
    }
  }

  initActiveKey = () => {
    const { tagList } = this.props;
    const { hash } = window.location;
    let activeKey = hash ? hash.split('#')[1] : encodeURI((tagList[0] || {}).tag_en);
    this.setState({
      activeKey,
    });
  }

  onScroll = () => {
    this.setState({
      sticky: document.documentElement.scrollTop > 157,
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

    const { tagList, language } = this.props;

    const { sticky, activeKey } = this.state;

    return (
      <Hidden mdDown>
        <Box
          px={1}
          display="flex"
          flexDirection="column"
          className={classnames(styles.NavBar, sticky ? styles.NavBa_fixed : {})}>
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
        <Box flex={1}></Box>
      </Hidden>
    )
  }

}

export default NavBar;
