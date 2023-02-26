import {Pressable} from '../atom';
import React from 'react';

const ModeSwitcher: React.FunctionComponent = () => {
  return (
    <Pressable
      position="absolute"
      right={30}
      top={130}
      height={120}
      width={120}
    />
  );
};

export default ModeSwitcher;
