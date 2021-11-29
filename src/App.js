import "./App.css";
import icon1 from "./images/icon1.svg";
import icon2 from "./images/icon2.svg";
import icon3 from "./images/icon3.svg";
import icon5 from "./images/icon5.svg";
import icon6 from "./images/icon6.svg";
import icon7 from "./images/icon7.svg";
import logo from "./images/LOGO.png";
import war1 from "./images/warrior1.svg";
import war2 from "./images/warrior2.svg";
import war3 from "./images/warrior3.svg";
import war4 from "./images/warrior4.svg";
import fighting from "./images/fighticon.svg";
import { useEffect, useState } from "react";
import WalletConnectProvider from "@walletconnect/web3-provider";

function App() {
  const [wallet, setWallet] = useState("");

  const formatWalletAddress = (address) => {
    if (address) {
      let newAddress =
        address.slice(0, 2) +
        "..." +
        address.slice(address.length - 3, address.length);
      return newAddress;
    } else {
      return "";
    }
  };

  const connectWallet = async () => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // true for mobile device
      const provider = await new WalletConnectProvider({
        rpc: {
          56: "https://bsc-dataseed1.binance.org",
        },
        chainId: 56,
        network: "binance",
        qrcode: true,
      });
      provider.networkId = 56;
      await provider.enable().catch((err) => {
        //handle close modal
      });
    } else {
      // false for not mobile device
      if (typeof window.ethereum !== "undefined") {
        //Metamask wallet

        window.ethereum
          .request({ method: "eth_requestAccounts" })
          .then((accounts) => {
            const account = accounts[0];
            setWallet(account);
          });

        //Binance chain wallet

        // window.BinanceChain
        //   .request({method: "eth_accounts"})
        //   .then((accounts) => {
        //     const account = accounts[0];
        //     setWallet(account);
        //   })
      } else {
        window.open(
          "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
        );
      }
    }
  };

  useEffect(() => {
    //processing
    // connectWallet();

    //address here
    console.log(wallet);

    //out
    return 0;
  }, [wallet]);

  return (
    <div>
      <div
        className="container"
        style={{ height: "100vh", overflow: "hidden" }}
      >
        <div className="row nav">
          <div className="col-2 logo-section">
            <div className="logo">
              <a href="#">
                <img src={logo} alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-10 col-12">
            <div className="menu">
              <div className="item">
                <img src={icon7} alt="" />
                <p className="title mb-0">META CEEK</p>
              </div>
              <div className="item">
                <img src={icon6} alt="" />
                <p className="title mb-0">MY HEROES</p>
              </div>
              <div className="item">
                <img src={icon5} alt="" />
                <p className="title mb-0">MARKET</p>
              </div>
              {/* <div class="item">
                        <img src="https://game.metaceek.io/images/icon4.svg" alt="">
                        <p class="title mb-0">UPGRADE</p>
                    </div> */}
              <div className="item">
                <img src={icon3} alt="" />
                <p className="title mb-0">RECRUIT</p>
              </div>
              <div className="item">
                <img src={icon2} alt="" />
                <p className="title mb-0">BATTLE LOG</p>
              </div>
              <div className="item">
                <img src={icon1} alt="" />
                <p className="title mb-0">GITBOOK</p>
              </div>
              <div
                className="item"
                onClick={() => {
                  connectWallet();
                }}
              >
                <img src={icon5} alt="" />
                <p className="title mb-0">
                  {wallet ? formatWalletAddress(wallet) : "CONNECT"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="heroes">
          <img className="logo_mobile" src={logo} alt="" />
          <div className="button-box mobile">
            <p
              className="title mobile ketnoi mr-2"
              onClick={() => {
                connectWallet();
              }}
            >
              {wallet ? formatWalletAddress(wallet) : "CONNECT"}
            </p>
            <p className="title mobile">FIGHT</p>
          </div>
          <img className="hero_1" src={war2} alt="" />
          <img className="hero_2" src={war4} alt="" />
          <img className="hero_3" src={war1} alt="" />
          <img className="hero_4" src={war3} alt="" />
        </div>
      </div>
      <div className="fight text-center">
        <img className="hero_fight" src={fighting} alt="" />
        <p className="title m-auto" style={{ width: "90%" }}>
          FIGHT
        </p>
      </div>
    </div>
  );
}

export default App;
