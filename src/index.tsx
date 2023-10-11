import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './pages/App';
import AppWrapper from './pages/AppWrapper';

//
//
//

const rootEl = document.getElementById('root') ?? document.body;
const root = createRoot(rootEl);

//
//
//

root.render(
  <React.StrictMode>
    <React.Suspense fallback={null}>
      <AppWrapper>
        <App />
      </AppWrapper>
    </React.Suspense>
  </React.StrictMode>
);
