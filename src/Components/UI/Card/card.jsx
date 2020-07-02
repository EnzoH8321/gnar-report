import React, { useState, useEffect } from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarTwoToneIcon from "@material-ui/icons/StarTwoTone";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import NavigationIcon from "@material-ui/icons/Navigation";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

import ReactMapGL, { Marker, GeolocateControl } from "react-map-gl";
import PolylineOverlay from "../Card/overlay.jsx";

import "./card.css";

//Checks Weather
function weatherCheck(id) {
  switch (id) {
    case "18":
    case "28":
    case "9":
      return "/Images/thunder.svg";

    case "10":
    case "20":
      return "/Images/cloudynew.svg";
    case "22":
      return "/Images/drizzle.svg";
    case "21":
    case "23":
    case "24":
      return "/Images/rain.svg";

    case "1":
    case "11":
    case "19":
    case "2":
    case "30":
    case "31":
    case "32":
    case "33":
    case "34":
    case "35":
      return "/Images/cloud-sun.svg";
    default:
      return "No ID found";
  }
}

//Creates Stars
function createStars(solidRating, fadedRating) {
  let rating = [];

  for (let i = 0; i < solidRating; i++) {
    rating.push(<StarIcon style={{ color: "#64b5f6" }} />);
  }

  for (let i = 0; i < fadedRating; i++) {
    rating.push(<StarTwoToneIcon style={{ color: "#90caf9" }} />);
  }

  while (rating.length < 5) {
    rating.push(<StarBorderIcon />);
  }

  return <div>{rating}</div>;
}

//Rotates Swell Arrows
function rotateSwellArrow(degrees) {
  return (
    <NavigationIcon
      style={{ transform: `rotate(${degrees + "deg"})`, color: "black" }}
    ></NavigationIcon>
  );
}

//Rotates Wind Arrows
function rotateWindArrow(degrees) {
  return (
    <ArrowUpwardIcon
      style={{ transform: `rotate(${degrees + "deg"})`, color: "black" }}
    ></ArrowUpwardIcon>
  );
}

//Creates Card
function Card(props) {
  const { pushMap } = props;

  const {
    pushDayMonth,

    pushTimespot,
    pushConditionRating,
    pushFadedRating,
    pushSolidRating,
    pushMinHeight,
    pushMaxHeight,
    pushUnit,
    pushPrimaryHeight,
    pushPrimaryPeriod,
    pushPrimaryDirection,
    pushSecondaryHeight,
    pushSecondaryPeriod,
    pushSecondaryDirection,
    pushWindSpeed,
    pushWindDirection,
    pushWindChill,
    pushWindUnit,
    pushTemp,

    pushTimespot1,
    pushConditionRating1,
    pushFadedRating1,
    pushSolidRating1,
    pushMinHeight1,
    pushMaxHeight1,
    pushUnit1,
    pushPrimaryHeight1,
    pushPrimaryPeriod1,
    pushPrimaryDirection1,
    pushSecondaryHeight1,
    pushSecondaryPeriod1,
    pushSecondaryDirection1,
    pushWindSpeed1,
    pushWindDirection1,
    pushWindChill1,
    pushWindUnit1,
    pushTemp1,

    pushTimespot2,
    pushConditionRating2,
    pushFadedRating2,
    pushSolidRating2,
    pushMinHeight2,
    pushMaxHeight2,
    pushUnit2,
    pushPrimaryHeight2,
    pushPrimaryPeriod2,
    pushPrimaryDirection2,
    pushSecondaryHeight2,
    pushSecondaryPeriod2,
    pushSecondaryDirection2,
    pushWindSpeed2,
    pushWindDirection2,
    pushWindChill2,
    pushWindUnit2,
    pushTemp2,

    pushTimespot3,
    pushConditionRating3,
    pushFadedRating3,
    pushSolidRating3,
    pushMinHeight3,
    pushMaxHeight3,
    pushUnit3,
    pushPrimaryHeight3,
    pushPrimaryPeriod3,
    pushPrimaryDirection3,
    pushSecondaryHeight3,
    pushSecondaryPeriod3,
    pushSecondaryDirection3,
    pushWindSpeed3,
    pushWindDirection3,
    pushWindChill3,
    pushWindUnit3,
    pushTemp3,

    pushTimespot4,
    pushConditionRating4,
    pushFadedRating4,
    pushSolidRating4,
    pushMinHeight4,
    pushMaxHeight4,
    pushUnit4,
    pushPrimaryHeight4,
    pushPrimaryPeriod4,
    pushPrimaryDirection4,
    pushSecondaryHeight4,
    pushSecondaryPeriod4,
    pushSecondaryDirection4,
    pushWindSpeed4,
    pushWindDirection4,
    pushWindChill4,
    pushWindUnit4,
    pushTemp4,
  } = props;

  //Coordinates of the surf spot
  const [mapInfo, setMapInfo] = useState({
    latitude: 0,
    longitude: 0,
    width: "100%",
    height: "100%",
    zoom: 10,
  });

  //Coordinates of the user
  const [userLocation, setUserLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  //Coordinates of Map Route Coordinates
  const [mapRoute, setMapRoute] = useState();

  //Map Timer
  const [tripDuration, setTripDuration] = useState();

  //Gets Route Info
  useEffect(() => {
    async function getRoute(
      startLongitude,
      startLatitude,
      endLongitude,
      endLatitude
    ) {
      try {
        const url = `https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${startLongitude},${startLatitude};${endLongitude},${endLatitude}?steps=true&geometries=geojson&access_token=${process.env.REACT_APP_MAPBOX}`;

        const data = await fetch(url);
        const response = await data.json();

        setMapRoute(response.routes[0].geometry.coordinates);
        setTripDuration(Math.floor(response.routes[0].duration / 60));
      } catch (err) {
        console.log(err);
      }
    }
    getRoute(
      userLocation.longitude,
      userLocation.latitude,
      pushMap.longitude,
      pushMap.latitude
    );
  }, [
    userLocation.longitude,
    userLocation.latitude,
    pushMap.longitude,
    pushMap.latitude,
  ]);

  useEffect(() => {
    setMapInfo({
      latitude: pushMap.latitude,
      longitude: pushMap.longitude,
      width: "100%",
      height: "100%",
      zoom: 10,
    });
  }, [pushMap.latitude, pushMap.longitude]);

  return (
    <Box className="Box">
      <Grid
        item
        container
        xs={12}
        className="Main-Grid"
        style={{
          padding: "15px 15px",
          backgroundColor: "white",
          margin: "auto",
          width: "95%",
          boxShadow:
            "0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22)",
          borderRadius: "16px",
        }}
      >
        <Grid item container xs={3}>
          <Grid
            item
            xs={12}
            className="Card-Item"
            style={{ marginBottom: "20px", height: "300px" }}
          >
            <h1>Traffic Report</h1>
            <h2>Time to Destination:</h2>
            <h2>{tripDuration} Minutes</h2>
          </Grid>

          <Grid item xs={12} style={{}} className="MapBox">
            <ReactMapGL
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
              {...mapInfo}
              onViewportChange={(viewport) => setMapInfo(viewport)}
              height="400px"
            >
              <PolylineOverlay points={mapRoute}></PolylineOverlay>
              <GeolocateControl
                positionOptions={{ enableHighAccuracy: true }}
                trackUserLocation={false}
                onViewportChange={(viewport) =>
                  setUserLocation({
                    latitude: viewport.latitude,
                    longitude: viewport.longitude,
                  })
                }
                auto={true}
              ></GeolocateControl>
              {/* Ternary operator is used below to only load the marker after the user has selected the surf spot. Otherwise, because the lat/long are undefined the Marker errors out */}
              {pushMap.longitude ? (
                <Marker
                  latitude={pushMap.latitude}
                  longitude={pushMap.longitude}
                  zoom={mapInfo.zoom}
                >
                  <img
                    src="../Images/map.svg"
                    alt="Destination"
                    height="20px"
                    width="20px"
                  ></img>
                </Marker>
              ) : (
                <div></div>
              )}
            </ReactMapGL>
          </Grid>
        </Grid>

        <Grid
          item
          container
          xs={9}
          style={{ padding: "15px 15px" }}
          justify={"space-between"}
        >
          <Grid item xs={12} style={{}}>
            <h1>Surf Report</h1>
            <h3>{pushDayMonth}</h3>
          </Grid>

          {/* First Cell */}
          <Grid
            container
            item
            xs={6}
            style={{ maxWidth: "49.5%" }}
            className="Card-Item"
          >
            <Grid item xs={4}>
              <p>{pushTimespot}</p>
              <img
                src={weatherCheck(pushConditionRating)}
                alt=""
                height="100px"
                width="100px"
              ></img>
              <p>{pushTemp + "f"}</p>
            </Grid>
            <Grid container item xs={8}>
              <Grid item xs={12}>
                <List>
                  <ListItem>
                    <ListItemText
                      primary={`${pushMinHeight}-${pushMaxHeight}${pushUnit}`}
                      style={{ float: "left" }}
                    />
                    {createStars(pushSolidRating, pushFadedRating)}
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Primary Swell" />
                    <ListItemText
                      primary={`${pushPrimaryHeight}ft at ${pushPrimaryPeriod}s`}
                    />
                    <ListItemIcon>
                      {rotateSwellArrow(pushPrimaryDirection)}
                    </ListItemIcon>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Secondary Swell"></ListItemText>
                    <ListItemText
                      primary={`${pushSecondaryHeight}ft at ${pushSecondaryPeriod}s`}
                    />
                    <ListItemIcon>
                      {rotateSwellArrow(pushSecondaryDirection)}
                    </ListItemIcon>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Wind Direction" />
                    <ListItemText primary={`${pushWindSpeed}${pushWindUnit}`} />
                    <ListItemIcon>
                      {rotateWindArrow(pushWindDirection)}
                    </ListItemIcon>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>

          {/* Second Cell */}
          <Grid
            container
            item
            xs={6}
            style={{ maxWidth: "49.5%" }}
            className="Card-Item"
          >
            <Grid item xs={4}>
              <p>{pushTimespot1}</p>
              <img
                src={weatherCheck(pushConditionRating1)}
                alt=""
                height="100px"
                width="100px"
              ></img>
              <p>{pushTemp1 + "f"}</p>
            </Grid>
            <Grid container item xs={8}>
              <Grid item xs={12}>
                <List>
                  <ListItem>
                    <ListItemText
                      primary={`${pushMinHeight1}-${pushMaxHeight1}${pushUnit1}`}
                      style={{ float: "left" }}
                    />
                    {createStars(pushSolidRating1, pushFadedRating1)}
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Primary Swell" />
                    <ListItemText
                      primary={`${pushPrimaryHeight1}ft at ${pushPrimaryPeriod1}s`}
                    />
                    <ListItemIcon>
                      {rotateSwellArrow(pushPrimaryDirection1)}
                    </ListItemIcon>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Secondary Swell" />
                    <ListItemText
                      primary={`${pushSecondaryHeight1}ft at ${pushSecondaryPeriod1}s `}
                    />
                    <ListItemIcon>
                      {rotateSwellArrow(pushSecondaryDirection1)}
                    </ListItemIcon>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Wind Direction" />
                    <ListItemText primary={`${pushWindSpeed1}mph`} />
                    <ListItemIcon>
                      {rotateWindArrow(pushWindDirection1)}
                    </ListItemIcon>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>

          {/* Third Cell */}
          <Grid
            container
            item
            xs={6}
            style={{ maxWidth: "49.5%" }}
            className="Card-Item"
          >
            <Grid item xs={4}>
              <p>{pushTimespot2}</p>
              <img
                src={weatherCheck(pushConditionRating2)}
                alt=""
                height="100px"
                width="100px"
              ></img>
              <p>{pushTemp2 + "f"}</p>
            </Grid>
            <Grid container item xs={8}>
              <Grid item xs={12}>
                <List>
                  <ListItem>
                    <ListItemText
                      primary={`${pushMinHeight2}-${pushMaxHeight2}${pushUnit2}`}
                      style={{ float: "left" }}
                    />
                    {createStars(pushSolidRating2, pushFadedRating2)}
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Primary Swell" />
                    <ListItemText
                      primary={`${pushPrimaryHeight2}ft at ${pushPrimaryPeriod2}s `}
                    />
                    <ListItemIcon>
                      {rotateSwellArrow(pushPrimaryDirection2)}
                    </ListItemIcon>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Secondary Swell" />
                    <ListItemText
                      primary={`${pushSecondaryHeight2}ft at ${pushSecondaryPeriod2}s`}
                    />
                    <ListItemIcon>
                      {rotateSwellArrow(pushSecondaryDirection2)}
                    </ListItemIcon>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Wind Direction" />
                    <ListItemText primary={`${pushWindSpeed2}mph`} />
                    <ListItemIcon>
                      {rotateWindArrow(pushWindDirection2)}
                    </ListItemIcon>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>

          {/* Fourth Cell */}
          <Grid
            container
            item
            xs={6}
            style={{ maxWidth: "49.5%" }}
            className="Card-Item"
          >
            <Grid item xs={4}>
              <p>{pushTimespot3}</p>
              <img
                src={weatherCheck(pushConditionRating3)}
                alt=""
                height="100px"
                width="100px"
              ></img>
              <p>{pushTemp3 + "f"}</p>
            </Grid>
            <Grid container item xs={8}>
              <Grid item xs={12}>
                <List>
                  <ListItem>
                    <ListItemText
                      primary={`${pushMinHeight3}-${pushMaxHeight3}ft`}
                      style={{ float: "left" }}
                    ></ListItemText>
                    {createStars(pushSolidRating3, pushFadedRating3)}
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Primary Swell" />
                    <ListItemText
                      primary={`${pushPrimaryHeight3}ft at ${pushPrimaryPeriod3}s`}
                    />
                    <ListItemIcon>
                      {rotateSwellArrow(pushPrimaryDirection3)}
                    </ListItemIcon>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Secondary Swell" />
                    <ListItemText
                      primary={`${pushSecondaryHeight3}ft at ${pushSecondaryPeriod3}s`}
                    />
                    <ListItemIcon>
                      {rotateSwellArrow(pushSecondaryDirection3)}
                    </ListItemIcon>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Wind Direction" />
                    <ListItemText primary={`${pushWindSpeed3}mph`} />
                    <ListItemIcon>
                      {rotateWindArrow(pushWindDirection3)}
                    </ListItemIcon>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>

          {/* Fifth Cell */}
          <Grid container item xs={12} style={{}} className="Card-Item">
            <Grid item xs={6}>
              <p>{pushTimespot4}</p>
              <img
                src={weatherCheck(pushConditionRating4)}
                alt=""
                height="100px"
                width="100px"
              ></img>
              <p>{pushTemp4 + "f"}</p>
            </Grid>
            <Grid container item xs={6}>
              <Grid item xs={12}>
                <List>
                  <ListItem>
                    <ListItemText
                      primary={`${pushMinHeight4}-${pushMaxHeight4}ft`}
                      style={{ float: "left" }}
                    ></ListItemText>
                    {createStars(pushSolidRating4, pushFadedRating4)}
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Primary Swell" />
                    <ListItemText
                      primary={`${pushPrimaryHeight4}ft at ${pushPrimaryPeriod4}s`}
                    />
                    <ListItemIcon>
                      {rotateSwellArrow(pushPrimaryDirection4)}
                    </ListItemIcon>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Secondary Swell" />
                    <ListItemText
                      primary={`${pushSecondaryHeight4}ft at ${pushSecondaryPeriod4}s`}
                    />
                    <ListItemIcon>
                      {rotateSwellArrow(pushSecondaryDirection4)}
                    </ListItemIcon>
                  </ListItem>

                  <ListItem>
                    <ListItemText primary="Wind Direction" />
                    <ListItemText primary={`${pushWindSpeed4}mph`} />
                    <ListItemIcon>
                      {rotateWindArrow(pushWindDirection4)}
                    </ListItemIcon>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Card;
