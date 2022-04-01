const socialCreatePathProps = {
  label: "Útvonal (URL)",
  name: "socialPath",
  defaultValue: "",
  variant: "standard",
  placeholder: "pl.: https://facebook.com/",
};

const socialCreateIconProps = {
  label: "Class megadása",
  name: "socialClass",
  defaultValue: "",
  variant: "standard",
  placeholder: "pl.: fab fa-facebook-f",
};

const socialUpdatePathProps = {
  label: "Útvonal (URL)",
  name: "socialPath",
  variant: "standard",
  placeholder: "pl.: https://facebook.com/",
};

const socialUpdateIconProps = {
  label: "Class (stílus osztály)",
  name: "socialClass",
  variant: "standard",
  placeholder: "pl.: fab fa-facebook-f",
};

const submitButtonProps = {
  value: "Létrehoz",
  variant: "contained",
};

export {
  socialCreatePathProps,
  socialCreateIconProps,
  socialUpdatePathProps,
  socialUpdateIconProps,
  submitButtonProps
};
