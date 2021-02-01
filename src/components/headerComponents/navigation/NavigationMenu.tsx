import React from "react";
import { Route } from "react-router-dom";

export const NavigationMenu: React.FC = () => {
  return (
    <Route
      path="/"
      exact
      render={() => (
        <>
          <li className="nav__item">
            <a href="#main">Главная</a>
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
        </>
      )}
    ></Route>
  );
};
