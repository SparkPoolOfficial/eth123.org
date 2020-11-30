import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { KeyboardArrowDown } from '@material-ui/icons';

import NavItem from './NavItem';
import Box from '../Box';

const NavExpandItem = ({
  list,
  language,
}) => {

  const [expand, setExpand] = useState(false);

  if (!expand) {
    return (
      <Grid item xs={6} sm={4} md={3} key="toggleBtnGrid">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          className="toggleBtnWrap">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            className="toggleBtn"
            borderRadius={4}
            onClick={() => {
              setExpand(true);
            }}>
            <KeyboardArrowDown />
          </Box>
        </Box>
      </Grid>
    )
  }

  return (list || []).slice(7).map((item, index) => (
    <NavItem
      key={index}
      item={item}
      language={language}
    />
  ));
}

export default NavExpandItem;
