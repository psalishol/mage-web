import {MotiView} from 'moti';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '../components/atom';
import {ScreenBackground} from '../components/template';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import {useAnimateQuoteSection, useAppMode} from '../hooks';

const QuoteSection: React.FunctionComponent = () => {
  const {animate} = useAnimateQuoteSection();
  const quote = 'Behind Every great product are great team';
  const {isLight} = useAppMode();
  return (
    <ScreenBackground useBackground={false}>
      <View style={styles.container}>
        <MotiView
          transition={{damping: 300, delay: animate ? 0 : 100}}
          from={{opacity: 0, translateY: 100}}
          animate={{opacity: animate ? 1 : 0, translateY: animate ? 0 : 100}}>
          <Text variant={'default'}> A wise man once said </Text>
        </MotiView>

        <MotiView
          transition={{damping: 300, delay: animate ? 100 : 0}}
          from={{opacity: 0, translateY: 100}}
          animate={{opacity: animate ? 1 : 0, translateY: animate ? 0 : 100}}
          style={styles.quotationContainer}>
          <View style={styles.firstQuotation}>
            <Entypo
              name="quote"
              size={14}
              color={isLight ? '#000' : '#898989'}
            />
          </View>

          <Text
            color="foregroundColor"
            variant={'default'}
            style={styles.quote}>
            {quote}
          </Text>

          <View style={styles.secondQuotation}>
            <Entypo
              name="quote"
              size={14}
              color={isLight ? '#000' : '#898989'}
            />
          </View>
        </MotiView>
      </View>
    </ScreenBackground>
  );
};

export default QuoteSection;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  quote: {
    marginBottom: 0,
    marginTop: 30,
    marginHorizontal: 20,
  },
  firstQuotation: {transform: [{rotate: '180deg'}], marginBottom: 40},
  secondQuotation: {marginTop: 50},
  quotationContainer: {flexDirection: 'row', marginTop: 50},
  preQuoteText: {color: '#898989'},
});
