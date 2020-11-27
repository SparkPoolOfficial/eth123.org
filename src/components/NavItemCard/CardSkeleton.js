import React from 'react';
import {
  Box,
  Grid,
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

import ItemSkeleton from './ItemSkeleton';
import { getSkeletonList } from '../../services';

const CardSkeleton = () => (getSkeletonList() || []).map((key) => (
  <Box
    bgcolor="white"
    borderRadius={16}
    mb={2}
    key={`${key}-index`}
    px={{ xs: 2, sm: 2, md: 3 }}
  >
    <Box
      py={2}
      border={1}
      borderTop={0}
      borderRight={0}
      borderLeft={0}
      borderColor="grey.100"
    >
      <Skeleton variant="text" width={100} />
    </Box>
    <Box py={{ xs: 2, sm: 2, md: 3 }}>
      <Grid container spacing={2}>
        <ItemSkeleton />
      </Grid>
    </Box>
  </Box>
))

export default CardSkeleton;
