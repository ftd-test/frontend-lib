import { WalletType, useWallet } from "@zkbridge/fdn-crypto";
import { useRef } from "react";

export const useWalletRef = () => {
  const ref = useRef<WalletType>();
  const wallet: WalletType = useWallet();
  ref.current = wallet;
  return ref;
};
