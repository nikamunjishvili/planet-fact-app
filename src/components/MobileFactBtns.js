import React from "react";

import { useGlobalContext } from "../context";

function MobileFactBtns() {
  const { currentButton, currentPlanet, contentInfoHandler } =
    useGlobalContext();
  return (
    <div className="mobileFactsButtons">
      <button
        className={`button mobile ${
          currentButton === "overview" && "active"
        } ${currentPlanet}`}
        data-id={"overview"}
        onClick={contentInfoHandler}
      >
        overview
      </button>
      <button
        className={`button mobile ${
          currentButton === "structure" && "active"
        } ${currentPlanet}`}
        data-id={"structure"}
        onClick={contentInfoHandler}
      >
        structure
      </button>
      <button
        className={`button mobile ${
          currentButton === "geology" && "active"
        } ${currentPlanet}`}
        data-id={"geology"}
        onClick={contentInfoHandler}
      >
        surface
      </button>
    </div>
  );
}

export default MobileFactBtns;
