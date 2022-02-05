import Container from '@mui/material/Container';
import Header from './Header';

const Layout = (props) => {
  return (
    <div className='layout'>
      <Header />
      <main>
        <Container maxWidth='sm'>{props.children}</Container>
      </main>
    </div>
  );
};

export default Layout;
