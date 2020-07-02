import React from "react";
import TextField from "@material-ui/core/TextField";

import "./date.css";

function DateBox() {
  return (
    <form>
      <TextField id="date" type="date"></TextField>
    </form>
  );
}

export default DateBox;
