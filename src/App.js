import "./App.css";
import icon1 from "./images/icon1.svg";
import icon2 from "./images/icon2.svg";
import icon3 from "./images/icon3.svg";
import icon5 from "./images/icon5.svg";
import connect from "./images/connect.svg";
import icon6 from "./images/icon6.svg";
import icon7 from "./images/icon7.svg";
import logo from "./images/LOGO.png";
import war1 from "./images/warrior1.svg";
import war2 from "./images/warrior2.svg";
import chart from "./images/Tokenomic.png";
import war3 from "./images/warrior3.svg";
import iconew from "./images/4cC4Fgs.png";
import war4 from "./images/warrior4.svg";
import fighting from "./images/fighticon.svg";
import { useEffect, useState } from "react";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";

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
      const web3 = new Web3(provider);
      const accounts = await web3.eth.getAccounts();
      setWallet(accounts[0]);
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
              <div
                className="item"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <img src={icon1} alt="" />
                <p className="title mb-0">GITBOOK</p>
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
              <div
                className="item"
                onClick={() => {
                  connectWallet();
                }}
              >
                <img src={connect} alt="" />
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

      <section className="p-5" id="TOKENOMICS">
        <div className="container">
          <h2 className="title mb-5 title-custom">TOKENOMICS</h2>
          <div className="row">
            <div
              className="col-lg-6 col-12 d-flex align-items-center justify-content-center table-custom"
              style={{ flexDirection: "column" }}
            >
              <div className="row w-100">
                <div className="col-lg-5 col-4">List on Pancake Swap</div>
                <div className="col-lg-2 col-4">30.0%</div>
                <div className="col-lg-5 col-4">3.000.000.000 MetaCeek</div>
              </div>
              <div className="row w-100">
                <div className="col-lg-5 col-4">Pre-sale WhiteList</div>
                <div className="col-lg-2 col-4">25.0%</div>
                <div className="col-lg-5 col-4">2.500.000.000 MetaCeek</div>
              </div>
              {/* <div className="row w-100">
                <div className="col-lg-5 col-4">Pre-sale</div>
                <div className="col-lg-2 col-4">18.0%</div>
                <div className="col-lg-5 col-4">1.500.000.000 MetaCeek</div>
              </div> */}
              <div className="row w-100">
                <div className="col-lg-5 col-4">Aridrop</div>
                <div className="col-lg-2 col-4">2.0%</div>
                <div className="col-lg-5 col-4">200.000.000 MetaCeek</div>
              </div>
              <div className="row w-100">
                <div className="col-lg-5 col-4">Burn</div>
                <div className="col-lg-2 col-4">13.0%</div>
                <div className="col-lg-5 col-4">1.300.000.000 MetaCeek</div>
              </div>
              <div className="row w-100">
                <div className="col-lg-5 col-4">Cex listings</div>
                <div className="col-lg-2 col-4">20.0%</div>
                <div className="col-lg-5 col-4">2.000.000.000 MetaCeek</div>
              </div>
              <div className="row w-100">
                <div className="col-lg-5 col-4">Development Team</div>
                <div className="col-lg-2 col-4">5.0%</div>
                <div className="col-lg-5 col-4">500.000.000 MetaCeek</div>
              </div>
              <div className="row w-100">
                <div className="col-lg-5 col-4">Marketing</div>
                <div className="col-lg-2 col-4">5.0%</div>
                <div className="col-lg-5 col-4">500.000.000 MetaCeek</div>
              </div>
              <div className="row w-100">
                <div className="col-lg-5 col-4">Total </div>
                <div className="col-lg-2 col-4">100.0%</div>
                <div className="col-lg-5 col-4">10.000.000.000 MetaCeek</div>
              </div>
            </div>
            <div className="col-lg-6 col-12 chart mt-5 mb-5">
              <img width="100%" src={chart} alt="" />
            </div>
          </div>
          <h5
            className="text-center mt-4"
            style={{ color: "rgb(56, 255, 255)" }}
          >
            BUY AND SELL 12% SLIPPAGE
          </h5>
        </div>
      </section>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className=" modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                GITBOOK
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <p>
                Metaceek is the first play to earn crypto game built on the
                Binance Smart Chain which rewards players directly in Bnb or
                ceek Players will use Metaceek to recruit heroes, Level up,
                upgrade buildings, purchase various items and complete missions
                in order to receive rewards in BNB or CEEK.
              </p>
              <p>
                Besides, just holding metaceek you will get paid ceek
                automatically.
              </p>
              <p>Metaceek is launched on Pancakeswap.</p>
              <p>
                After appearing on the pancakeswap 1 week, you can choose a hero
                for yourself and get the special bonus is ceek or bnb.
              </p>
              <h4 className="text-center">Buy & Sale Slippage: 12%</h4>
              <div
                className="text-center"
                style={{ color: "rgb(56, 255, 255)" }}
              >
                <h5>4% automatic reward ceek Token </h5>
                <h5>6% goes back to reward bnb poll</h5>
                <h5>2% liquidity poll</h5>
                <h5>
                  Contract ceek Token: <br />{" "}
                  <span className="contact">
                    0xe0f94ac5462997d2bc57287ac3a3ae4c31345d66
                  </span>
                </h5>
              </div>
              <div class="dropdown-divider"></div>
              <div>
                <img width="30%" className="mb-3" src={iconew} alt="" />
                <p>
                  Presale link:
                  <a
                    target="_blank"
                    href="https://www.pinksale.finance/#/launchpad/0x16CceF449838089D6c3670c533Cfa5c9333ec332?chain=BSC"
                  >
                    Here
                  </a>
                </p>
                <p>
                  ??????PreSale information: <br /> PreSale Date: 15:00UTC 6th,
                  December <br />
                </p>
                <p>
                  {" "}
                  Softcap/Hardcap: 150/300 bnb Min/max buy: 0.1/1.5 Bnb Launch{" "}
                </p>
                <p>
                  {" "}
                  Date: 15:00 UTC 7th December <br />
                </p>
              </div>
              <div class="dropdown-divider"></div>
              <div>
                <h2 className="title mb-5 title-custom">TOKENOMICS</h2>
                <div className="row">
                  <div className="col-12 chart mt-5 mb-5">
                    <img width="100%" src={chart} alt="" />
                  </div>
                  <div
                    className="col-12 d-flex align-items-center justify-content-center table-custom"
                    style={{ flexDirection: "column" }}
                  >
                    <div className="row w-100">
                      <div className="col-lg-5 col-4">List on Pancake Swap</div>
                      <div className="col-lg-2 col-4">30.0%</div>
                      <div className="col-lg-5 col-4">
                        3.000.000.000 MetaCeek
                      </div>
                    </div>
                    <div className="row w-100">
                      <div className="col-lg-5 col-4">Pre-sale WhiteList</div>
                      <div className="col-lg-2 col-4">25.0%</div>
                      <div className="col-lg-5 col-4">
                        2.500.000.000 MetaCeek
                      </div>
                    </div>
                    {/* <div className="row w-100">
                <div className="col-lg-5 col-4">Pre-sale</div>
                <div className="col-lg-2 col-4">18.0%</div>
                <div className="col-lg-5 col-4">1.500.000.000 MetaCeek</div>
              </div> */}
                    <div className="row w-100">
                      <div className="col-lg-5 col-4">Aridrop</div>
                      <div className="col-lg-2 col-4">2.0%</div>
                      <div className="col-lg-5 col-4">200.000.000 MetaCeek</div>
                    </div>
                    <div className="row w-100">
                      <div className="col-lg-5 col-4">Burn</div>
                      <div className="col-lg-2 col-4">13.0%</div>
                      <div className="col-lg-5 col-4">
                        1.300.000.000 MetaCeek
                      </div>
                    </div>
                    <div className="row w-100">
                      <div className="col-lg-5 col-4">Cex listings</div>
                      <div className="col-lg-2 col-4">20.0%</div>
                      <div className="col-lg-5 col-4">
                        2.000.000.000 MetaCeek
                      </div>
                    </div>
                    <div className="row w-100">
                      <div className="col-lg-5 col-4">Development Team</div>
                      <div className="col-lg-2 col-4">5.0%</div>
                      <div className="col-lg-5 col-4">500.000.000 MetaCeek</div>
                    </div>
                    <div className="row w-100">
                      <div className="col-lg-5 col-4">Marketing</div>
                      <div className="col-lg-2 col-4">5.0%</div>
                      <div className="col-lg-5 col-4">500.000.000 MetaCeek</div>
                    </div>
                    <div className="row w-100">
                      <div className="col-lg-5 col-4">Total </div>
                      <div className="col-lg-2 col-4">100.0%</div>
                      <div className="col-lg-5 col-4">
                        10.000.000.000 MetaCeek
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
