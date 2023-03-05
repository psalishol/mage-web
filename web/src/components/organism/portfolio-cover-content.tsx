import {CoverElementTextRenderer} from '../molecules';
import React from 'react';
import {Box} from '../atom';

const PortfolioCoverContent: React.FunctionComponent = () => {
  const nameAndRole = 'Psalishol Samuel - Mobile Developer';
  const coverPhrase = 'Welcome to the world of magic';
  return (
    <Box flex={1} justifyContent="center" paddingHorizontal={'l'}>
      <CoverElementTextRenderer text={nameAndRole} intro />
      <CoverElementTextRenderer text={coverPhrase} delay={100} />
    </Box>
  );
};

export default PortfolioCoverContent;
