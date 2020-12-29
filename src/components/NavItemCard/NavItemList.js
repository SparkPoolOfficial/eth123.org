import React, { PureComponent } from 'react';

import NavItem from './NavItem';
import NavExpandItem from './NavExpandItem';
import ItemSkeleton from './ItemSkeleton';

class NavItemList extends PureComponent {

  render() {
    const { tag, navList, language } = this.props;
    if (!(navList || []).length) {
      return <ItemSkeleton />
    }
    const list = (navList || []).filter((item) => item.tag_en === tag);
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
