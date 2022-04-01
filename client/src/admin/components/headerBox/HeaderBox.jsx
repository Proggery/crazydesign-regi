import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import {
  loadGetHeader,
  loadCreateHeader,
  loadUpdateHeader,
} from "../../../redux/reducers/header/thunks";
import TextInput from "../../../components/htmlElements/inputs/TextInput";
import SendButton from "../../../components/htmlElements/buttons/SendButton";
import { showDefValue } from "../../../components/htmlElements/inputs/properties";

const HeaderBox = () => {
  const dispatch = useDispatch();
  const { getHeader, errorMessage } = useSelector((state) => state.header);

  const [data, setData] = useState({
    title: "",
    subTitle: "",
  });
  const [inputChange, setInputChange] = useState(true);
  const [error, setError] = useState("");

  const { title, subTitle } = data;

  useEffect(() => {
    dispatch(loadGetHeader());
  }, [dispatch]);

  useEffect(() => {
    if (getHeader) {
      if (getHeader[0]) {
        setInputChange(false);

        setData({
          ...data,
          title: getHeader[0].title,
          subTitle: getHeader[0].sub_title,
        });
      }
      setError(errorMessage);
    } else {
      setInputChange(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getHeader]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(loadCreateHeader(data));
    dispatch(loadGetHeader());
  };

  const handleUpdate = (e, id) => {
    e.preventDefault();
    dispatch(loadUpdateHeader(data, id));
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
    value: "Létrehoz",
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
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
      className="configBox"
    >
      <div className="configBox__header">
        <h2>Fejléc beállítás</h2>
      </div>
      {error}
      {inputChange ? (
        <div className="configBox__content">
          <TextInput {...titleInputProps} />
          <TextInput {...subTitleInputProps} />
          <SendButton {...submitButtonProps} />
        </div>
      ) : (
        getHeader &&
        getHeader.map((item, key) => (
          <div className="configBox__content" key={key}>
            <TextInput defaultValue={title} {...titleInputProps} />

            <TextInput
              showDefValue={showDefValue}
              defaultValue={subTitle}
              {...subTitleInputProps}
            />
            <SendButton {...updateButtonProps} />
          </div>
        ))
      )}
    </Box>
  );
};

export default HeaderBox;
