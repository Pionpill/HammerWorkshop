/** 判断两个数组元素是否相同，仅判断一层 */
export const isSameArray = (array1: any[], array2: any[]) => {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
