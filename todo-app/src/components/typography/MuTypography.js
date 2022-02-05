import Typography from '@mui/material/Typography';

const MuTypography = (props) => {
  const {
    className,
    variant,
    component,
    gutterBottom,
    children,
    ...otherProps
  } = props;
  return (
    <Typography
      className={className}
      variant={variant}
      component={component}
      gutterBottom={gutterBottom}
      {...otherProps}
    >
      {children}
    </Typography>
  );
};

export default MuTypography;
