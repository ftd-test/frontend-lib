import NiceModal from "@ebay/nice-modal-react";
import WalletModal from "./WalletModal";

export const WalletModalId = "zk-wallelt-modal";

NiceModal.register(WalletModalId, WalletModal);
/**
 * show modal
 * 也可以直接写里面的NiceModal.hide(ConnectWalletId);
 *
 * @returns
 */
export const show = () => {
  return NiceModal.show(WalletModalId);
};

/**
 * 隐藏modal
 * 也可以直接写里面的NiceModal.hide(ConnectWalletId);
 *
 * @returns
 */
export const hide = () => {
  return NiceModal.hide(WalletModalId);
};

export { default as ConnectWalletBtn } from "./ConnectWalletBtn";
