import {grass} from '../../assets';
import {Image} from '../atom';
import React from 'react';

const Grass: React.FunctionComponent = () => {
  return (
    <Image
      position={'absolute'}
      left={0}
      right={0}
      bottom={0}
      height={100}
      resizeMethod="scale"
      resizeMode="contain"
      source={{uri: grass}}
    />
  );
};

export default Grass;
