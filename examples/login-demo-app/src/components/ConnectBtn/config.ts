import CoinbaseImg from "@src/assets/images/wallet/coinbase-wallet.svg";
import OkxImg from "@src/assets/images/wallet/okx-wallet.svg";
import MetamaskImg from "@src/assets/images/wallet/metamask.svg";
import UnknownWalletImg from "@src/assets/images/wallet/unknown.svg";
import TrustWalletImg from "@src/assets/images/wallet/trust-wallet.svg";
import BitgetWalletImg from "@src/assets/images/wallet/bitget-wallet.svg";
import WalletConnectImg from "@src/assets/images/wallet/wallet-connect.svg";
import BNBWalletImg from "@src/assets/images/wallet/bnb-wallet.svg";

export const walletMap: Record<string, { showName: string; icon: string }> = {
  metamask: { showName: "Metamask", icon: MetamaskImg },
  coinbase: { showName: "Coinbase Wallet", icon: CoinbaseImg },
  okx: { showName: "OKX Wallet", icon: OkxImg },
  trustwallet: { showName: "Trust Wallet", icon: TrustWalletImg },
  bitget: { showName: "Bitget Wallet", icon: BitgetWalletImg },
  bnbWallet: { showName: "Binance Web3 Wallet", icon: BNBWalletImg },
  walletConnect: { showName: "Wallet Connect", icon: WalletConnectImg },
};
export const unknownWalletInfo = {
  name: "Unknown Wallet",
  icon: UnknownWalletImg,
};
