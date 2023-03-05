import {useRTWindowDimension} from '../../hooks';
import {Box, Text} from '../atom';
import React from 'react';

const FooterGetStartedText: React.FunctionComponent = () => {
  const {PHONE_SIZE} = useRTWindowDimension();
  return (
    <Box marginLeft={'l'} width={PHONE_SIZE ? '80%' : '60%'}>
      <Text fontSize={12} mt={'xl'} variant={'default'}>
        Developing an exceptional user experience is crucial to creating a great
        product. Allow me to assist your company in achieving the best possible
        experience for your users. Getting started is just a few clicks away.
      </Text>
    </Box>
  );
};

export default FooterGetStartedText;
