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
  MovingCloud,
  NextScrollHandler,
  ResumePreviewerHandler,
} from '../components/molecules';

const PortfolioCoverPage: React.FunctionComponent = () => {
  return (
    <ScreenBackground>
      <Cloud />
      <LampPost />
      <PortfolioCoverContent />
      <Grass />
      <BottomGradient />
      <FlyingBird />
      <MovingCloud />
      <ModeSwitcher />
      <Header />
      <NextScrollHandler />
      <ResumePreviewerHandler />
    </ScreenBackground>
  );
};

export default PortfolioCoverPage;
