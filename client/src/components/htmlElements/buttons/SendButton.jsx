import { Button } from "@mui/material";
import React from "react";

const SendButton = (props) => {
  return (
    <Button onClick={props.onClick} variant={props.variant}>
      {props.value}
    </Button>
  );
};

export default SendButton;
