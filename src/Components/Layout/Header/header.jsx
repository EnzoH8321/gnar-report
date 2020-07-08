import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import SearchBar from "../../UI/SearchBar/search-bar.jsx";
import DateBox from "../../UI/Date/date.jsx";

import "./header.jsx";

function Header(props) {
  const [location, setLocation] = useState("Default");

  function callBackFunction(childData) {
    setLocation(childData);
  }

  return (
    <Grid item xs={12} align="center">
      <p>Type in where you want to go, See if you should</p>
      <h1>Gnar Report</h1>
      <SearchBar parentCallback={callBackFunction} />

      <Button
        variant="contained"
        color="primary"
        style={{ margin: "20px" }}
        onClick={() => props.onHeaderChange(location)}
      >
        Lets Go
      </Button>
    </Grid>
  );
}

export default Header;
