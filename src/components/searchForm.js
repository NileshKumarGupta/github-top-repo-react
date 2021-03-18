import { Button, InputLabel, TextField } from "@material-ui/core";
import React, { useState } from "react";

import "./searchForm.css";

const SearchForm = ({ setOrgName }) => {
  const [text, setText] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    setOrgName(text);
  };

  return (
    <div>
      <form className="searchForm" onSubmit={(event) => onFormSubmit(event)}>
        <InputLabel required={true}>Enter Organization's Name: </InputLabel>
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Organization Name"
          value={text}
          onChange={(event) => setText(event.target.value)}
        ></TextField>
        <Button
          variant="contained"
          color="primary"
          onClick={(event) => onFormSubmit(event)}
        >
          Go!
        </Button>
      </form>
    </div>
  );
};

export default SearchForm;
