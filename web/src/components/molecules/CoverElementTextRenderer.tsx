import React from 'react';
import {MotiView} from 'moti';
import {Text} from '../atom';

interface Props {
  text: string;
  delay?: number;
  intro?: boolean;
}

const CoverElementTextRenderer: React.FunctionComponent<Props> = ({
  text,
  delay,
  intro,
}) => {
  return (
    <MotiView
      transition={{damping: 300, delay}}
      from={{opacity: 0, translateX: -100}}
      animate={{opacity: 1, translateX: 0}}>
      <Text
        color="foregroundColor"
        fontSize={intro ? 12 : 60}
        fontWeight={intro ? '300' : '500'}
        variant={'default'}>
        {text}
      </Text>
    </MotiView>
  );
};

export default CoverElementTextRenderer;
