import {Dimensions, StyleSheet} from 'react-native';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {height, backgroundColor: '#292929'},
  image: {
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    opacity: 0.02,
    position: 'absolute',
  },
});

export default styles;
