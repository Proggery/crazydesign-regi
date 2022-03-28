import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import HeaderBox from "./components/headerBox/HeaderBox";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  lineHeight: "60px",
  // padding: "10px","10px",
}));

const lightTheme = createTheme({ palette: { mode: "light" } });

const Admin = () => {
  return (
    <Grid container spacing={2}>
      {[lightTheme].map((theme, index) => (
        <Grid item key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                display: "grid",
                columnGap: 3,
                rowGap: 1,
                gridTemplateColumns: "repeat(4, 1fr)",
              }}
            >
              <Item sx={{ m: "2rem", p: "30px" }} key={3} elevation={3}>
                <HeaderBox />
              </Item>
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
  );
};

export default Admin;
