import {StyleSheet} from 'react-native';
import {Box} from '../atom';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useAppMode} from '../../hooks';

const BottomGradient: React.FunctionComponent = () => {
  const {isLight} = useAppMode();
  return (
    <Box
      flex={1}
      height={70}
      position={'absolute'}
      bottom={0}
      left={0}
      right={0}>
      <LinearGradient
        style={StyleSheet.absoluteFillObject}
        colors={['transparent', !isLight ? '#000000' : '#fff']}
      />
    </Box>
  );
};

export default BottomGradient;
