import React from "react";
import { TextField } from "@mui/material";

const TextInput = (props) => {
  return (
    <TextField
      label={props.label}
      defaultValue={props.defaultValue !== " " ? props.defaultValue : ""}
      onChange={props.onChange}
      name={props.name}
      variant={props.variant}
    />
  );
};

export default TextInput;
