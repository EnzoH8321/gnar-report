import React from "react";

import Card from "../../UI/Card/card.jsx";

import "./body.css";

function Body(props) {
  const { pushSurfSpot, pushMapInfo } = props;

  return <Card pushDayMonth={pushSurfSpot.dayMonth} pushMap={pushMapInfo} />;
}

export default Body;
