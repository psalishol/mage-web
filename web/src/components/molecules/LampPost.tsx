import {lampPost, lampPostLight} from '../../assets';
import {useAppMode} from '../../hooks';
import {Image} from '../atom';
import React from 'react';

const LampPost: React.FunctionComponent = () => {
  const {isLight} = useAppMode();
  return (
    <Image
      height={720}
      width={150}
      position="absolute"
      right={0}
      bottom={-40}
      resizeMode="cover"
      source={{uri: isLight ? lampPostLight : lampPost}}
    />
  );
};

export default LampPost;
