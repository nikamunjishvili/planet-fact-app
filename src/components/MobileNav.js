import React from "react";

import { useGlobalContext } from "../context";

const MobileNav = () => {
  const { planets, setValue, toggleMenu, setToggleMenu } = useGlobalContext();

  const navigationMenuHandler = (index) => {
    setValue(index);
    setToggleMenu(!toggleMenu);
  };

  if (toggleMenu) {
    return (
      <div className="mobileNavigation">
        {toggleMenu === true && (
          <div className="mobileNavigation__items">
            {planets.map((planet, index) => {
              return (
                <button
                  className={`header__navigationItem--desktop mobileItem ${planet.name.toLowerCase()}`}
                  key={index}
                  onClick={() => navigationMenuHandler(index)}
                >
                  {planet.name}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return <></>;
};

export default MobileNav;
