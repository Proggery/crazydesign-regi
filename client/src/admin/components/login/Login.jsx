import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { loadCreateData } from "../../../redux/login/reducers/thunks";

const Login = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loadCreateData(user));
    setUser({
      username: "",
      password: "",
    });
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <h1>Login: 🤓</h1>
        <TextField
          onChange={handleChange}
          name="username"
          label="Felhasználónév"
          variant="standard"
          value={user.username}
        />
        <TextField
          onChange={handleChange}
          name="password"
          label="Jelszó"
          variant="standard"
          value={user.password}
        />
        <Button type="submit" variant="outlined">
          Bejelentkezés
        </Button>
      </Box>
    </>
  );
};

export default Login;
