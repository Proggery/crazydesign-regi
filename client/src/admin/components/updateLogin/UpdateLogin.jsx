import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import TextInput from "../../../components/htmlElements/inputs/TextInput";
import SendButton from "../../../components/htmlElements/buttons/SendButton";
import {
  loadgetData,
  loadUpdateData,
} from "../../../redux/login/reducers/thunks";

const UpdateLogin = () => {
  const dispatch = useDispatch();
  const { getData, message } = useSelector((state) => state.login);

  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = data;

  const userID = localStorage.getItem("id");

  useEffect(() => {
    dispatch(loadgetData(userID));
  }, []);

  useEffect(() => {
    if (getData) {
      setData({
        ...data,
        username: getData.username,
      });
    }
  }, [getData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleUpdate = (e, id) => {
    e.preventDefault();

    dispatch(loadUpdateData(data, id));
    setData({
      ...data,
      password: "",
    });
  };

  const usernameProps = {
    label: "Felhasználónév",
    name: "username",
    onChange: handleChange,
    variant: "standard",
  };

  const passwordProps = {
    ...usernameProps,
    name: "password",
    label: "Jelszó",
  };

  const updateButtonProps = {
    value: "Módosít",
    onClick: (e) => handleUpdate(e, userID),
    variant: "contained",
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
      className="configBox"
    >
      <div className="configBox__header">
        <h2>Felhasználónév és jelszó módosítás</h2>
      </div>

      <div className="configBox__content">
        <TextInput value={username} {...usernameProps} />
        <TextInput value={password} {...passwordProps} />
        <SendButton {...updateButtonProps} />
      </div>
    </Box>
  );
};

export default UpdateLogin;
