import React, { useEffect, useState } from "react";

import { Grid } from "@material-ui/core";

import Header from "./Components/Layout/Header/header.jsx";
import Body from "./Components/Layout/Body/body.jsx";

import "./App.css";

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

  //Calls the MSW API for surf spot data
  useEffect(() => {
    async function fetchData() {
      try {
        const proxyURL = "https://rocky-wave-70691.herokuapp.com/";
        const realURL = `http://magicseaweed.com/api/${process.env.REACT_APP_MSW}/forecast/?spot_id=${spotID.id}&units=us&fields=timestamp,fadedRating,localTimestamp,solidRating,condition.*,swell.*, wind.*`;
        const data = await fetch(proxyURL + realURL);
        const response = await data.json();

        setSurfSpot(response);
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
      <Grid container spacing={2} style={{ justifyContent: "center" }}>
        <Header onHeaderChange={searchCallBackFunction} />
        {/* If latitude is false, do not display body  */}
        {surfSpot[0] ? (
          <Body pushSurfSpot={surfSpot} pushMapInfo={mapInfo} />
        ) : (
          <div></div>
        )}
      </Grid>
    </div>
  );
}

export default App;
