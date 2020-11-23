import React from "react";
import { FormConnectMe } from "./homePageComponents/ContactsSection/formConnectMe";
import { NavLink } from "react-router-dom";
import Plx from "react-plx";
const Fade = require("react-reveal/Fade");

export const Footer: React.FC = () => {
  const contentData1 = [
    {
      start: "self",
      startOffset: 0,
      duration: 1000,
      properties: [
        {
          startValue: 100,
          endValue: 130,
          unit: "%",
          property: "translateY",
        },
      ],
    },
  ];
  const contentDataMobile = [
    {
      start: "self",
      startOffset: 0,
      duration: 1050,
      properties: [
        {
          startValue: 0,
          endValue: 0,
          unit: "%",
          property: "translateY",
        },
      ],
    },
  ];
  return (
    <div className="section__footer">
      <footer className="footer">
        {/* <div className="footer__circle rellax"></div> */}
        <Plx className="footer__circle" parallaxData={contentData1}></Plx>
        {/* <Plx className="footer__circle-mobile" parallaxData={contentDataMobile}></Plx> */}
        <div className="container">
          <div className="footer__wrap wrap row">
            <div className="footer__titles col s12 l3">
              <h3 className="footer__title">
                Богдановский <br /> Роман
              </h3>
              <p className="footer__subtitle">
                Личный сайт <br /> веб-разработчика
              </p>
            </div>
            <div className="footer__content col s12 l9">
              <div className="row" style={{ marginBottom: 0 }}>
                <div className="footer__nav col s12 l9">
                  <ul className="nav__list">
                    <li className="nav__item">
                      {" "}
                      <NavLink to="/">Главная</NavLink>{" "}
                    </li>
                    <li className="nav__item">
                      {" "}
                      <NavLink to="/about">Обо мне</NavLink>{" "}
                    </li>
                    <li className="nav__item">
                      {" "}
                      <NavLink to="/posts">Проекты</NavLink>{" "}
                    </li>
                    <li className="nav__item">
                      {" "}
                      <NavLink to="/contacts">Контакты</NavLink>{" "}
                    </li>
                  </ul>
                  {/* <nav className="transparent z-depth-0 fixed__navigation" role="navigation">
                                <div className="nav-wrapper">
                                    <ul>
                                        
                                        <li> <NavLink to="/">Главная</NavLink> </li>
                                        <li> <NavLink to="/about">Обо мне</NavLink> </li>
                                        <li> <NavLink to="/posts">Проекты</NavLink> </li>
                                        <li> <NavLink to="/contacts">Контакты</NavLink> </li>
                                    </ul>
                                </div>
                            </nav> */}
                </div>
                <div className="footer__logo col s12 l3">
                  <NavLink to="/">
                    <img src={require("../img/1709.png")} alt="" width="150" />
                  </NavLink>
                </div>
                <ul className="footer__links col s12 l9">
                  <li className="links__item">
                    <a href="#">
                      <i className="fab fa-github"></i>
                      {/* <img src={require('../img/git.svg')} alt="" /> */}
                    </a>
                  </li>
                  <li className="links__item">
                    <a href="#">
                      <i className="fab fa-instagram"></i>

                      {/* <img src={require('../img/git.svg')} alt="" /> */}
                    </a>
                  </li>
                  <li className="links__item">
                    <a href="#">
                      <i className="fab fa-vk"></i>
                      {/* <img src={require('../img/git.svg')} alt="" /> */}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer__year col s12 l10 offset-l1">
              <p>&copy; 2020 Portfolio</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
    // <footer className="page-footer orange">
    //     <div className="container">
    //         <div className="row">
    //             <div className="col l8 s12">
    //                 <FormConnectMe />
    //             </div>
    //             {/* <div className="col l3 s12">
    //             <h5 className="white-text">Settings</h5>
    //             <ul>
    //                 <li><a className="white-text" href="#!">Link 1</a></li>
    //                 <li><a className="white-text" href="#!">Link 2</a></li>
    //                 <li><a className="white-text" href="#!">Link 3</a></li>
    //                 <li><a className="white-text" href="#!">Link 4</a></li>
    //             </ul>
    //         </div> */}
    //             <div className="col l4 s12">
    //                 <h5 className="white-text">Connect</h5>
    //                 <ul>
    //                     <li><a className="white-text" href="#!">Link 1</a></li>
    //                     <li><a className="white-text" href="#!">Link 2</a></li>
    //                     <li><a className="white-text" href="#!">Link 3</a></li>
    //                     <li><a className="white-text" href="#!">Link 4</a></li>
    //                 </ul>
    //             </div>
    //         </div>
    //     </div>
    //     <div className="footer-copyright">
    //         <div className="container">
    //             Made by <a className="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
    //         </div>
    //     </div>
    // </footer>
  );
};
