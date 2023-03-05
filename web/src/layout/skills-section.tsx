import {FlatList, StyleSheet} from 'react-native';
import {Box, Text} from '../components/atom';
import {ScreenBackground} from '../components/template';
import React from 'react';
import {SkillElement} from '../components/molecules';
import {skills} from '../data/skills';

const SkillSection: React.FunctionComponent = () => {
  return (
    <ScreenBackground useBackground={false}>
      <Box flex={1} justifyContent={'center'} alignItems={'center'}>
        <Text textAlign={'center'} fontSize={30} variant={'text'}>
          Mage Strength
        </Text>
        <Box alignSelf={'center'} width={'80%'}>
          <FlatList
            contentContainerStyle={styles.list}
            data={skills}
            renderItem={({item, index}) => (
              <SkillElement
                index={index}
                key={index}
                name={item.name}
                image={item.image}
              />
            )}
          />
        </Box>
      </Box>
    </ScreenBackground>
  );
};

export default SkillSection;

const styles = StyleSheet.create({
  list: {
    marginTop: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
