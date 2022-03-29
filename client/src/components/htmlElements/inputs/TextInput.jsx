import React from "react";
import "./textInput.css";
import { TextField } from "@mui/material";

const TextInput = (props) => {
  return (
    <TextField
    id="textInput"
    sx={{my: 2}}
      label={props.label}
      defaultValue={props.defaultValue}
      onChange={props.onChange}
      name={props.name}
      variant={props.variant}
      placeholder={props.placeholder}
    />
  );
};

export default TextInput;
