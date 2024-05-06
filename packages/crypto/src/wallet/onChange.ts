// @ts-nocheck

import { useEffect } from "react";
import { ethers } from "ethers";

const noop = () => {
  // do nothing
};
export const useOnChainChanged = (
  webProvider: ethers.providers.Web3Provider | undefined,
  cb: (chaindId: number) => void
) => {
  useEffect(() => {
    if (!webProvider || !webProvider.provider) {
      return;
    }
    // 监听chain的变化
    webProvider.provider?.on("chainChanged", cb);
    return () => {
      //@ts-ignore
      const off = (
        webProvider?.provider?.off ||
        webProvider?.provider?.removeListener ||
        noop
      ).bind(webProvider?.provider);
      off("chainChanged", cb);
    };
  }, [cb, webProvider, webProvider?.provider]);
};

export const useOnAccountChanged = (
  web3Provider: ethers.providers.Web3Provider | undefined,
  cb: (accounts: string[]) => void
) => {
  useEffect(() => {
    if (!web3Provider?.provider) {
      return;
    }
    const on = (web3Provider?.provider?.on || web3Provider?.provider?.addListener || noop).bind(
      web3Provider?.provider
    );
    on("accountsChanged", cb);
    return () => {
      const off = (
        web3Provider?.provider?.off ||
        web3Provider?.provider?.removeListener ||
        noop
      ).bind(web3Provider?.provider);
      off("accountsChanged", cb);
    };
  }, [cb, web3Provider, web3Provider?.provider]);
};

export const useOnDisconnect = (
  web3provider: ethers.providers.Web3Provider | undefined,
  cb: (accounts: string[]) => void
) => {
  useEffect(() => {
    if (!web3provider?.provider) {
      return;
    }
    const on = (web3provider?.provider?.on || web3provider?.provider?.addListener || noop).bind(
      web3provider?.provider
    );
    on("disconnect", cb);
    return () => {
      const off = (
        web3provider?.provider?.off ||
        web3provider?.provider?.removeListener ||
        noop
      ).bind(web3provider?.provider);
      off("disconnect", cb);
    };
  }, [cb, web3provider, web3provider?.provider]);
};
