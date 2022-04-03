import React, { useEffect, useState } from "react";
import "./shareBox.css";
import { Edit, Delete, Check } from "@mui/icons-material";
import { Popover, Typography, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  loadGetSocial,
  loadCreateSocial,
  loadUpdateSocial,
  loadDeleteSocial,
} from "../../../redux/social/reducers/thunks";
import TextInput from "../../../components/htmlElements/inputs/TextInput";
import {
  socialCreatePathProps,
  socialCreateClassProps,
  socialUpdatePathProps,
  socialUpdateIconProps,
  submitButtonProps,
} from "./properties";
// import { inputEmptyError } from "../../../components/htmlElements/inputs/properties";

const HeaderBox = () => {
  const dispatch = useDispatch();
  const { getSocial, message } = useSelector((state) => state.social);

  const [data, setData] = useState({});
  const [updateData, setUpdateData] = useState({});

  const [resMessage, setResMessage] = useState({});

  useEffect(() => {
    dispatch(loadGetSocial());
  }, [dispatch]);

  useEffect(() => {
    setData({
      ...data,
      getSocial,
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
    dispatch(loadCreateSocial(data));
    setData({ ...data, socialPath: "" });

    document.getElementById("socialCreatePathProps").value = "";
    document.getElementById("socialCreateClassProps").value = "";
  };

  const handleUpdate = (id) => {
    dispatch(loadUpdateSocial(updateData, id));
    dispatch(loadGetSocial());
  };

  const handleDelete = (id) => {
    dispatch(loadDeleteSocial(id));
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  console.log(data.socialPath);

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

      {resMessage && resMessage.error_message}
      {resMessage && resMessage.success_message}

      <Box
        // sx={
        //   getSocial && getSocial.length === 5
        //     ? { display: "none" }
        //     : { display: "unset" }
        // }
        className="configBox__content"
      >
        <TextInput
          // defaultValue=""
          onChange={handleChange}
          {...socialCreatePathProps}
        />
        <TextInput
          // defaultValue=""
          onChange={handleChange}
          {...socialCreateClassProps}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="submit__button"
        >
          <Check onClick={handleSubmit} {...submitButtonProps} />
        </Box>
      </Box>

      {getSocial &&
        getSocial.map((item) => (
          <Box key={item.id} className="configBox__content">
            <TextInput
              onChange={handleUpdateChange}
              defaultValue={item.path}
              {...socialUpdatePathProps}
            />
            <div
              aria-owns={open ? "mouse-over-popover" : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            >
              <TextInput
                onChange={handleUpdateChange}
                defaultValue={item.class_name}
                {...socialUpdateIconProps}
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
              >
                T
              </Delete>
            </Box>
          </Box>
        ))}
    </Box>
  );
};

export default HeaderBox;
