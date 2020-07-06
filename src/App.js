import React, { useEffect, useState } from "react";

import { Grid } from "@material-ui/core";

import Header from "./Components/Layout/Header/header.jsx";
import Body from "./Components/Layout/Body/body.jsx";

import "./App.css";

function getHours(time) {
  const unixTimestamp = time;

  const milliseconds = unixTimestamp * 1000;

  const dateObject = new Date(milliseconds);

  var hours =
    dateObject.getHours() > 12
      ? dateObject.getHours() - 12
      : dateObject.getHours();

  var am_pm = dateObject.getHours() >= 12 ? "PM" : "AM";
  // hours = hours < 10 ? "0" + hours : hours;

  return `${hours} ${am_pm}`;
}

function getDayMonth(time) {
  const unixTimestamp = time;

  const milliseconds = unixTimestamp * 1000;

  const dateObject = new Date(milliseconds);

  const day = dateObject.getDate();

  const month = dateObject.getMonth();

  //When it hit's January
  if (month === 0) {
    return `1/${day}`;
  }

  return `${month}/${day}`;
}

function App() {
  const [spotID, setspotID] = useState("Default");
  const [surfSpot, setSurfSpot] = useState({});

  const [mapInfo, setMapInfo] = useState({
    latitude: 0,
    longitude: 0,
    width: "100%",
    height: "100%",
    zoom: 10,
  });

  //For MSW API
  useEffect(() => {
    async function fetchData() {
      try {
        const proxyURL = "https://morning-refuge-88650.herokuapp.com/";
        const realURL = `http://magicseaweed.com/api/${process.env.REACT_APP_MSW}/forecast/?spot_id=${spotID.id}&units=us&fields=timestamp,fadedRating,localTimestamp,solidRating,condition.*,swell.*, wind.*`;
        const data = await fetch(proxyURL + realURL);
        const response = await data.json();

        setSurfSpot(response);
        console.log(response)
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [spotID]);

  //Returns Info from the Dropdown
  function searchCallBackFunction(childData) {
    setspotID(childData);
    setMapInfo({
      ...mapInfo,
      latitude: childData.latitude,
      longitude: childData.longitude,
    });
  }

  return (
    <div className="App">
      <Grid container spacing={2}>
        <Header onHeaderChange={searchCallBackFunction} />
        {/* If latitude is false, do not display body  */}
        {mapInfo.latitude ? (
          <Body pushSurfSpot={surfSpot} pushMapInfo={mapInfo} />
        ) : (
          <div></div>
        )}
      </Grid>
    </div>
  );
}

export default App;
