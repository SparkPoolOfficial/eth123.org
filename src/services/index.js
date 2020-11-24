export const getSkeletonList = (length = 8) => {
  let list = [];
  for (let i = 0; i < length; i++) {
    list.push(i);
  }
  return list;
}
