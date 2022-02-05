import TextField from '@mui/material/TextField';

const MuTextField = (props) => {
  const {
    value,
    label,
    defaultValue,
    helperText,
    id,
    variant,
    disabled,
    className,
    onChange = () => {},
    ...otherProps
  } = props;

  return (
    <TextField
      value={value}
      label={label}
      defaultValue={defaultValue}
      helperText={helperText}
      id={id}
      variant={variant}
      disabled={disabled}
      className={`text-field ${className}`}
      onChange={onChange}
      {...otherProps}
    />
  );
};

export default MuTextField;
