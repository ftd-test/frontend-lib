import React from "react";
import { Button } from "antd";

import { show } from "./index";
import useStyles from "./index.style";

type ConnectWalletProps = {
  onClick?: () => void;
  children: React.ReactNode;
};
const ConnectWalletBtn: React.FC<ConnectWalletProps> = props => {
  const { onClick, children, ...restProps } = props;
  const { styles } = useStyles();

  // 处理点击事件
  const handleClick = async () => {
    if (onClick) {
      await onClick();
    }
    // 展示弹框
    await show();
  };
  return (
    <Button
      onClick={handleClick}
      className={styles.connectWalletBtn}
      {...restProps}
    >
      {children}
    </Button>
  );
};

export default ConnectWalletBtn;
