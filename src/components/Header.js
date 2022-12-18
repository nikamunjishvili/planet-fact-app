import React from "react";

import { FaBars } from "react-icons/fa";

import { useGlobalContext } from "../context";

const Header = () => {
  const { planets, setValue, toggleMenu, setToggleMenu } = useGlobalContext();

  const toggleNavigationHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header className="header">
      <h1 className="header__title">The Planets</h1>
      <div className="header__navigation--desktop">
        {planets.map((planet, index) => {
          return (
            <button
              className="header__navigationItem--desktop"
              key={index}
              onClick={() => setValue(index)}
            >
              {planet.name}
            </button>
          );
        })}
      </div>
      <div className="header__navigation--mobile">
        <FaBars onClick={toggleNavigationHandler} />
      </div>
    </header>
  );
};

export default Header;
