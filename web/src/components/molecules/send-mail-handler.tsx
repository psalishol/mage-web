import {MotiView} from 'moti';
import {useReducer, useCallback} from 'react';
import {Pressable, Text} from '../atom';
import React from 'react';
import {useAppMode} from '../../hooks';

const SendMeMailHandler: React.FunctionComponent = () => {
  const [hovering, setHovering] = useReducer(prev => !prev, false);
  const handlePress = useCallback(() => {
    console.log('opening mail');
  }, []);

  const {isLight} = useAppMode();
  const backgroundColor = isLight ? '#E2E2E2' : '#222222';

  return (
    <Pressable
      ml="l"
      onPress={handlePress}
      onHoverIn={setHovering}
      onHoverOut={setHovering}
      height={35}
      justifyContent={'center'}
      alignItems={'center'}
      px={{phone: 's', largeDevice: 'l'}}
      borderRadius={'s'}
      style={{backgroundColor}}>
      <MotiView
        transition={{damping: 300}}
        from={{scale: 1}}
        animate={{scale: hovering ? 1.1 : 1}}>
        <Text
          fontWeight={'400'}
          fontSize={{phone: 10, largeDevice: 12}}
          color="foregroundColor"
          variant="default">
          Send me mail
        </Text>
      </MotiView>
    </Pressable>
  );
};

export default SendMeMailHandler;
