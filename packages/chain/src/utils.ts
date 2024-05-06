import { Chain } from "./types";
import { getValidRpc } from "./getValidRpc";

export const toHexString = (n: number) => `0x${n.toString(16)}`;
export const toHexChain = (chain: Chain) => ({
  ...chain,
  chainId: toHexString(chain.chainId),
  rpcUrls: [getValidRpc(chain)],
});
