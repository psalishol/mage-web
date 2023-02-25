import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Pressable,
} from 'react-native';
import Counter from './src/components/Counter';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

const CounterComp = () => {
  return (
    <View>
      <Text style={styles.title}>Hello from {'\n'}React Native Web!</Text>
      <TouchableOpacity
        // onPress={() => setCount(count + 1)}
        style={styles.button}>
        <Text>Click me!</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  const {height, width} = Dimensions.get('screen');
  console.log('height', height, 'width', width);

  const tranlateX = useSharedValue(0);

  // const style = useAnimatedStyle(() => {}, []);

  // return (
  //   <View>
  //     <ResizerView initialWidth={400} />
  //   </View>
  // );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello from {'\n'}React Native Web!</Text>
      <TouchableOpacity
        // onPress={() => setCount(count + 1)}
        style={styles.button}>
        <Text>Click me!</Text>
      </TouchableOpacity>
    </View>
  );
};

interface ResizerProps {
  initialWidth: number;
  renderContent?: () => JSX.Element;
}

const ResizerView: React.FunctionComponent<ResizerProps> = ({
  initialWidth,
  renderContent,
}) => {
  const width = useSharedValue(initialWidth);

  const gesture = Gesture.Pan()
    .onUpdate(e => {
      console.log(e.translationX);
      width.value = width.value + e.translationX;
    })
    .onEnd(() => {});

  const style = useAnimatedStyle(() => {
    return {
      width: width.value,
    };
  }, []);

  return (
    <Animated.View
      style={[
        {
          // width: width.value,
          height: 500,
          // flex: 1,
          flexDirection: 'row',
          backgroundColor: 'red',
        },
        style,
      ]}>
      <View style={{flex: 1}}>{renderContent && renderContent()}</View>
      <GestureDetector gesture={gesture}>
        <Pressable
          style={{
            backgroundColor: 'green',
            width: 1,
            height: 500,
            cursor: 'col-resize',
          }}
          onHoverIn={() => {}}
          onHoverOut={() => {}}
        />
      </GestureDetector>
    </Animated.View>
  );
};

const AnimatedText = Animated.createAnimatedComponent(Text);

interface Props {
  dimension: number;
}

const TranlatableText: React.FC<Props> = ({dimension}) => {
  const progress = useSharedValue(140);

  useEffect(() => {
    progress.value = withSpring(0, {damping: 300});
  }, [progress]);

  const tranlateStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: progress.value}],
    };
  }, []);

  const gesture = Gesture.Pan()
    .onStart(() => {})
    .onUpdate(e => {
      progress.value = e.translationY;
    })
    .onEnd(() => {});

  return (
    <GestureDetector gesture={gesture}>
      <Pressable style={{cursor: 'col-resize'}}>
        <AnimatedText
          // accessibilityRole={'adjustable'}
          accessibilityRole={'button'}
          style={[tranlateStyle, {}]}>
          {dimension}
        </AnimatedText>
      </Pressable>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C3E8BD',
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#ADBDFF',
    padding: 5,
    marginVertical: 20,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 40,
  },
});

export default App;
