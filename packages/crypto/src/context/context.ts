import React from "react";
import { useMyWallet } from "../wallet/useMyWallet";

export type Web3ContextDataType = {
  wallet: ReturnType<typeof useMyWallet>;
};

export const Web3Context = React.createContext({
  wallet: {},
} as unknown as Web3ContextDataType);
