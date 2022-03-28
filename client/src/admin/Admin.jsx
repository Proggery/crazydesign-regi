import * as React from "react";
import "./admin.css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import HeaderBox from "./components/headerBox/HeaderBox";
import ShareBox from "./components/shareBox/ShareBox";
import { Container } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  lineHeight: "60px",
}));

const lightTheme = createTheme({ palette: { mode: "light" } });

const Admin = () => {
  return (
    <Container maxWidth="lg" sx={{mt:8}}>
      <Grid container spacing={2}>
        {[lightTheme].map((theme, key) => (
          <Grid key={key}>
            <ThemeProvider theme={theme}>
              <Box
                sx={{
                  display: "grid",
                  gap: "3rem",
                  gridTemplateColumns: "repeat(3, 1fr)",
                }}
              >
                <Item sx={{ p: "30px" }} elevation={3}>
                  <HeaderBox />
                </Item>
                <Item sx={{ p: "30px" }} elevation={3}>
                  <ShareBox />
                </Item>
              </Box>
            </ThemeProvider>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Admin;
