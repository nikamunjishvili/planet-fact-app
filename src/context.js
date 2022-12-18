import React, { useState, useContext } from "react";

import planetsData from "./data.json";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [planets, setPlanets] = useState(planetsData);
  const [value, setValue] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [contentInfo, setContentInfo] = useState("");
  const [contentSource, setContentSource] = useState("");
  const [currentButton, setCurrentButton] = useState("");
  const [currentPlanet, setCurrentPlanet] = useState("");
  const [image, setImage] = useState("");

  const {
    name,
    overview: { content: overviewContent, source: overviewSource },
    structure: { content: structureContent, source: structureSource },
    geology: { content: geologyContent, source: geologySource },
    images: { planet, internal, geology },
    structure,
    radius,
    revolution,
    rotation,
    temperature,
  } = planets[value];

  const contentInfoHandler = (e) => {
    const currentButton = e.target.getAttribute("data-id");

    switch (currentButton) {
      case "overview":
        setContentInfo(overviewContent);
        setContentSource(overviewSource);
        setCurrentButton("overview");
        setImage(planet);
        break;
      case "structure":
        setContentInfo(structureContent);
        setContentSource(structureSource);
        setCurrentButton("structure");
        setImage(internal);
        break;
      case "geology":
        setContentInfo(geologyContent);
        setContentSource(geologySource);
        setCurrentButton("geology");
        setImage(planet);
        break;
    }
  };

  return (
    <AppContext.Provider
      value={{
        planets,
        setPlanets,
        value,
        setValue,
        toggleMenu,
        setToggleMenu,
        contentInfo,
        setContentInfo,
        contentSource,
        setContentSource,
        currentButton,
        setCurrentButton,
        currentPlanet,
        setCurrentPlanet,
        image,
        setImage,
        contentInfoHandler,
        overviewContent,
        overviewSource,
        planet,
        geology,
        rotation,
        revolution,
        temperature,
        radius,
        name,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
