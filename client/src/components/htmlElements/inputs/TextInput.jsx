import "./textInput.css";
import { TextField } from "@mui/material";

const TextInput = (props) => {
  let { label, defaultValue, onChange, name, variant, placeholder, disabled } =
    props;

  return (
    <>
      <TextField
        id="textInput"
        sx={{ my: 2 }}
        label={label}
        defaultValue={defaultValue}
        onChange={onChange}
        name={name}
        variant={variant}
        placeholder={placeholder}
        disabled={disabled}
      />
    </>
  );
};

export default TextInput;
