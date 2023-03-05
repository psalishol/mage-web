import {useAtomValue} from 'jotai';
import {MotiView} from 'moti';
import React from 'react';
import {verticalScrollInsetAtom} from '../../state';
import {Box, Image, Text} from '../atom';

interface Props {
  name: string;
  image: string;
  index: number;
}

const SKILL_SECTION_VERTICAL_INSET = 1700;

const SkillElement: React.FunctionComponent<Props> = ({image, name, index}) => {
  const scrollInset = useAtomValue(verticalScrollInsetAtom);

  const show = scrollInset > SKILL_SECTION_VERTICAL_INSET;
  return (
    <>
      <MotiView
        from={{opacity: 1, translateY: -10}}
        animate={{opacity: 1, translateY: show ? 0 : -10}}
        transition={{delay: 100 * index, damping: 800}}>
        <Box mb={'xl'} alignItems={'center'} flexDirection={'row'}>
          <Image
            resizeMode="contain"
            height={30}
            width={30}
            source={{uri: image}}
          />
          <Text ml={'l'} variant={'default'}>
            {name}
          </Text>
        </Box>
      </MotiView>
    </>
  );
};

export default SkillElement;
