import {PHONE_BREAKPOINT} from './../constants/dimensions';
import {Dimensions} from 'react-native';
import {useState, useEffect} from 'react';

const useRTWindowDimension = () => {
  const {width, height} = Dimensions.get('window');

  const [windowWidth, setWindowWidth] = useState<number>(width);
  const [windowHeight, setWindowHeight] = useState<number>(height);

  const PHONE_SIZE = windowWidth < PHONE_BREAKPOINT;

  useEffect(() => {
    Dimensions.addEventListener('change', ({window}) => {
      setWindowWidth(window.width);
      setWindowHeight(window.height);
    });
  }, []);

  return {windowWidth, windowHeight, PHONE_SIZE};
};

export default useRTWindowDimension;
