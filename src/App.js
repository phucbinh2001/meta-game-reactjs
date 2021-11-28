import logo from "./logo.svg";
import "./App.css";

function App() {
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
                <img src="https://game.metaceek.io/images/LOGO.png" alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-10 col-12">
            <div className="menu">
              <div className="item">
                <img src="https://game.metaceek.io/images/icon7.svg" alt="" />
                <p className="title mb-0">META CEEK</p>
              </div>
              <div className="item">
                <img src="https://game.metaceek.io/images/icon6.svg" alt="" />
                <p className="title mb-0">MY HEROES</p>
              </div>
              <div className="item">
                <img src="https://game.metaceek.io/images/icon5.svg" alt="" />
                <p className="title mb-0">MARKET</p>
              </div>
              {/* <div class="item">
                        <img src="https://game.metaceek.io/images/icon4.svg" alt="">
                        <p class="title mb-0">UPGRADE</p>
                    </div> */}
              <div className="item">
                <img src="https://game.metaceek.io/images/icon3.svg" alt="" />
                <p className="title mb-0">RECRUIT</p>
              </div>
              <div className="item">
                <img src="https://game.metaceek.io/images/icon2.svg" alt="" />
                <p className="title mb-0">BATTLE LOG</p>
              </div>
              <div className="item">
                <img src="https://game.metaceek.io/images/icon1.svg" alt="" />
                <p className="title mb-0">GITBOOK</p>
              </div>
            </div>
          </div>
        </div>
        <div className="heroes">
          <img
            className="logo_mobile"
            src="https://game.metaceek.io/images/LOGO.png"
            alt=""
          />
          <p className="title mobile">FIGHT</p>
          <img
            className="hero_1"
            src="https://game.metaceek.io/images/warrior2.svg"
            alt=""
          />
          <img
            className="hero_2"
            src="https://game.metaceek.io/images/warrior4.svg"
            alt=""
          />
          <img
            className="hero_3"
            src="https://game.metaceek.io/images/warrior1.svg"
            alt=""
          />
          <img
            className="hero_4"
            src="https://game.metaceek.io/images/warrior3.svg"
            alt=""
          />
        </div>
      </div>
      <div className="fight text-center">
        <img
          className="hero_fight"
          src="https://game.metaceek.io/images/fighticon.svg"
          alt=""
        />
        <p className="title m-auto" style={{ width: "90%" }}>
          FIGHT
        </p>
      </div>
    </div>
  );
}

export default App;
