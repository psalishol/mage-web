/* eslint-disable react-native/no-inline-styles */
import React, {useReducer} from 'react';
import {Link} from 'react-router-dom';
import {Pressable, Text} from '../atom';

const ResumePreviewerHandler: React.FunctionComponent = () => {
  const [hovering, setHovering] = useReducer(prev => !prev, false);
  const resumePdfLink = 'https://psalishol-portfolio.tiiny.site/';
  return (
    <Pressable
      onHoverIn={setHovering}
      onHoverOut={setHovering}
      top={'2%'}
      right={'2%'}
      position={'absolute'}>
      <Link style={{textDecoration: 'none'}} to={resumePdfLink}>
        <Text
          opacity={hovering ? 1 : 0.8}
          color={hovering ? 'blue' : 'foregroundColor'}
          fontWeight={'500'}
          variant={'default'}>
          Resume
        </Text>
      </Link>
    </Pressable>
  );
};

export default ResumePreviewerHandler;
