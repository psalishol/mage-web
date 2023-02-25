import React, {useState} from 'react';
import {Dimensions, Image, ScrollView, Text, View} from 'react-native';
import {Header} from '../src/components/organism';
import {ScreenBackground} from '../src/components/template';
import Animated from 'react-native-reanimated';
import {MotiText, MotiView} from 'moti';

const {height} = Dimensions.get('screen');

const WebApp = () => {
  Dimensions.addEventListener('change', ({window, screen}) => {
    const windowHeight = window.height;
    const windowWidth = window.width;

    console.log(windowHeight, windowWidth);
  });

  return (
    <ScrollView
      scrollEventThrottle={16}
      onScroll={e => {
        console.log(e.nativeEvent.contentOffset.y);
      }}
      showsVerticalScrollIndicator={false}>
      <FirstContent />
      <Content bg="#292929" />
    </ScrollView>
  );
};

const FirstContent = () => {
  return (
    <ScreenBackground>
      <Header />
      <PortfolioCover />
    </ScreenBackground>
  );
};

export default WebApp;

const PortfolioCover: React.FunctionComponent = () => {
  return (
    <Animated.View
      style={{flex: 1, justifyContent: 'center', paddingHorizontal: 20}}>
      <MotiText
        transition={{damping: 300}}
        from={{opacity: 0, translateX: -100}}
        animate={{opacity: 1, translateX: 0}}
        style={{fontSize: 12, fontWeight: '300', color: '#898989'}}>
        Psalishol Samuel - Mobile Developer
      </MotiText>
      <MotiText
        transition={{damping: 300, delay: 100}}
        from={{opacity: 0, translateX: -100}}
        animate={{opacity: 1, translateX: 0}}
        style={{fontSize: 40, fontWeight: '500', color: '#898989'}}>
        Welcome to the world of magic
      </MotiText>
      {/* <Image
        resizeMethod="scale"
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          // backgroundColor: 'red',
          height: 400,
          width: 400,
        }}
        // source={require('../src/assets/mypicture.png')}
        source={{uri: 'https://avatars.githubusercontent.com/u/85138073?v=4'}}
      /> */}
    </Animated.View>
  );
};

interface Props {
  bg: string;
}

const Content: React.FC<Props> = ({bg}) => {
  return <View style={{height, backgroundColor: bg}}></View>;
};
