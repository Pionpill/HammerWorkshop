type BetweenType = number | string;

/**
 * 判断某个值是否在范围内
 * @param equal 是否等于，默认为 true
 */
export const between = (value: BetweenType, range: [BetweenType, BetweenType], equal = true) => {
  return equal ? value >= range[0] && value <= range[1] : value > range[0] && value < range[1];
};
