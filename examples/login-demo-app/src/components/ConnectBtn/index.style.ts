import { createStyles } from "antd-style";

export default createStyles(({ prefixCls }) => {
  return {
    walletModal: {
      color: "white",
      borderRadius: "16px",
      background: "rgb(21, 23, 22)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      paddingInline: "40px",
      // 结构: content里有: header + body + footer

      [`& .${prefixCls}-modal-content`]: {
        paddingBlock: "36px",
        paddingInline: 0,
      },
      [`& .${prefixCls}-modal-close`]: {
        color: "rgba(255,255,255,0.8)",
      },
      [`& .${prefixCls}-modal-header`]: {
        marginBottom: "50px",
      },
      [`& .${prefixCls}-modal-title`]: {
        fontSize: "24px",
        fontWeight: "500",
        lineHeight: "1",
      },
    },

    walletModalContent: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
    },

    //
    connectWalletBtn: {
      display: "flex",
    },

    // 每种连接钱包的按钮样式
    walletBtn: {
      display: "flex",
      alignItems: "center",
      width: "300px",
      height: "64px",
      cursor: "pointer",
      justifyContent: "flex-start",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      borderRadius: "12px",
      background: "rgba(255, 255, 255, 0.03)",
      padding: "0 16px",
      gap: "12px",
      color: "#fff",
      transition: "all 200ms ease 0s",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        outline: "none",
      },
      "&:focus": {
        outline: "none",
      },
      "&::after": {},
    },

    walletIcon: {
      objectFit: "cover",
      objectPosition: "center center",
      flexShrink: "0",
      maxWidth: "100%",
      width: "32px",
      height: "32px",
    },
    walletName: {
      fontSize: "16px",
      fontWeight: "500",
      lineHeight: "1",
    },
  };
});
