import Button from '@mui/material/Button';

const MuButton = (props) => {
  const {
    startIcon,
    endIcon,
    variant,
    color,
    size,
    className,
    onclick = () => {},
    children,
    ...otherProps
  } = props;

  return (
    <Button
      variant={variant}
      startIcon={startIcon}
      endIcon={endIcon}
      color={color}
      className={className}
      size={size}
      onclick={onclick}
      {...otherProps}
    >
      {children}
    </Button>
  );
};

export default MuButton;
