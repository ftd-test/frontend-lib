import { rawChainList } from "./rawChainData";
import { btcChainList } from "./btcChainData";

export type RawChainListType = typeof rawChainList;
export type RawChainType = RawChainListType[number];
export type ChainShortNameType = RawChainType["shortName"];

// btc的
export type BtcChainListType = typeof btcChainList;
export type BtcChainType = BtcChainListType[number];
export type BtcChainShortNameType = BtcChainType["shortName"];

export type Currency = {
  readonly name: string;
  readonly symbol: string;
  readonly decimals: number;
};

export type Chain = {
  readonly rpcUrls: readonly string[];
  readonly chainId: RawChainType["chainId"];
  readonly chainName: string;
  readonly nativeCurrency: Currency;
  readonly iconUrls?: readonly string[];
  readonly blockExplorerUrls?: readonly string[];
  readonly shortName: RawChainType["shortName"];
};
export type Exporer = {
  readonly name: string;
  readonly url: string;
  readonly standard: string;
  readonly icon?: string;
};
export type ChainFullInfo = {
  readonly name: string;
  readonly chain: string;
  readonly title?: string;
  readonly icon?: string;
  readonly rpc: readonly string[];
  readonly faucets?: readonly string[];
  readonly nativeCurrency: Currency;
  readonly infoURL: string;
  readonly shortName: string;
  readonly chainId: number;
  readonly networkId: number;
  readonly slip44?: number;
  readonly parent?: {
    readonly chain: string;
    readonly type: string;
    readonly bridges?: readonly {
      readonly url: string;
    }[];
  };
  readonly ens?: {
    readonly registry: string;
  };
  readonly explorers?: readonly Exporer[];
  readonly status?: "deprecated" | "incubating" | "";
  readonly redFlags?: readonly string[];
};
