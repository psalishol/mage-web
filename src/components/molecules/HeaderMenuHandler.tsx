import React, {useState} from 'react';
import {Dimensions, View, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';
// import AntDesign from 'react-native-vector-icons/dist/AntDesign';

const HeaderMenuHandler = () => {
  const [show, setShow] = useState<boolean>(false);

  const PHONE_BREAKPOINT = 755;

  Dimensions.addEventListener('change', ({window}) => {
    if (window.width >= PHONE_BREAKPOINT) {
      setShow(false);
    } else {
      setShow(true);
    }
  });

  return (
    <View>
      {show && (
        <Pressable>
          <Icon name="menu" size={24} color="#FFFFFF" />
          {/* <AntDesign name="menu" size={24} color="#FFFFFF" /> */}
        </Pressable>
      )}
    </View>
  );
};

export default HeaderMenuHandler;
