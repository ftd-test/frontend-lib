import { s } from "@zkbridge/utils";
import { BigNumber, ethers } from "ethers";
export const parseEther = ethers.utils.parseEther;
export const formatEther = ethers.utils.formatEther;

/**
 * decimal has 18 digits
 * @param x
 * @param y
 * @returns
 */
export const divEther = (x: BigNumber, y: BigNumber) => {
  return x.mul(ethers.constants.WeiPerEther).div(y);
};

export const makeEthFromDecimal = (decimal: number | string, units = 18): BigNumber => {
  let _decimal = s(decimal);
  if (_decimal.length > units) {
    _decimal = _decimal.slice(0, units);
  }

  const idx = _decimal.indexOf(".");
  //1.23  * 1e4 = 12300
  // 123 * 1e4
  const left = idx >= 0 ? units - (_decimal.length - idx - 1) : units;
  const res = `${_decimal.replace(".", "")}${Array(left).fill("0").join("")}`;
  return BigNumber.from(res);
};
