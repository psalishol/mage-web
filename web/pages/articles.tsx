import React, {useEffect, useState} from 'react';
import {Header} from '../src/components/organism';
import {ScreenBackground} from '../src/components/template';
import {Box, Text} from '../src/components/atom';
import {ActivityIndicator} from 'react-native';

const ArticlesPage: React.FunctionComponent = () => {
  const [fetching, setFetching] = useState<boolean>(false);

  useEffect(() => {
    setFetching(true);
    setTimeout(() => {
      setFetching(false);
    }, 1500);
  }, []);

  return (
    <ScreenBackground>
      <>
        <Box flex={1}>
          <>
            {fetching && (
              <Box flex={1} alignItems={'center'} justifyContent={'center'}>
                <ActivityIndicator />
              </Box>
            )}
          </>
          <>
            {!fetching && (
              <Box flex={1} justifyContent={'center'} alignItems={'center'}>
                <Text textAlign={'center'} variant={'default'}>
                  Oops! Nothing here yet
                </Text>
              </Box>
            )}
          </>
        </Box>
      </>
      <Header />
    </ScreenBackground>
  );
};

export default ArticlesPage;
