import React from 'react';
import { Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

import ItemSkeleton from './ItemSkeleton';

import Box from '../Box';
import BoxStyles from '../Box.module.css';

import { getSkeletonList } from '../../services';

const CardSkeleton = () => (getSkeletonList() || []).map((key) => (
  <Box
    mb={2}
    backgroundColor="white"
    borderRadius={16}
    key={`${key}-index`}
    className={BoxStyles.cardSkeleton}>
    <Box
      py={2}
      borderBottom="1px solid #f5f5f5">
      <Skeleton variant="text" width={100} />
    </Box>
    <Box className={BoxStyles.cardSkeleton_card}>
      <Grid container spacing={2}>
        <ItemSkeleton />
      </Grid>
    </Box>
  </Box>
))

export default CardSkeleton;
