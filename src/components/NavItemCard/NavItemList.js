import React, { PureComponent } from 'react';

import NavItem from './NavItem';
import NavExpandItem from './NavExpandItem';

class NavItemList extends PureComponent {

  render() {
    const { tag, navList, language } = this.props;
    const list = (navList || []).filter((item) => item.tag_en.indexOf(tag) > -1);
    let node = [];
    let len = list.length <= 8 ? 8 : 7;
    node = list.slice(0, len).map((item, index) => (
      <NavItem
        key={index}
        item={item}
        language={language}
      />
    ));
    if (list.length > 8) {
      console.log(21, list);
      node.push(
        <NavExpandItem
          key="NavExpandItem"
          list={list}
          language={language}
        />
      );
    }
    return node;
  }

}

export default NavItemList;
