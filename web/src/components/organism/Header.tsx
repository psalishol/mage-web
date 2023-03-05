import React from 'react';
import {Box} from '../atom';
import {RouterElement} from '../../router';
import {useRTWindowDimension} from '../../hooks';

const Header: React.FunctionComponent = () => {
  const {PHONE_SIZE} = useRTWindowDimension();
  return (
    <Box
      top={PHONE_SIZE ? 0 : '1%'}
      right={0}
      left={!PHONE_SIZE ? 0 : undefined}
      bottom={!PHONE_SIZE ? undefined : 0}
      justifyContent={'center'}
      position={'absolute'}>
      <Box
        flexDirection={PHONE_SIZE ? undefined : 'row'}
        alignSelf={'center'}
        alignItems={'center'}>
        <RouterElement link="/" name="Home" />
        <RouterElement link="/about" name="About" />
        <RouterElement link="/articles" name="Articles" />
      </Box>
    </Box>
  );
};

export default Header;
