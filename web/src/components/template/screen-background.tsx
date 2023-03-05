import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import React from 'react';
import {theme, lightTheme} from '../../style/Theme';
import {useAppMode} from '../../hooks';
import {backgroundPicture} from '../../assets';

import {Dimensions} from 'react-native';
import {Image} from '../atom';

const {height: screenHeight} = Dimensions.get('window');

interface Props {
  children: React.ReactNode;
  useBackground?: boolean;
  height?: number;
}

const ScreenBackground: React.FunctionComponent<Props> = ({
  children,
  useBackground = true,
  height,
}) => {
  const {isLight} = useAppMode();
  const progress = useDerivedValue(() => {
    return withTiming(isLight ? 1 : 0, {duration: 500});
  });

  const backgroundColor = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        [theme.colors.backgroundColor, lightTheme.colors.backgroundColor],
      ),
    };
  });

  return (
    <Animated.View
      style={[backgroundColor, {height: height ? height : screenHeight}]}>
      {useBackground && (
        <Image
          top={0}
          right={0}
          left={0}
          opacity={0.06}
          position="absolute"
          height="100%"
          width="100%"
          flex={1}
          source={{
            uri: isLight ? undefined : backgroundPicture,
          }}
        />
      )}
      {children}
    </Animated.View>
  );
};

export default ScreenBackground;
