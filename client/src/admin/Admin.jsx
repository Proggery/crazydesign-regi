import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  loadAllData,
  loadCreateData,
  loadUpdateData,
} from "../redux/reducers/datas/thunks";

const Admin = () => {
  const dispatch = useDispatch();
  const { allData } = useSelector((state) => state.data);

  const [data, setData] = useState({
    title: "",
  });

  const [error, setError] = useState("");
  const [inputChange, setInputChange] = useState(false);

  const { title } = data;

  useEffect(() => {
    dispatch(loadAllData());
  }, [dispatch]);

  useEffect(() => {
    if (allData) {
      if (allData[0]) {
        setInputChange(true);
      } else {
        setInputChange(false);
      }
    }
  }, [allData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = () => {
    
    if (!title) {
      setError("Kérlek tölts ki minden mezőt!");
    } else {
      dispatch(loadCreateData(data));
      dispatch(loadAllData());
    }
  };

  const handleEdit = (e, id) => {
    e.preventDefault();

    if (!title) {
      setError("Kérlek tölts ki minden mezőt!");
    } else {
      dispatch(loadUpdateData(data, id));
      dispatch(loadAllData());
    }
  };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      {inputChange ? (
        allData &&
        allData.map((data) => (
          <div key={data.id}>
            <TextField
              id="standard-basic"
              label="Név"
              defaultValue={data.title}
              onChange={handleChange}
              name="title"
              variant="standard"
            />
            <Button onClick={(e) => handleEdit(e, 1)} variant="contained">
              Módosít
            </Button>
          </div>
        ))
      ) : (
        <>
          <TextField
            id="standard-basic"
            label="Név"
            defaultValue=""
            onChange={handleChange}
            name="title"
            variant="standard"
          />
          <Button type="submit" variant="contained">
            Küld
          </Button>
        </>
      )}
    </Box>
  );
};

export default Admin;
