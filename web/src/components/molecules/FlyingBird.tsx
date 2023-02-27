import React, {useEffect, useRef} from 'react';
import {Box} from '../atom';
import Lottie from 'lottie-react-native';
import {bird} from '../../assets';

const FlyingBird: React.FunctionComponent = () => {
  const ref = useRef<Lottie>(null);

  useEffect(() => ref.current?.play(), []);

  return (
    <Box position="absolute" top={0} left={0} right={0} bottom={0}>
      <Lottie loop ref={ref} source={bird} />
    </Box>
  );
};

export default FlyingBird;
