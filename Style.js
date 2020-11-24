import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "./Context";

function Styles() {
  const { styleLists } = useContext(Context);

  function findStyle() {
    return styleLists.map((songStyles) => (
      <Link key={songStyles} to={`/style/${songStyles}`}>
        <button>
          <i className="ri-headphone-fill"></i>{songStyles}
        </button>
      </Link>
    ));
  }

  return (
    <div className="style">
      {findStyle()}
    </div>
  );
}
export default Styles;
