import {useAtomValue} from 'jotai';
import {MotiView} from 'moti';
import React, {useCallback} from 'react';
import {verticalScrollInsetAtom, scrollRefAtom} from '../../state';
import {Pressable} from '../atom';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import {StyleSheet} from 'react-native';

const ScrollBackUpHandler: React.FunctionComponent = () => {
  const scrollInset = useAtomValue(verticalScrollInsetAtom);
  const show = scrollInset > 600;

  const scrollRef = useAtomValue(scrollRefAtom);

  const handlePress = useCallback(() => {
    scrollRef?.current?.scrollTo({y: 0});
  }, [scrollRef]);

  return (
    <>
      {show && (
        <Pressable
          //   style={[rStyle, {backgroundColor}]}
          onPress={handlePress}
          bottom={20}
          right={20}
          position="absolute">
          <MotiView
            from={{opacity: 0, scale: 0.3}}
            animate={{opacity: 1, scale: 1}}
            transition={{type: 'timing', duration: 500}}
            style={styles.container}>
            <Entypo name="chevron-up" color="white" />
          </MotiView>
        </Pressable>
      )}
    </>
  );
};

export default ScrollBackUpHandler;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D0D0D',
    height: 30,
    width: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
