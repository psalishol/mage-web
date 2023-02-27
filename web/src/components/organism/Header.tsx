import {View, Text} from 'react-native';
import {HeaderMenuHandler} from '../molecules';
import React from 'react';
import styles from './Header.style';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}></Text>
      <HeaderMenuHandler />
    </View>
  );
};

export default Header;
