import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import { AboutMeSection } from "../components/homePageComponents/AboutMeSection";
import { SomeWorksSection } from "../components/homePageComponents/SomeWorksSection/SomeWorksSection";
import { ContactsSection } from "../components/homePageComponents/ContactsSection/ContactsSection";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const Fade = require("react-reveal/Fade");
//const ReactFullpage = require("@fullpage/react-fullpage");

export const HomePage: React.FunctionComponent = () => {
  return (
    <>
      {/* <div id="fullpage pt-2"> */}

      <div className="section " style={{ paddingTop: 0 }}>
        <div id="main" className="section__header scrollspy">
          <header className="header">
            {/* style={{height: '100vh'}} */}
            <div className="container">
              <div className="header__wrap wrap">
                {/* <Fade bottom> */}
                <div className="header__titles">
                  <h1 className="header__title">
                    Backend и Frontend <br /> разработка <span>веб</span>
                    -приложений
                  </h1>
                  <h2 className="header__subtitle">
                    Личный сайт веб разработчика <br /> Романа Богдановского
                  </h2>
                </div>
                <div className="header__button">
                  <a
                    className="header__works waves-effect waves-light orange btn-large"
                    href="#modal1"
                  >
                    Посмотреть работы
                  </a>
                </div>
                <div className="header__scroll center-align">
                  <p>Скрольте ниже</p>
                  {/* <img src={require('../img/scroll-down.svg')} alt="" /> */}
                  <div className="mouse">
                    <span></span>
                    <span></span>
                    <span></span>
                    <i className="arrow down"></i>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
      {/* <div className="section fp-auto-height"> */}
      <AboutMeSection />
      {/* </div> */}
      {/* <div className="section "> */}
      <SomeWorksSection />
      {/* </div> */}
      {/* <div className="section "> */}
      <ContactsSection />
      {/* </div> */}
      {/* </div> */}
    </>
  );
};
