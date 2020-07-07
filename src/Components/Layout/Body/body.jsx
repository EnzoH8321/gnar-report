import React from "react";

import Card from "../../UI/Card/card.jsx";

import "./body.css";

function Body(props) {
  const { pushSurfSpot, pushMapInfo } = props;

  return <Card pushMap={pushMapInfo} surfSpotInfo={pushSurfSpot}  />;
}

export default Body;
