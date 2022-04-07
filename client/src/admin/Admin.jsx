import * as React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./css/admin.css";
import { styled, Paper, Box, Container, Button } from "@mui/material";
import HeaderBox from "./components/headerBox/HeaderBox";
import ShareBox from "./components/shareBox/ShareBox";
import UserBox from "./components/userBox/UserBox";
import Login from "./components/login/Login";
import { useSelector } from "react-redux";
import Account from "./components/account/Account";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  lineHeight: "60px",
}));

const Admin = () => {
  const history = useHistory();
  const { isSuccess } = useSelector((state) => state.login);
  const successSave = localStorage.getItem("success");

  const [success, setSuccess] = useState(false)

  useEffect(() => {
    setSuccess(isSuccess);
  },[]);

  const handleLogout = () => {
    localStorage.removeItem("success");
    localStorage.removeItem("id");
    history.go();
  };

  return (
    <Container id="admin" sx={{ mt: 8 }}>
      {success || successSave === "true" ? (
        <Box className="admin__content">
          <Button onClick={handleLogout}>kilépés</Button>
          <Item className="header__box__item" sx={{ p: "30px" }}>
            <HeaderBox />
          </Item>
          <Item className="share__box__item" sx={{ p: "30px" }}>
            <ShareBox />
          </Item>
          <Item className="" sx={{ p: "30px" }}>
            <UserBox />
          </Item>
          <Item className="" sx={{ p: "30px" }}>
            <Account />
          </Item>
        </Box>
      ) : (
        <Box className="admin__content">
          <Login />
        </Box>
      )}
    </Container>
  );
};

export default Admin;
