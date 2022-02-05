import Card from '@mui/material/Card';

const MuCard = (props) => {
  const { className, children, ...otherProps } = props;
  return (
    <Card className={className} {...otherProps}>
      {children}
    </Card>
  );
};

export default MuCard;
