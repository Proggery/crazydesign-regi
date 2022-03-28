import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import {
  loadGetHeader,
  loadCreateHeader,
  loadUpdateHeader,
} from "../../../redux/reducers/datas/thunks";
import TextInput from "../../../components/htmlElements/inputs/TextInput";
import SendButton from "../../../components/htmlElements/buttons/SendButton";

const HeaderBox = () => {
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
    dispatch(loadGetHeader());
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
      dispatch(loadCreateHeader(data));
      window.location.reload();
    }
    dispatch(loadGetHeader());
  };

  const handleUpdate = (e, id) => {
    e.preventDefault();
    dispatch(loadUpdateHeader(data, id));
  };

  const titleInputProps = {
    label: "Útvonal (URL)",
    name: "title",
    onChange: handleChange,
    variant: "standard",
    placeholder: "pl.: https://facebook.com/",
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
    >
      {error}
      <h2>Social média beállítás</h2>

      <div className="config__box">
        <TextInput {...titleInputProps} />
        <SendButton {...submitButtonProps} />
      </div>

      {allData &&
        allData.map((data, key) => (
          <div className="config__box" key={key}>
            <TextInput defaultValue={data.title} {...titleInputProps} />
            <SendButton {...updateButtonProps} />
          </div>
        ))}
    </Box>
  );
};

export default HeaderBox;