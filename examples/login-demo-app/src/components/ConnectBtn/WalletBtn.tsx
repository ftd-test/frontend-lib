import React, { useState } from "react";
import { useWalletRef } from "@src/hooks/useWalletRef";
import { type WalletName } from "@zkbridge/fdn-crypto";
import NiceModal from "@ebay/nice-modal-react";

import { WalletModalId } from ".";
import useStyles from "./index.style";
import LoadingIcon from "../LoadingIcon";

export type WalletBtnProps = {
  id: string; // 参考Reverse Domain Name Notation (rDNS) of the Wallet Provider
  name: WalletName;
  icon?: string;
  showName: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * 连接钱包的btn
 * 从zkbridge那边复制过来的逻辑，不需要在provider里配置，
 * 但是需要@zkbridge/fnd-crypto里支持
 *
 * @param props
 * @returns
 */
const WalletBtn: React.FC<WalletBtnProps> = props => {
  const { styles } = useStyles();

  const { id, name, showName, icon } = props;
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const walletRef = useWalletRef();

  // 处理链接钱包
  const onClick = async () => {
    setIsLoading(true);
    console.log(`connect id=${id}`);
    try {
      const provider = await walletRef.current?.switchProvider(name);

      await provider?.send("eth_requestAccounts", []);
      // 隐藏Modal框
      NiceModal.hide(WalletModalId);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      console.log("connect refused", e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button onClick={onClick} className={styles.walletBtn}>
      {isLoading ? (
        <LoadingIcon />
      ) : (
        <img src={icon} className={styles.walletIcon} />
      )}
      <span className={styles.walletName}>{showName}</span>
    </button>
  );
};

export default WalletBtn;
