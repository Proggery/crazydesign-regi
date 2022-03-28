import React, { useEffect, useState } from "react";
import "./admin.css";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import {
loadHeader,
  loadCreateData,
  loadUpdateData,
} from "../redux/reducers/datas/thunks";
import TextInput from "../components/htmlElements/inputs/TextInput";
import SendButton from "../components/htmlElements/buttons/SendButton";

const Admin = () => {
  const dispatch = useDispatch();
  const { allData } = useSelector((state) => state.data);

  const [data, setData] = useState({
    title: "",
    subTitle: "",
  });
  const [error, setError] = useState("");
  const [inputChange, setInputChange] = useState(true);
  const { title, subTitle } = data;

  useEffect(() => {
    dispatch(loadHeader());
  }, [dispatch]);

  useEffect(() => {
    if (allData) {
      if (allData[0]) {
        setInputChange(false);
        setData({
          ...data,
          title: allData[0].title,
          subTitle: allData[0].sub_title,
        });
      } else {
        setInputChange(true);
      }
    }
  }, [allData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = () => {
    if (!title || !subTitle) {
      setError("Kérlek tölts ki minden mezőt!");
    } else {
      dispatch(loadCreateData(data));
      window.location.reload();
    }
    dispatch(loadHeader());
  };

  const handleUpdate = (e, id) => {
    e.preventDefault();
    dispatch(loadUpdateData(data, id));
  };

  const titleInputProps = {
    label: "Név",
    name: "title",
    onChange: handleChange,
    variant: "standard",
  };

  const subTitleInputProps = {
    ...titleInputProps,
    name: "subTitle",
    label: "Alszöveg",
  };
  const submitButtonProps = {
    value: "Küld",
    onClick: handleSubmit,
    variant: "contained",
  };
  const updateButtonProps = {
    value: "Módosít",
    onClick: (e) => handleUpdate(e, 1),
    variant: "contained",
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      {error}
      {inputChange ? (
        <>
          <TextInput {...titleInputProps} />
          <TextInput {...subTitleInputProps} />
          <SendButton {...submitButtonProps} />
        </>
      ) : (
        allData &&
        allData.map((data, key) => (
          <>
            <TextInput key={key} defaultValue={data.title} {...titleInputProps} />
            <TextInput defaultValue={data.sub_title} {...subTitleInputProps} />
            <SendButton {...updateButtonProps} />
          </>
        ))
      )}
    </Box>
  );
};

export default Admin;









// import * as React from 'react';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
//   height: 60,
//   lineHeight: '60px',
// }));

// const darkTheme = createTheme({ palette: { mode: 'dark' } });
// const lightTheme = createTheme({ palette: { mode: 'light' } });

// export default function Elevation() {
//   return (
//     <Grid container spacing={2}>
//       {[lightTheme, darkTheme].map((theme, index) => (
//         <Grid item xs={6} key={index}>
//           <ThemeProvider theme={theme}>
//             <Box
//               sx={{
//                 p: 2,
//                 bgcolor: 'background.default',
//                 display: 'grid',
//                 gridTemplateColumns: { md: '1fr 1fr' },
//                 gap: 2,
//               }}
//             >
//               {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
//                 <Item key={elevation} elevation={elevation}>
//                   {`elevation=${elevation}`}
//                 </Item>
//               ))}
//             </Box>
//           </ThemeProvider>
//         </Grid>
//       ))}
//     </Grid>
//   );
// }
