import { Chain } from "./types";
import { toHexString } from "@zkbridge/fdn-utils";
import { getValidRpc } from "./getValidRpc";

export const toHexChain = (chain: Chain) => ({
  ...chain,
  chainId: toHexString(chain.chainId),
  rpcUrls: [getValidRpc(chain)],
});
