import { createBrowserRouter, Outlet } from 'react-router-dom';
import Layout from '../components';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [{ path: '/login', element: <h1>Login Page</h1> }],
  },
]);

export default router;
