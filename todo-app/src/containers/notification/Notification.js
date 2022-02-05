import { useSelector } from 'react-redux';
import { MuTypography } from '../../components';
import MuLoading from '../../components/loading/MuLoading';

const Notification = () => {
  const todoReducer = useSelector((state) => state.todoReducer);
  return (
    <>
      {todoReducer.isLoading && <MuLoading />}
      {todoReducer.error && (
        <section className='text-center'>
          <MuTypography className='notification' variant='h4'>
            {todoReducer.error}
          </MuTypography>
        </section>
      )}
    </>
  );
};

export default Notification;
