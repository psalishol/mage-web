import React, {useCallback, useEffect, useRef} from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
// import {ScreenBackground} from '../src/components/template';
import {useAtom, useAtomValue, useSetAtom} from 'jotai';
// import {currentThemeAtom, verticalScrollInsetAtom} from '../src/state';
import {PortalProvider} from '@gorhom/portal';
// import {AboutMeSection, PortfolioCoverPage, QuoteSection} from '../src/layout';
// import {useAppMode, useRTWindowDimension} from '../src/hooks';
import {MotiView} from 'moti';
import Animated, {
  useDerivedValue,
  withSpring,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {ThemeProvider} from '@shopify/restyle';
import {arrow} from './src/assets';
import {ScreenBackground} from './src/components/template';
import {useAppMode} from './src/hooks';
import {PortfolioCoverPage, QuoteSection, AboutMeSection} from './src/layout';
import {verticalScrollInsetAtom} from './src/state';
import {lightTheme, theme} from './src/style/Theme';

const {height} = Dimensions.get('screen');

const WebApp = () => {
  return <Entry />;
};

const Entry: React.FunctionComponent = () => {
  const {isLight} = useAppMode();

  const baseTheme = isLight ? lightTheme : theme;

  const setInset = useSetAtom(verticalScrollInsetAtom);

  const scrollRef = useRef<ScrollView>(null);

  const handleNextPress = useCallback(() => {
    scrollRef.current?.scrollTo({y: height});
  }, []);

  return (
    <ThemeProvider theme={baseTheme}>
      <PortalProvider>
        <ScrollView
          ref={scrollRef}
          scrollEventThrottle={16}
          onScroll={e => {
            setInset(e.nativeEvent.contentOffset.y);
          }}
          showsVerticalScrollIndicator={true}>
          <PortfolioCoverPage>
            <Scroll onPress={handleNextPress} />
          </PortfolioCoverPage>
          <QuoteSection />
          <AboutMeSection />
          <Projects />
          <ContactMeSection />
        </ScrollView>
      </PortalProvider>
    </ThemeProvider>
  );
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface ScrollNextProps {
  onPress: () => void;
}

const Scroll: React.FunctionComponent<ScrollNextProps> = ({onPress}) => {
  const scrollInset = useAtomValue(verticalScrollInsetAtom);

  console.log('this is the scroll inset', scrollInset);

  const hide = scrollInset > 650;

  const progress = useDerivedValue(() => {
    return withSpring(scrollInset > 650 ? 0 : 0.6, {damping: 500});
  }, [scrollInset]);

  const rStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
    };
  }, []);

  return (
    <AnimatedPressable
      onPress={onPress}
      style={[
        {
          // opacity: 0.6,
          position: 'absolute',
          bottom: 10,
          right: 20,
        },
        rStyle,
      ]}>
      <MotiView
        style={{justifyContent: 'center', alignItems: 'center'}}
        from={{translateY: 5}}
        animate={{translateY: 0}}
        transition={{damping: 500, repeat: 2}}>
        <Text style={{color: 'white', fontWeight: '100'}}>Next</Text>
        <Image
          resizeMode="contain"
          style={{height: 30, width: 50, marginTop: 5}}
          source={{uri: arrow}}
        />
      </MotiView>
    </AnimatedPressable>
  );
};

const ContactMeSection = () => {
  return (
    <ScreenBackground>
      <Text style={{color: '#898989'}}>
        Interested in having me on your team?.. Contact me 🙂
      </Text>
    </ScreenBackground>
  );
};

export default WebApp;

interface Props {
  bg: string;
}

const Projects = () => {
  return (
    <ScreenBackground>
      <View style={{margin: 20}}>
        <Text style={{color: '#898989'}}>Projects</Text>
      </View>
      <View
        style={{
          height: 600,
          marginHorizontal: 100,
          backgroundColor: 'red',
          marginTop: 50,
          shadowColor: 'rgba(40,40,40)',
          borderRadius: 10,
        }}></View>
    </ScreenBackground>
  );
};
