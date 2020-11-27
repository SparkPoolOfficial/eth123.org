import React from 'react';
import {
  Box,
  Grid,
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

import { getSkeletonList } from '../../services';

const ItemSkeleton = () => (getSkeletonList() || []).map((key, index) => (
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

export default ItemSkeleton;
