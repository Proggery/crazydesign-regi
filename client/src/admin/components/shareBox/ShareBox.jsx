import React, { useEffect, useState } from "react";
import "./shareBox.css";
import { Edit, Delete, Check } from "@mui/icons-material";
import { Popover, Typography, Box, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  loadGetData,
  loadCreateData,
  loadUpdateData,
  loadDeleteData,
} from "../../../redux/social/reducers/thunks";
import { pathProps, classProps, submitBtnProps } from "./properties";

const HeaderBox = () => {
  const dispatch = useDispatch();
  const { getData, message } = useSelector((state) => state.social);

  const [data, setData] = useState({
    socialPath: "",
    socialClass: "",
  });
  const [updateData, setUpdateData] = useState({});
  const [resMessage, setResMessage] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);

  const { socialPath, socialClass } = data;

  useEffect(() => {
    dispatch(loadGetData());
  }, [dispatch]);

  useEffect(() => {
    setData({
      ...data,
      getData,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setResMessage(message);
  }, [message]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdateData({ ...updateData, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(loadCreateData(data));
    setData({ ...data, socialPath: "", socialClass: "" });
  };

  const handleUpdate = (id) => {
    dispatch(loadUpdateData(updateData, id));
    dispatch(loadGetData());
  };

  const handleDelete = (id) => {
    dispatch(loadDeleteData(id));
  };

  // POPUP (buborék) ablak
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box
      id="share__box"
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
      className="configBox"
    >
      <div className="configBox__header">
        <h2>Social média beállítás</h2>
      </div>

      {resMessage && resMessage ? (
        <div className="configBox__message">
          {resMessage.error_msg || resMessage.success_msg}
        </div>
      ) : (
        <div className="configBox__message"></div>
      )}

      {getData && getData.length < 5 ? (
        <Box className="configBox__content">
          <TextField
            value={socialPath}
            onChange={handleChange}
            {...pathProps}
          />
          <TextField
            value={socialClass}
            onChange={handleChange}
            {...classProps}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="submit__button"
          >
            <Check onClick={handleSubmit} {...submitBtnProps} />
          </Box>
        </Box>
      ) : (
        ""
      )}

      {getData &&
        getData.map((item) => (
          <Box key={item.id} className="configBox__content">
            <TextField
              onChange={handleUpdateChange}
              value={item.path}
              {...pathProps}
            />
            <div
              aria-owns={open ? "mouse-over-popover" : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            >
              <TextField
                onChange={handleUpdateChange}
                value={item.class_name}
                {...classProps}
                disabled
              />
            </div>
            <Popover
              id="mouse-over-popover"
              sx={{
                pointerEvents: "none",
              }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              onClose={handlePopoverClose}
              disableRestoreFocus
            >
              <Typography sx={{ p: 1 }}>
                A szerkesztés csak fejlesztőknek engedélyezett
              </Typography>
            </Popover>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Edit
                className="update__button"
                onClick={() => handleUpdate(item.id)}
              ></Edit>
              <Delete
                className="delete__button"
                onClick={() => handleDelete(item.id)}
              ></Delete>
            </Box>
          </Box>
        ))}
    </Box>
  );
};

export default HeaderBox;
