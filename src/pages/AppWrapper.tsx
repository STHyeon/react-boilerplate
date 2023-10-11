import React from 'react';
import { useWindowSize } from 'react-use';

//
//
//

interface AppWrapperProps {
  children: React.ReactNode;
}

//
//
//

const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  const { height: winHeight } = useWindowSize();

  //
  // Set app height to css variable `--app-height`.
  // (usage: `height: var(--app-height)`)
  //
  React.useEffect(
    () =>
      document.documentElement.style.setProperty(
        '--app-height',
        `${winHeight}px`
      ),
    [winHeight]
  );

  //
  //
  //

  return <>{children}</>;
};

export default AppWrapper;
