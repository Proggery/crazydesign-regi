import * as React from "react";
import "./css/admin.css";
import { styled, Paper, Box, Container } from "@mui/material";
import HeaderBox from "./components/headerBox/HeaderBox";
import ShareBox from "./components/shareBox/ShareBox";
import FileUpload from "./components/fileUpload/FileUpload";
import UserBox from "./components/userBox/UserBox";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  lineHeight: "60px",
}));

const Admin = () => {
  return (
    <Container id="admin" sx={{ mt: 8 }}>
      <Box className="admin__content">
        <Item className="header__box__item" sx={{ p: "30px" }}>
          <HeaderBox />
        </Item>
        <Item className="share__box__item" sx={{ p: "30px" }}>
          <ShareBox />
        </Item>
        <Item className="" sx={{ p: "30px" }}>
          <FileUpload />
        </Item>
        <Item className="" sx={{ p: "30px" }}>
          <UserBox />
        </Item>
      </Box>
    </Container>
  );
};

export default Admin;
