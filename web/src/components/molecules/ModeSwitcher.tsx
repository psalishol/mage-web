import {useAppMode} from '../../hooks';
import {Pressable} from '../atom';
import React from 'react';

const ModeSwitcher: React.FunctionComponent = () => {
  const {switchMode} = useAppMode();
  return (
    <Pressable
      onPress={switchMode}
      position="absolute"
      right={40}
      top={180}
      height={120}
      width={120}
    />
  );
};

export default ModeSwitcher;
