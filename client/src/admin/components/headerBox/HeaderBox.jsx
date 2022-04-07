import React, { useEffect, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  loadGetData,
  loadCreateData,
  loadUpdateData,
} from "../../../redux/header/reducers/thunks";
import {
  titleProps,
  subTitleProps,
  submitBtnProps,
  updateBtnProps,
} from "./properties";

const HeaderBox = () => {
  const dispatch = useDispatch();
  const { getData, message } = useSelector((state) => state.header);

  const [data, setData] = useState({
    title: "",
    subTitle: "",
  });
  const [resMessage, setResMessage] = useState({});
  const { title, subTitle } = data;

  useEffect(() => {
    dispatch(loadGetData());
  }, [dispatch]);

  useEffect(() => {
    if (getData) {
      setData({
        ...data,
        title: getData.title,
        subTitle: getData.sub_title,
      });
    }
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getData]);

  useEffect(() => {
    setResMessage(message);
  }, [message]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(loadCreateData(data));
    dispatch(loadGetData());
  };

  const handleUpdate = (id) => {
    dispatch(loadUpdateData(data, id));
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

      {resMessage && resMessage ? (
        <div className="configBox__message">
          {resMessage.error_msg || resMessage.success_msg}
        </div>
      ) : (
        <div className="configBox__message"></div>
      )}

      {!getData ? (
        <div className="configBox__content">
          <TextField value={title} onChange={handleChange} {...titleProps} />
          <TextField
            value={subTitle}
            onChange={handleChange}
            {...subTitleProps}
          />
          <Button onClick={handleSubmit} {...submitBtnProps}>
            {submitBtnProps.value}
          </Button>
        </div>
      ) : (
        <div className="configBox__content">
          <TextField onChange={handleChange} value={title} {...titleProps} />
          <TextField
            onChange={handleChange}
            value={subTitle}
            {...subTitleProps}
          />
          <Button onClick={() => handleUpdate(getData.id)} {...updateBtnProps}>
            {updateBtnProps.value}
          </Button>
        </div>
      )}
    </Box>
  );
};

export default HeaderBox;
