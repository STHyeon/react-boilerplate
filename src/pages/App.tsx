import React from 'react';
import { RouterProvider } from 'react-router-dom';
import styled from '@emotion/styled';

import router from './App.routes';

//
//
//

const StyledAppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  min-height: var(--app-height);
`;

//
//
//

const App: React.FC = () => {
  const approuter = React.useMemo(() => router(), []);

  //
  //
  //

  return (
    <StyledAppContainer>
      <RouterProvider router={approuter} />
    </StyledAppContainer>
  );
};
export default App;
