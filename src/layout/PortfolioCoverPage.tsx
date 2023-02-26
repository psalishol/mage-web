import {Header, PortfolioCoverContent} from '../components/organism';
import {ScreenBackground} from '../components/template';
import React from 'react';

import {
  BottomGradient,
  Cloud,
  FlyingBird,
  Grass,
  LampPost,
  ModeSwitcher,
} from '../components/molecules';

interface Props {
  children?: React.ReactNode;
}

const PortfolioCoverPage: React.FunctionComponent<Props> = ({children}) => {
  return (
    <ScreenBackground>
      <Cloud />
      <Header />
      <LampPost />

      <PortfolioCoverContent />
      <Grass />
      <BottomGradient />
      {children && children}
      <FlyingBird />
      <ModeSwitcher />
    </ScreenBackground>
  );
};

export default PortfolioCoverPage;
