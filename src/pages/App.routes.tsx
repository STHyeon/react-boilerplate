import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

//
//
//

const AsyncMain = React.lazy(() => import('./main/Main'));

//
//
//

const router = createBrowserRouter([
  // `/main`
  {
    path: '/',
    element: <AsyncMain />,
    //   children: main.routes
  },
]);

export default () => router;
