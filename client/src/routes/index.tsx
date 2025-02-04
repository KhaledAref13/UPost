import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div className="text-3xl font-bold underline">Hello world!</div>,
  },
]);

export default router;
