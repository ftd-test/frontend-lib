import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ConnectWalletBtn } from "./components/ConnectBtn";
import { useWallet } from "@zkbridge/fdn-crypto";

function App() {
  const wallet = useWallet();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {wallet ? (
          <span>{wallet.account}</span>
        ) : (
          <ConnectWalletBtn>Connect Wallet</ConnectWalletBtn>
        )}
        <ConnectWalletBtn>Connect Wallet</ConnectWalletBtn>
      </div>
    </>
  );
}

export default App;
