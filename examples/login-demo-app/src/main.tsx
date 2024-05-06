import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider, type ThemeConfig } from "antd";
import { WagmiProvider, createConfig } from "wagmi";
import { type WalletName, Web3Provider } from "@zkbridge/fdn-crypto";
import { injected } from "wagmi/connectors";
import NiceModal from "@ebay/nice-modal-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { mainnet } from "viem/chains"; // 主网
import { sepolia } from "viem/chains"; // 测试网

import App from "./App.tsx";
import "./index.css";

/*
 * Create wagmi config
 */
const config = createConfig({
  chains: [mainnet, sepolia], // todo 这里能不能不传？
  connectors: [injected()],
});

const queryClient = new QueryClient();
const walletName = localStorage.getItem("walletName") as WalletName;

/**
 * antd的样式
 */
const primaryBlack = "#151716";
const primaryGradient = "linear-gradient(68deg, #0CFFF0 7.6%, #0CFFA7 75.87%)";
const theme: ThemeConfig = {
  token: {
    colorText: "#fff",
    colorPrimary: "#75faca",
    fontFamily: "Poppins",
    colorBgSpotlight: "#222423",
    colorBgMask: "rgba(0, 0, 0, 0.78)",
    colorBgContainer: "rgba(255, 255, 255, 0.05)",
  },
  components: {
    Modal: {
      contentBg: primaryBlack,
      titleColor: "#fff",
      headerBg: primaryBlack,
      titleFontSize: 20,
    },
  },
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <ConfigProvider prefixCls="vezk" theme={theme}>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Web3Provider value={walletName}>
          <NiceModal.Provider>
            <App />
          </NiceModal.Provider>
        </Web3Provider>
      </QueryClientProvider>
    </WagmiProvider>
  </ConfigProvider>
  // </React.StrictMode>
);
