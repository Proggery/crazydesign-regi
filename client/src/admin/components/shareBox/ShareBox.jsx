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
} from "../../../redux/reducers/social/thunks";
import TextInput from "../../../components/htmlElements/inputs/TextInput";
import {
  socialCreatePathProps,
  socialCreateIconProps,
  socialUpdatePathProps,
  socialUpdateIconProps,
  submitButtonProps,
} from "./properties";
import { inputEmptyError } from "../../../components/htmlElements/inputs/properties";

const HeaderBox = () => {
  const dispatch = useDispatch();
  const { getSocial, error, isFull } = useSelector((state) => state.social);

  const [data, setData] = useState({});
  // const [errorMessage, setErrorMessage] = useState("");
  // const [isFullElements, setIsFullElements] = useState({});

  // const { socialPath, socialClass } = data;

  if (isFull) {
    console.log(isFull);
  }

  useEffect(() => {
    dispatch(loadGetSocial());
  }, [dispatch]);

  useEffect(() => {
    if (getSocial) {
      setData({
        ...data,
        getSocial,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getSocial]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(loadCreateSocial(data));
    setData({ ...data, socialPath: "" });

    dispatch(loadGetSocial());
  };

  const handleUpdate = (e, id) => {
    e.preventDefault();
    dispatch(loadUpdateSocial(data, id));
  };

  const handleDelete = (id) => {
    dispatch(loadDeleteSocial(id));
    dispatch(loadGetSocial());
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

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
      {/* {error} */}
      <div className="configBox__header">
        <h2>Social média beállítás</h2>
      </div>

      <Box
        // sx={
        //   getSocial && getSocial.length === 5
        //     ? { display: "none" }
        //     : { display: "unset" }
        // }
        className="configBox__content"
      >
        <TextInput onChange={handleChange} {...socialCreatePathProps} />
        <TextInput onChange={handleChange} {...socialCreateIconProps} />
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
        getSocial.map((data) => (
          <Box key={data.id} className="configBox__content">
            <TextInput
              onChange={handleChange}
              defaultValue={data.path}
              {...socialUpdatePathProps}
            />
            <div
              aria-owns={open ? "mouse-over-popover" : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            >
              <TextInput
                onChange={handleChange}
                defaultValue={data.class_name}
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
                onClick={(e) => handleUpdate(e, data.id)}
              ></Edit>
              <Delete
                className="delete__button"
                onClick={() => handleDelete(data.id)}
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
