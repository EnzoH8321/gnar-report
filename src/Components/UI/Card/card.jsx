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

import MapImage from "../../../Assets/map.svg";
import ThunderImage from "../../../Assets/thunder.svg";
import CloudSunImage from "../../../Assets/cloud-sun.svg";
import RainImage from "../../../Assets/rain.svg";
import CloudyNew from "../../../Assets/cloudynew.svg";
import Drizzle from "../../../Assets/drizzle.svg";

import "./card.css";

//Takes UNIX timestamp as an argument and convert's it to an Hour + AM/PM Format
function getHours(time) {
  const unixTimestamp = time;

  const milliseconds = unixTimestamp * 1000;

  const dateObject = new Date(milliseconds);

  var hours =
    dateObject.getHours() > 12
      ? dateObject.getHours() - 12
      : dateObject.getHours();

  var am_pm = dateObject.getHours() >= 12 ? "PM" : "AM";

  return `${hours} ${am_pm}`;
}

//Takes UNIX timestamp as an argument and convert's it to a Month + Day Format.

function getDayMonth(time) {
  const unixTimestamp = time;

  const milliseconds = unixTimestamp * 1000;

  const dateObject = new Date(milliseconds);

  const day = dateObject.getDate();

  const month = dateObject.getMonth();

  //Make sure when it hit's January, the month is set to [1] instead of [0]
  if (month === 0) {
    return `1/${day}`;
  }

  return `${month}/${day}`;
}

//Get's Weather ID property from the API and returns an image based on the property number.
function weatherCheck(id) {
  switch (id) {
    case "18":
    case "28":
    case "9":
      return ThunderImage;

    case "10":
    case "20":
      return CloudyNew;
    case "22":
      return Drizzle;
    case "21":
    case "23":
    case "24":
      return RainImage;

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
      return CloudSunImage;
    default:
      return "No ID found";
  }
}

//Takes the SolidRating/FadedRating props from the API, gives them Star Icon's, then adds them to the Card
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

//Takes the Swell Direction property value and rotate's the Icon based on that number.
function rotateSwellArrow(degrees) {
  return (
    <NavigationIcon
      style={{ transform: `rotate(${degrees + "deg"})`, color: "black" }}
    ></NavigationIcon>
  );
}

//Takes the Wind Direction property value and rotate's the Icon based on that number.
function rotateWindArrow(degrees) {
  return (
    <ArrowUpwardIcon
      style={{ transform: `rotate(${degrees + "deg"})`, color: "black" }}
    ></ArrowUpwardIcon>
  );
}

//Creates Card
function Card(props) {
  //State
  const { pushMap, surfSpotInfo } = props;

  console.log(surfSpotInfo);

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

  //Gets MapBox Route Info
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

  //Gets user location and uses that Data for the map.
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
              mapStyle="mapbox://styles/enzoh3423/ckccnec7y0ef11iqpcdyfniyd"
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
                    src={MapImage}
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
            <h3>{getDayMonth(surfSpotInfo[4].localTimestamp)}</h3>
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
              <p>{getHours(surfSpotInfo[4].localTimestamp)}</p>
              <img
                src={weatherCheck(surfSpotInfo[4].condition.weather)}
                alt=""
                height="100px"
                width="100px"
              ></img>
              <p>{surfSpotInfo[4].condition.temperature + "f"}</p>
            </Grid>
            <Grid container item xs={8}>
              <Grid item xs={12}>
                <List>
                  <ListItem>
                    <ListItemText
                      primary={`${surfSpotInfo[4].swell.minBreakingHeight}-${surfSpotInfo[4].swell.maxBreakingHeight}ft`}
                      style={{ float: "left" }}
                    />
                    {createStars(
                      surfSpotInfo[4].solidRating,
                      surfSpotInfo[4].fadedRating
                    )}
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Primary Swell" />
                    <ListItemText
                      primary={`${surfSpotInfo[4].swell.components.primary.height}ft at ${surfSpotInfo[4].swell.components.primary.period}s`}
                    />
                    <ListItemIcon>
                      {rotateSwellArrow(
                        surfSpotInfo[4].swell.components.primary.direction
                      )}
                    </ListItemIcon>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Secondary Swell"></ListItemText>
                    <ListItemText
                      primary={`${surfSpotInfo[4].swell.components.secondary.height}ft at ${surfSpotInfo[4].swell.components.secondary.period}s`}
                    />
                    <ListItemIcon>
                      {rotateSwellArrow(
                        surfSpotInfo[4].swell.components.secondary.direction
                      )}
                    </ListItemIcon>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Wind Direction" />
                    <ListItemText
                      primary={`${surfSpotInfo[4].wind.speed}${surfSpotInfo[4].wind.unit}`}
                    />
                    <ListItemIcon>
                      {rotateWindArrow(surfSpotInfo[4].wind.direction)}
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
              <p>{getHours(surfSpotInfo[5].localTimestamp)}</p>
              <img
                src={weatherCheck(surfSpotInfo[5].condition.weather)}
                alt=""
                height="100px"
                width="100px"
              ></img>
              <p>{surfSpotInfo[5].condition.temperature + "f"}</p>
            </Grid>
            <Grid container item xs={8}>
              <Grid item xs={12}>
                <List>
                  <ListItem>
                    <ListItemText
                      primary={`${surfSpotInfo[5].swell.minBreakingHeight}-${surfSpotInfo[5].swell.maxBreakingHeight}ft`}
                      style={{ float: "left" }}
                    />
                    {createStars(
                      surfSpotInfo[5].solidRating,
                      surfSpotInfo[5].fadedRating
                    )}
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Primary Swell" />
                    <ListItemText
                      primary={`${surfSpotInfo[5].swell.components.primary.height}ft at ${surfSpotInfo[5].swell.components.primary.period}s`}
                    />
                    <ListItemIcon>
                      {rotateSwellArrow(
                        surfSpotInfo[5].swell.components.primary.direction
                      )}
                    </ListItemIcon>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Secondary Swell" />
                    <ListItemText
                      primary={`${surfSpotInfo[5].swell.components.secondary.height}ft at ${surfSpotInfo[5].swell.components.secondary.period}s `}
                    />
                    <ListItemIcon>
                      {rotateSwellArrow(
                        surfSpotInfo[5].swell.components.secondary.direction
                      )}
                    </ListItemIcon>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Wind Direction" />
                    <ListItemText
                      primary={`${surfSpotInfo[5].wind.speed}mph`}
                    />
                    <ListItemIcon>
                      {rotateWindArrow(surfSpotInfo[5].wind.direction)}
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
              <p>{getHours(surfSpotInfo[6].localTimestamp)}</p>
              <img
                src={weatherCheck(surfSpotInfo[6].condition.weather)}
                alt=""
                height="100px"
                width="100px"
              ></img>
              <p>{surfSpotInfo[6].condition.temperature + "f"}</p>
            </Grid>
            <Grid container item xs={8}>
              <Grid item xs={12}>
                <List>
                  <ListItem>
                    <ListItemText
                      primary={`${surfSpotInfo[6].swell.minBreakingHeight}-${surfSpotInfo[6].swell.maxBreakingHeight}ft`}
                      style={{ float: "left" }}
                    />
                    {createStars(
                      surfSpotInfo[6].solidRating,
                      surfSpotInfo[6].fadedRating
                    )}
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Primary Swell" />
                    <ListItemText
                      primary={`${surfSpotInfo[6].swell.components.primary.height}ft at ${surfSpotInfo[6].swell.components.primary.period}s `}
                    />
                    <ListItemIcon>
                      {rotateSwellArrow(
                        surfSpotInfo[6].swell.components.primary.direction
                      )}
                    </ListItemIcon>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Secondary Swell" />
                    <ListItemText
                      primary={`${surfSpotInfo[6].swell.components.secondary.height}ft at ${surfSpotInfo[6].swell.components.secondary.period}s`}
                    />
                    <ListItemIcon>
                      {rotateSwellArrow(
                        surfSpotInfo[6].swell.components.secondary.direction
                      )}
                    </ListItemIcon>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Wind Direction" />
                    <ListItemText
                      primary={`${surfSpotInfo[6].wind.speed}mph`}
                    />
                    <ListItemIcon>
                      {rotateWindArrow(surfSpotInfo[6].wind.direction)}
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
              <p>{getHours(surfSpotInfo[7].localTimestamp)}</p>
              <img
                src={weatherCheck(surfSpotInfo[7].condition.weather)}
                alt=""
                height="100px"
                width="100px"
              ></img>
              <p>{surfSpotInfo[7].condition.temperature + "f"}</p>
            </Grid>
            <Grid container item xs={8}>
              <Grid item xs={12}>
                <List>
                  <ListItem>
                    <ListItemText
                      primary={`${surfSpotInfo[7].swell.minBreakingHeight}-${surfSpotInfo[7].swell.maxBreakingHeight}ft`}
                      style={{ float: "left" }}
                    ></ListItemText>
                    {createStars(
                      surfSpotInfo[7].solidRating,
                      surfSpotInfo[7].fadedRating
                    )}
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Primary Swell" />
                    <ListItemText
                      primary={`${surfSpotInfo[7].swell.components.primary.height}ft at ${surfSpotInfo[7].swell.components.primary.period}s`}
                    />
                    <ListItemIcon>
                      {rotateSwellArrow(
                        surfSpotInfo[7].swell.components.primary.direction
                      )}
                    </ListItemIcon>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Secondary Swell" />
                    <ListItemText
                      primary={`${surfSpotInfo[7].swell.components.secondary.height}ft at ${surfSpotInfo[7].swell.components.secondary.period}s`}
                    />
                    <ListItemIcon>
                      {rotateSwellArrow(
                        surfSpotInfo[7].swell.components.secondary.direction
                      )}
                    </ListItemIcon>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Wind Direction" />
                    <ListItemText
                      primary={`${surfSpotInfo[7].wind.speed}mph`}
                    />
                    <ListItemIcon>
                      {rotateWindArrow(surfSpotInfo[7].wind.direction)}
                    </ListItemIcon>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>

          {/* Fifth Cell */}
          <Grid container item xs={12} style={{}} className="Card-Item">
            <Grid item xs={6}>
              <p>{getHours(surfSpotInfo[8].localTimestamp)}</p>
              <img
                src={weatherCheck(surfSpotInfo[8].condition.weather)}
                alt=""
                height="100px"
                width="100px"
              ></img>
              <p>{surfSpotInfo[8].condition.temperature + "f"}</p>
            </Grid>
            <Grid container item xs={6}>
              <Grid item xs={12}>
                <List>
                  <ListItem>
                    <ListItemText
                      primary={`${surfSpotInfo[8].swell.minBreakingHeight}-${surfSpotInfo[8].swell.maxBreakingHeight}ft`}
                      style={{ float: "left" }}
                    ></ListItemText>
                    {createStars(
                      surfSpotInfo[8].solidRating,
                      surfSpotInfo[8].fadedRating
                    )}
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Primary Swell" />
                    <ListItemText
                      primary={`${surfSpotInfo[8].swell.components.primary.height}ft at ${surfSpotInfo[8].swell.components.primary.period}s`}
                    />
                    <ListItemIcon>
                      {rotateSwellArrow(
                        surfSpotInfo[8].swell.components.primary.direction
                      )}
                    </ListItemIcon>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Secondary Swell" />
                    <ListItemText
                      primary={`${surfSpotInfo[8].swell.components.secondary.height}ft at ${surfSpotInfo[8].swell.components.secondary.period}s`}
                    />
                    <ListItemIcon>
                      {rotateSwellArrow(
                        surfSpotInfo[8].swell.components.secondary.direction
                      )}
                    </ListItemIcon>
                  </ListItem>

                  <ListItem>
                    <ListItemText primary="Wind Direction" />
                    <ListItemText
                      primary={`${surfSpotInfo[8].wind.speed}mph`}
                    />
                    <ListItemIcon>
                      {rotateWindArrow(surfSpotInfo[8].wind.direction)}
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
