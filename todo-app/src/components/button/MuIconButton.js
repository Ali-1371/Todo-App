import IconButton from '@mui/material/IconButton';

const MuIconButton = (props) => {
  const {
    disabled,
    className,
    children,
    onClick = () => {},
    ...otherProps
  } = props;

  return (
    <IconButton
      disabled={disabled}
      className={className}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </IconButton>
  );
};

export default MuIconButton;
