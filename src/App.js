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
  const [surfSpot, setSurfSpot] = useState({
    dayMonth: "",

    localTimestamp0: 0,
    localTimestamp1: 0,
    localTimestamp2: 0,
    localTimestamp3: 0,
    localTimestamp4: 0,
    conditionRating0: 0,
    conditionRating1: 0,
    conditionRating2: 0,
    conditionRating3: 0,
    conditionRating4: 0,

    fadedRating0: 0,
    fadedRating1: 0,
    fadedRating2: 0,
    fadedRating3: 0,
    fadedRating4: 0,
    solidRating0: 0,
    solidRating1: 0,
    solidRating2: 0,
    solidRating3: 0,
    solidRating4: 0,
    minBreakingHeight0: 0,
    minBreakingHeight1: 0,
    minBreakingHeight2: 0,
    minBreakingHeight3: 0,
    minBreakingHeight4: 0,
    maxBreakingHeight0: 0,
    maxBreakingHeight1: 0,
    maxBreakingHeight2: 0,
    maxBreakingHeight3: 0,
    maxBreakingHeight4: 0,
    unit: "ft",
    primaryHeight0: 0,
    primaryHeight1: 0,
    primaryHeight2: 0,
    primaryHeight3: 0,
    primaryHeight4: 0,
    primaryPeriod0: 0,
    primaryPeriod1: 0,
    primaryPeriod2: 0,
    primaryPeriod3: 0,
    primaryPeriod4: 0,
    primaryDirection0: 0,
    primaryDirection1: 0,
    primaryDirection2: 0,
    primaryDirection3: 0,
    primaryDirection4: 0,
    primaryCompassDirection0: "",
    primaryCompassDirection1: "",
    primaryCompassDirection2: "",
    primaryCompassDirection3: "",
    primaryCompassDirection4: "",
    secondaryHeight0: 0,
    secondaryHeight1: 0,
    secondaryHeight2: 0,
    secondaryHeight3: 0,
    secondaryHeight4: 0,
    secondaryPeriod0: 0,
    secondaryPeriod1: 0,
    secondaryPeriod2: 0,
    secondaryPeriod3: 0,
    secondaryPeriod4: 0,
    secondaryDirection0: 0,
    secondaryDirection1: 0,
    secondaryDirection2: 0,
    secondaryDirection3: 0,
    secondaryDirection4: 0,
    secondaryCompassDirection0: "",
    secondaryCompassDirection1: "",
    secondaryCompassDirection2: "",
    secondaryCompassDirection3: "",
    secondaryCompassDirection4: "",
    windSpeed0: 0,
    windSpeed1: 0,
    windSpeed2: 0,
    windSpeed3: 0,
    windSpeed4: 0,
    windDirection0: 0,
    windDirection1: 0,
    windDirection2: 0,
    windDirection3: 0,
    windDirection4: 0,
    windCompassDirection0: 0,
    windCompassDirection1: 0,
    windCompassDirection2: 0,
    windCompassDirection3: 0,
    windCompassDirection4: 0,
    windChill0: 0,
    windChill1: 0,
    windChill2: 0,
    windChill3: 0,
    windChill4: 0,
    windUnit: "mph",
    temperature0: 0,
    temperature1: 0,
    temperature2: 0,
    temperature3: 0,
    temperature4: 0,
    temperatureUnit: 0,
  });

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
        const realURL = `http://magicseaweed.com/api/${process.env.REACT_APP_MSW}/forecast/?spot_id=${spotID.id}&units=us`;
        const data = await fetch(proxyURL + realURL);
        const response = await data.json();

        setSurfSpot({
          dayMonth: getDayMonth(response[4].localTimestamp),
          localTimestamp0: getHours(response[4].localTimestamp),
          localTimestamp1: getHours(response[5].localTimestamp),
          localTimestamp2: getHours(response[6].localTimestamp),
          localTimestamp3: getHours(response[7].localTimestamp),
          localTimestamp4: getHours(response[8].localTimestamp),
          fadedRating0: response[4].fadedRating,
          fadedRating1: response[5].fadedRating,
          fadedRating2: response[6].fadedRating,
          fadedRating3: response[7].fadedRating,
          fadedRating4: response[8].fadedRating,
          solidRating0: response[4].solidRating,
          solidRating1: response[5].solidRating,
          solidRating2: response[6].solidRating,
          solidRating3: response[7].solidRating,
          solidRating4: response[8].solidRating,
          minBreakingHeight0: response[4].swell.minBreakingHeight,
          minBreakingHeight1: response[5].swell.minBreakingHeight,
          minBreakingHeight2: response[6].swell.minBreakingHeight,
          minBreakingHeight3: response[7].swell.minBreakingHeight,
          minBreakingHeight4: response[8].swell.minBreakingHeight,
          maxBreakingHeight0: response[4].swell.maxBreakingHeight,
          maxBreakingHeight1: response[5].swell.maxBreakingHeight,
          maxBreakingHeight2: response[6].swell.maxBreakingHeight,
          maxBreakingHeight3: response[7].swell.maxBreakingHeight,
          maxBreakingHeight4: response[8].swell.maxBreakingHeight,
          unit: "ft",
          primaryHeight0: response[4].swell.components.primary.height,
          primaryHeight1: response[5].swell.components.primary.height,
          primaryHeight2: response[6].swell.components.primary.height,
          primaryHeight3: response[7].swell.components.primary.height,
          primaryHeight4: response[8].swell.components.primary.height,
          primaryPeriod0: response[4].swell.components.primary.period,
          primaryPeriod1: response[5].swell.components.primary.period,
          primaryPeriod2: response[6].swell.components.primary.period,
          primaryPeriod3: response[7].swell.components.primary.period,
          primaryPeriod4: response[8].swell.components.primary.period,
          primaryDirection0: response[4].swell.components.primary.direction,
          primaryDirection1: response[5].swell.components.primary.direction,
          primaryDirection2: response[6].swell.components.primary.direction,
          primaryDirection3: response[7].swell.components.primary.direction,
          primaryDirection4: response[8].swell.components.primary.direction,
          primaryCompassDirection0:
            response[4].swell.components.primary.compassDirection,
          primaryCompassDirection1:
            response[5].swell.components.primary.compassDirection,
          primaryCompassDirection2:
            response[6].swell.components.primary.compassDirection,
          primaryCompassDirection3:
            response[7].swell.components.primary.compassDirection,
          primaryCompassDirection4:
            response[8].swell.components.primary.compassDirection,
          secondaryHeight0: response[4].swell.components.secondary.height,
          secondaryHeight1: response[5].swell.components.secondary.height,
          secondaryHeight2: response[6].swell.components.secondary.height,
          secondaryHeight3: response[7].swell.components.secondary.height,
          secondaryHeight4: response[8].swell.components.secondary.height,
          secondaryPeriod0: response[4].swell.components.secondary.period,
          secondaryPeriod1: response[5].swell.components.secondary.period,
          secondaryPeriod2: response[6].swell.components.secondary.period,
          secondaryPeriod3: response[7].swell.components.secondary.period,
          secondaryPeriod4: response[8].swell.components.secondary.period,
          secondaryDirection0: response[4].swell.components.secondary.direction,
          secondaryDirection1: response[5].swell.components.secondary.direction,
          secondaryDirection2: response[6].swell.components.secondary.direction,
          secondaryDirection3: response[7].swell.components.secondary.direction,
          secondaryDirection4: response[8].swell.components.secondary.direction,
          secondaryCompassDirection0:
            response[4].swell.components.secondary.compassDirection,
          secondaryCompassDirection1:
            response[5].swell.components.secondary.compassDirection,
          secondaryCompassDirection2:
            response[6].swell.components.secondary.compassDirection,
          secondaryCompassDirection3:
            response[7].swell.components.secondary.compassDirection,
          secondaryCompassDirection4:
            response[8].swell.components.secondary.compassDirection,
          windSpeed0: response[4].wind.speed,
          windSpeed1: response[5].wind.speed,
          windSpeed2: response[6].wind.speed,
          windSpeed3: response[7].wind.speed,
          windSpeed4: response[8].wind.speed,
          windDirection0: response[4].wind.direction,
          windDirection1: response[5].wind.direction,
          windDirection2: response[6].wind.direction,
          windDirection3: response[7].wind.direction,
          windDirection4: response[8].wind.direction,
          windCompassDirection0: response[4].wind.compassDirection,
          windCompassDirection1: response[5].wind.compassDirection,
          windCompassDirection2: response[6].wind.compassDirection,
          windCompassDirection3: response[7].wind.compassDirection,
          windCompassDirection4: response[8].wind.compassDirection,
          windChill0: response[4].wind.chill,
          windChill1: response[5].wind.chill,
          windChill2: response[6].wind.chill,
          windChill3: response[7].wind.chill,
          windChill4: response[8].wind.chill,
          windUnit: "mph",
          temperature0: response[4].condition.temperature,
          temperature1: response[5].condition.temperature,
          temperature2: response[6].condition.temperature,
          temperature3: response[7].condition.temperature,
          temperature4: response[8].condition.temperature,
          temperatureUnit: "c",
          conditionRating0: response[4].condition.weather,
          conditionRating1: response[5].condition.weather,
          conditionRating2: response[6].condition.weather,
          conditionRating3: response[7].condition.weather,
          conditionRating4: response[8].condition.weather,
        });
        console.log(response);
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
