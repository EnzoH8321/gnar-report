import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

import "./search-bar.css";

function SearchBar(props) {
  const exampleSpots = [
    {
      title: "Linda Mar",
      id: "819",
      latitude: 37.598932,
      longitude: -122.501738,
    },
    {
      title: "Ocean Beach",
      id: "255",
      latitude: 37.759473,
      longitude: -122.5107,
    },
  ];

  function handleTextFieldChange(event, values) {
    props.parentCallback(values);
  }

  return (
    <Autocomplete
      id="combo-box"
      options={exampleSpots}
      getOptionLabel={(option) => option.title}
      style={{ width: 200 }}
      renderInput={(params) => (
        <TextField {...params} label="Surf Spots"></TextField>
      )}
      onChange={handleTextFieldChange}
      getOptionSelected={(option, value) => option.title === value.title}
    />
  );
}

export default SearchBar;
