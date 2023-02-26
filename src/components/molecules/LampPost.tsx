import {lampPost} from '../../assets';
import {Image} from '../atom';
import React from 'react';

const LampPost: React.FunctionComponent = () => {
  return (
    <Image
      height={720}
      width={150}
      position="absolute"
      right={0}
      bottom={0}
      resizeMode="cover"
      source={{uri: lampPost}}
    />
  );
};

export default LampPost;
