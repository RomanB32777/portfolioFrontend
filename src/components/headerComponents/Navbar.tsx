import React, { useContext, useEffect } from "react";
import { NavLink, useHistory, Route } from "react-router-dom";
import { ActionType } from "../../context/reducer/types";
import { useAuth } from "../../hooks/auth.hook";
import { useHttp } from "../../hooks/http.hook";
import { ReducerContext } from "../../context/reducer/reducerContext";
import { ResourceContext } from "../../context/resource/resourceContext";
const Rellax = require("rellax");

export const Navbar: React.FC = () => {
  const auth = useAuth();
  const { req } = useHttp();
  const { state, dispatch } = useContext(ReducerContext);
  const history = useHistory();
  // const { resource } = useContext(ResourceContext)
  // const posts = resource.loadPosts.read()

  const logout = async () => {
    await req("http://localhost:3040/api/auth/logout", "GET", null, {
      Authorization: `Bearer ${state.user?.token}`,
    });
    auth.logout();
    history.push("/");
  };

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    console.log(prevScrollpos);
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      const navbar: HTMLElement | null = document.getElementById("navbar");
      if (navbar) {
        if (prevScrollpos > currentScrollPos) {
          navbar.style.top = "0px";
        } else if (prevScrollpos < 60) {
          navbar.style.top = "0px";
        } else {
          navbar.style.top = "-60px";
        }
      }
      prevScrollpos = currentScrollPos;
    };

    var rellax = new Rellax(".rellax");
    $(document).ready(function () {
      $(".scrollspy").scrollSpy({
        scrollOffset: 50,
        activeClass: "activeScrollSpy",
      });
    });
    $(document).ready(function () {
      $(".sidenav").sidenav();
    });
  }, []);

  // const NavLinkList = () => {
  //     return (
  //         <>
  //             <li> <NavLink to="/">Главная</NavLink> </li>
  //             <li> <NavLink to="/about">Обо мне</NavLink> </li>
  //             <li> <NavLink to="/posts">Проекты</NavLink> </li>
  //             <li> <NavLink to="/contacts">Контакты</NavLink> </li>
  //             {(state.user && state.user.isAuthenticated) ?
  //                 <>

  //                     <li> <NavLink to="/dashboard">Profile</NavLink> </li>
  //                     {state.user.status === 'admin' && <li> <NavLink to="/admin">Admin</NavLink> </li>}

  //                     <a className="waves-effect waves-light orange btn fixed__btn" href="#modal1" onClick={logout}>Выйти</a>
  //                 </>
  //                 :
  //                 <a className="waves-effect waves-light orange btn modal-trigger fixed__btn" href="#modal1">Войти</a>
  //             }
  //         </>
  //     )
  // }
  return (
    <>
      <div className="container">
        <div className="fixed" id="navbar">
          <div className="fixed__wrap wrap">
            <div className="fixed__humburger">
              <a href="#" data-target="slide-out" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
            </div>
            <NavLink className="fixed__repair" to="/"></NavLink>

            <Route
              path="/"
              exact
              render={() => (
                <ul className="fixed__navigation">
                  <li className="nav__item">
                    <a href="#main">Главная</a>
                    {/* <NavLink to="/">Главная</NavLink>  */}
                  </li>
                  <li className="nav__item">
                    <a href="#aboutMe">Обо мне</a>
                  </li>
                  <li className="nav__item">
                    <a href="#works">Проекты</a>
                  </li>
                  <li className="nav__item">
                    <a href="#contacts">Контакты</a>
                  </li>
                </ul>
              )}
            ></Route>

            {/* <div className="fixed__account">
                            <NavLink to="/dashboard">
                                <img src={require('../../img/Ellipse1.png')} alt="" />
                                <p>Профиль <span>Здравствуй, имя!</span> </p>
                            </NavLink>
                        </div> */}
            {state.user && state.user.isAuthenticated ? (
              <a
                className="waves-effect waves-light orange btn fixed__btn"
                href="#modal1"
                onClick={logout}
              >
                Выйти
              </a>
            ) : (
              <a
                className="waves-effect waves-light orange btn modal-trigger fixed__btn"
                href="#modal1"
              >
                Войти
              </a>
            )}
          </div>
        </div>
      </div>
      <ul id="slide-out" className="sidenav">
        <li>
          <div className="user-view">
            <div className="background">
              <img
                className="responsive-img"
                src={require("../../img/city.jpg")}
              />
            </div>
            {state.user && state.user.isAuthenticated ? (
              <>
                <NavLink className="sidenav-close" to="/dashboard">
                  <img
                    className="circle responsive-img"
                    src={state.user.avatar?.path}
                  />
                </NavLink>
                <span className="white-text name">
                  Привет, {state.user.name}!
                </span>
                <span className="white-text email">{state.user.email}</span>
              </>
            ) : (
              <>
                <img src={require("../../img/client.png")} />
                <span className="white-text name">Привет, гость!</span>
              </>
            )}
          </div>
        </li>
        {state.user && state.user.status === "admin" && (
          <li>
            {" "}
            <NavLink className="sidenav-close" to="/admin">
              Admin
            </NavLink>{" "}
          </li>
        )}
        {state.user && state.user.isAuthenticated && (
          <li>
            {" "}
            <NavLink className="sidenav-close" to="/dashboard">
              Профиль
            </NavLink>{" "}
          </li>
        )}
        <li>
          <div className="divider"></div>
        </li>
        <li>
          <a className="subheader">Навигация</a>
        </li>
        <li className="nav__item">
          {" "}
          <NavLink className="sidenav-close" to="/">
            Главная
          </NavLink>{" "}
        </li>
        <li className="nav__item">
          <a className="sidenav-close" href="#aboutMe">
            Обо мне
          </a>
        </li>
        {/* onClick={() => $('.sidenav').close()} */}
        <li className="nav__item">
          <a className="sidenav-close" href="#works">
            Проекты
          </a>
        </li>
        <li className="nav__item">
          <a className="sidenav-close" href="#contacts">
            Контакты
          </a>
        </li>
        {state.user && state.user.isAuthenticated ? (
          <li>
            <a
              className="waves-effect waves-light orange btn fixed__btn sidenav-close"
              href="#modal1"
              onClick={logout}
            >
              Выйти
            </a>
          </li>
        ) : (
          <li>
            <a
              className="waves-effect waves-light orange btn modal-trigger fixed__btn sidenav-close"
              href="#modal1"
            >
              Войти
            </a>
          </li>
        )}
        {/* <li><a className="waves-effect" href="#!">Third Link With Waves</a></li> */}
      </ul>
    </>
  );
};
