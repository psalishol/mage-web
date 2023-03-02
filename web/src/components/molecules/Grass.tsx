import {grass, grassDark} from '../../assets';
import {useAppMode} from '../../hooks';
import {Image} from '../atom';
import React from 'react';

const Grass: React.FunctionComponent = () => {
  const {isLight} = useAppMode();
  return (
    <Image
      position={'absolute'}
      left={0}
      right={0}
      bottom={0}
      height={100}
      resizeMethod="scale"
      resizeMode="contain"
      source={{uri: isLight ? grass : grassDark}}
    />
  );
};

export default Grass;
