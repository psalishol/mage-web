import {cloud, cloudLight} from '../../assets';
import {useAppMode} from '../../hooks';
import {Image} from '../atom';
import React from 'react';

const Cloud: React.FunctionComponent = () => {
  const {isLight} = useAppMode();
  return (
    <Image
      position="absolute"
      right={0}
      top={0}
      height={720}
      width={1300}
      source={{uri: isLight ? cloudLight : cloud}}
    />
  );
};

export default Cloud;
