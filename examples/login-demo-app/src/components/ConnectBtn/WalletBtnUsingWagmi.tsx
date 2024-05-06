import React, { useState } from "react";
import { useConnect, useConnectors } from "wagmi";
import NiceModal from "@ebay/nice-modal-react";
import { Button, message } from "antd";
import { WalletModalId } from "./index";

export type WalletItem = {};

export type WalletBtnProps = {
  id: string;
  icon?: string;
  showName: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * 连接钱包的btn
 * 使用了wagmi实现的
 *
 * 缺点：需要提前在wagmi的config里配置好，才能拿到connector
 * @param props
 * @returns
 */
const WalletBtn: React.FC<WalletBtnProps> = props => {
  const { id, showName } = props;
  const { status, connectAsync } = useConnect();
  const connectors = useConnectors();

  // 处理链接钱包
  const onClick = async () => {
    let connector;
    // todo 如果是injectedProvider这里connectors会把你浏览器里装的插件都会返回，做业务时自己过滤下
    const index = connectors.findIndex(item => item.id == id);
    if (index > -1) {
      connector = connectors[index];
      try {
        await connectAsync({ connector });
        NiceModal.hide(WalletModalId);
      } catch (e: any) {
        message.error({
          content: e.message,
        });
      }
    } else {
      message.error({
        content: "wallet not support",
      });
    }
  };

  return (
    <Button loading={status == "pending"} onClick={onClick}>
      {showName}
    </Button>
  );
};

export default WalletBtn;
