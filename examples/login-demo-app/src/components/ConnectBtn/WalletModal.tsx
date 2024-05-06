import { Row, Col, Modal } from "antd";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { CloseCircleOutlined } from "@ant-design/icons";
import WalletBtn from "./WalletBtn";
import { walletMap } from "./config";

// 样式
import useStyles from "./index.style";

const WalletModal = NiceModal.create(() => {
  const { visible, hide } = useModal();
  const onClose = () => {
    hide();
  };
  const { styles } = useStyles();
  return (
    <Modal
      open={visible}
      onCancel={onClose}
      className={styles.walletModal}
      width={702}
      title="Connect Wallet"
      closeIcon={<CloseCircleOutlined style={{ fontSize: "24px" }} />}
      footer={null}
      maskClosable={false}
    >
      <div className={styles.walletModalContent}>
        <WalletBtn
          id="io.metamask"
          name="metamask"
          showName="MetaMask"
          icon={walletMap.metamask.icon}
        />
        <WalletBtn
          id="io.binance"
          name="bnbWallet"
          showName="Binance Web3 Wallet"
          icon={walletMap.bnbWallet.icon}
        />
        <WalletBtn
          id="io.trust"
          name="trustwallet"
          showName="Trust Wallet"
          icon={walletMap.trustwallet.icon}
        />
        <WalletBtn
          id="io.okx"
          name="okx"
          showName="OKEX Wallet"
          icon={walletMap.okx.icon}
        />
        <WalletBtn
          id="com.coinbase.wallet"
          name="coinbase"
          showName="Coinbase Wallet"
          icon={walletMap.coinbase.icon}
        />
        <WalletBtn
          id="io.bitget"
          name="bitkeep"
          showName="Bitget Wallet"
          icon={walletMap.bitget.icon}
        />
      </div>
    </Modal>
  );
});

export default WalletModal;
