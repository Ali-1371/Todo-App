import Layout from './containers/layout/Layout';
import AppRoutes from './AppRoutes';
import Notification from './containers/notification/Notification';

function App() {
  return (
    <>
      <Notification />
      <Layout>
        <AppRoutes />
      </Layout>
    </>
  );
}

export default App;
