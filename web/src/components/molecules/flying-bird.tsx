import React, {useEffect, useRef} from 'react';
import {Box} from '../atom';
import Lottie from 'lottie-react-native';
import {bird} from '../../assets';
import {useAppMode} from '../../hooks';

const FlyingBird: React.FunctionComponent = () => {
  const ref = useRef<Lottie>(null);
  const {isLight} = useAppMode();

  useEffect(() => ref.current?.play(), []);

  return (
    <Box
      opacity={isLight ? 0.5 : 1}
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}>
      <Lottie speed={15000} loop ref={ref} source={bird} />
    </Box>
  );
};

export default FlyingBird;
