import {Image} from 'react-native';
import Animated from 'react-native-reanimated';
import React from 'react';
import styles from './ScreenBackground.style';

interface Props {
  children: React.ReactNode;
  useBackground?: boolean;
}

const ScreenBackground: React.FunctionComponent<Props> = ({
  children,
  useBackground = true,
}) => {
  return (
    <Animated.View style={[styles.container]}>
      {useBackground && (
        <Image
          style={styles.image}
          source={{
            uri: 'https://images.unsplash.com/photo-1515387784663-e2e29a23f69e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBhdHRlcm58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
          }}
        />
      )}
      {children}
    </Animated.View>
  );
};

export default ScreenBackground;
