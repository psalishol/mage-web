import {useAtomValue} from 'jotai';
import React, {useCallback} from 'react';
// import {Text, Image} from 'react-native';
import Animated, {
  useDerivedValue,
  withSpring,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {arrow} from '../../assets';
import {scrollRefAtom, verticalScrollInsetAtom} from '../../state';
import {Pressable, Image, Text} from '../atom';
import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const NextScrollHandler: React.FunctionComponent = () => {
  const scrollRef = useAtomValue(scrollRefAtom);
  const scrollInset = useAtomValue(verticalScrollInsetAtom);

  const progress = useDerivedValue(() => {
    return withSpring(scrollInset > 650 ? 0 : 0.6, {damping: 500});
  }, [scrollInset]);

  const rStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
    };
  }, []);

  const handlePress = useCallback(() => {
    scrollRef?.current?.scrollTo({y: height});
  }, [scrollRef]);

  return (
    <AnimatedPressable
      onPress={handlePress}
      position={'absolute'}
      bottom={10}
      right={20}
      style={rStyle}>
      <Text
        variant="default"
        textAlign={'center'}
        color={'primaryForegroundColor'}
        fontWeight={'100'}>
        Next
      </Text>
      <Image
        height={30}
        width={30}
        mt="l"
        resizeMode="contain"
        source={{uri: arrow}}
      />
    </AnimatedPressable>
  );
};

export default NextScrollHandler;
