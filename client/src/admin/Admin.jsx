import * as React from "react";
import "./css/admin.css";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import HeaderBox from "./components/headerBox/HeaderBox";
import ShareBox from "./components/shareBox/ShareBox";
import { Container } from "@mui/material";

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
      </Box>
    </Container>
  );
};

export default Admin;
