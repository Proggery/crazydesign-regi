import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import {
  loadGetSocial,
  loadCreateSocial,
  loadUpdateSocial,
  loadDeleteSocial,
} from "../../../redux/reducers/social/thunks";
import TextInput from "../../../components/htmlElements/inputs/TextInput";

const HeaderBox = () => {
  const dispatch = useDispatch();
  const { getSocial } = useSelector((state) => state.social);

  const [data, setData] = useState({});

  const [error, setError] = useState("");
  const { socialPath, socialClass } = data;

  useEffect(() => {
    dispatch(loadGetSocial());
  }, [dispatch]);

  useEffect(() => {
    console.log(data);
    if (getSocial) {
      setData({
        ...data,
        getSocial,
      });
    }
  }, [getSocial]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
console.log(data)
    if (!socialPath && !socialClass) {
      setError("Kérlek tölts ki minden mezőt!");
    } else if (data.getSocial.length >= 5) {
      return setError("Csak 5 hozható létre!");
    } else {
      dispatch(loadCreateSocial(data));
      setData({ ...data, socialPath: "" });
    }
    window.location.reload();
  };

  const handleUpdate = (e, id) => {
    e.preventDefault();
    dispatch(loadUpdateSocial(data, id));
  };

  const handleDelete = (id) => {
    dispatch(loadDeleteSocial(id));
    window.location.reload();
  };

  const socialCreatePathProps = {
    label: "Útvonal (URL)",
    name: "socialPath",
    onChange: handleChange,
    defaultValue: "",
    variant: "standard",
    placeholder: "pl.: https://facebook.com/",
  };

  const socialCreateIconProps = {
    label: "Class megadása",
    name: "socialClass",
    onChange: handleChange,
    defaultValue: "",
    variant: "standard",
    placeholder: "pl.: fab fa-facebook-f",
  };
  
  const socialUpdatePathProps = {
    label: "Útvonal (URL)",
    name: "socialPath",
    onChange: handleChange,
    variant: "standard",
    placeholder: "pl.: https://facebook.com/",
  };
  
  const socialUpdateIconProps = {
    label: "Class megadása",
    name: "socialClass",
    onChange: handleChange,
    variant: "standard",
    placeholder: "pl.: fab fa-facebook-f",
  };

  const submitButtonProps = {
    value: "Létrehoz",
    onClick: handleSubmit,
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
    >
      {error}
      <h2>Social média beállítás</h2>

      <Box
        className="config__box"
        sx={getSocial && getSocial.length === 5 ? { display: "none" } : {display: "unset"}}
      >
        <TextInput {...socialCreatePathProps} />
        <TextInput {...socialCreateIconProps} />

        <button {...submitButtonProps}>L</button>
      </Box>

      {getSocial &&
        getSocial.map((data) => (
          <div className="config__box" key={data.id}>
            <TextInput defaultValue={data.path} {...socialUpdatePathProps} />
            <TextInput defaultValue={data.class_name} {...socialUpdateIconProps} />
            <EditIcon
              className="fa-solid fa-pen-to-square"
              onClick={(e) => handleUpdate(e, data.id)}
            ></EditIcon>
            <DeleteIcon onClick={() => handleDelete(data.id)}>T</DeleteIcon>
          </div>
        ))}
    </Box>
  );
};

export default HeaderBox;
