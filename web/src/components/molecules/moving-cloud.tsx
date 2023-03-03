import {MotiView} from 'moti';
import {Image} from '../atom';
import {smaillCloud} from '../../assets';
import {useAppMode, useRTWindowDimension} from '../../hooks';
import React from 'react';

const MovingCloud: React.FunctionComponent = () => {
  return (
    <MotiView
      from={{translateX: 0}}
      animate={{
        translateX: [
          -5, -10, -15, -20, -25, -30, -35, -40, -45, -50, -55, -60, -65, -70,
          -75, -80, -85, -90, -95, -100, -105, -110, -115, -120, -125, -130,
          -135, -140, -145, -150, -155, -160, -165, -170, -175, -180, -185,
          -190, -195, -200, -205, -210, -215, -220, -225, -230, -235, -240,
          -245, -250, -255, -260, -265, -270, -275, -280, -285, -290, -295,
          -300, -305, -310, -315, -320, -325, -330, -335, -340, -345, -350,
          -355, -360, -365, -370, -375, -380, -385, -390, -395, -400, -405,
          -410, -415, -420, -425, -430, -435, -440,
        ],
      }}
      transition={{
        loop: true,
        repeatReverse: true,
        damping: 300,
      }}>
      <SmallCloud />
    </MotiView>
  );
};

export default MovingCloud;

const SmallCloud = () => {
  const {isLight} = useAppMode();
  const {PHONE_SIZE} = useRTWindowDimension();
  return (
    <>
      {PHONE_SIZE && (
        <Image
          opacity={isLight ? 1 : 0.4}
          resizeMode="contain"
          position={'absolute'}
          bottom={400}
          right={0}
          height={400}
          width={400}
          source={{uri: isLight ? smaillCloud : smaillCloud}}
        />
      )}
    </>
  );
};
