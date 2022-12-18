import React from "react";
import { useEffect } from "react";

import { FaExternalLinkSquareAlt } from "react-icons/fa";

import { useGlobalContext } from "../context";

const Header = () => {
  const {
    planets,
    value,
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
  } = useGlobalContext();

  useEffect(() => {
    setContentInfo(overviewContent);
    setContentSource(overviewSource);
    setCurrentButton("overview");
    setCurrentPlanet(planets[value].name.toLowerCase());
    setImage(planet);
  }, [value]);

  return (
    <div className="sectionFacts">
      <div className="sectionFacts__image">
        <img src={image} alt={name} />

        {currentButton === "geology" && (
          <img src={geology} alt={name} className="geologyImg" />
        )}
      </div>
      <div className="sectionFacts__info">
        <div className="sectionFacts__info__text">
          <h1>{name}</h1>
          <p className="sectionFacts__info--content">{contentInfo}</p>
          <p className="sectionFacts__info--source">
            Source :{" "}
            <a href={contentSource} target="_blank" rel="noreferrer">
              <span> Wikipedia</span>
              &nbsp;
              <FaExternalLinkSquareAlt />
            </a>
          </p>
        </div>
        <div className="sectionFacts__info__buttons">
          <button
            className={`button ${
              currentButton === "overview" && "active"
            } ${currentPlanet}`}
            data-id={"overview"}
            onClick={contentInfoHandler}
          >
            <span>01</span> overview
          </button>
          <button
            className={`button ${
              currentButton === "structure" && "active"
            } ${currentPlanet}`}
            data-id={"structure"}
            onClick={contentInfoHandler}
          >
            <span>02</span> internal structure
          </button>
          <button
            className={`button ${
              currentButton === "geology" && "active"
            } ${currentPlanet}`}
            data-id={"geology"}
            onClick={contentInfoHandler}
          >
            <span>03</span> surface geology
          </button>
        </div>
      </div>
      <div className="sectionFacts__additionalInfo">
        <div className="box">
          <p>Rotation Time</p>
          <h2>{rotation}</h2>
        </div>
        <div className="box">
          <p>Revolution Time</p>
          <h2>{revolution}</h2>
        </div>
        <div className="box">
          <p>Radius</p>
          <h2>{radius}</h2>
        </div>
        <div className="box">
          <p>Average Temp.</p>
          <h2>{temperature}</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
