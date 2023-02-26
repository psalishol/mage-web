import {cloud} from '../../assets';
import {Image} from '../atom';
import React from 'react';

const Cloud: React.FunctionComponent = () => {
  return (
    <Image
      position="absolute"
      right={0}
      top={0}
      height={720}
      width={1300}
      source={{uri: cloud}}
    />
  );
};

export default Cloud;
