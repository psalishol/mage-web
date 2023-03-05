import {PortalProvider} from '@gorhom/portal';
import {useSetAtom} from 'jotai';
import React, {useRef, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {
  PortfolioCoverPage,
  QuoteSection,
  AboutMeSection,
  ProjectSection,
  SkillSection,
  Footer,
} from '../src/layout';
import {verticalScrollInsetAtom, scrollRefAtom} from '../src/state';
import {ScrollBackUpHandler} from '../src/components/molecules';
import {Box} from '../src/components/atom';

const Home: React.FunctionComponent = () => {
  const setInset = useSetAtom(verticalScrollInsetAtom);
  const setRef = useSetAtom(scrollRefAtom);
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    setRef(scrollRef);
  }, [setRef]);

  return (
    <PortalProvider>
      <ScrollView
        bounces={false}
        ref={scrollRef}
        scrollEventThrottle={16}
        onScroll={e => {
          setInset(e.nativeEvent.contentOffset.y);
        }}
        showsVerticalScrollIndicator={true}>
        <PortfolioCoverPage />

        <QuoteSection />
        <AboutMeSection />
        <SkillSection />
        <ProjectSection />
        <Box height={100} width={'100%'} bg="backgroundColor" />
        <Footer />
      </ScrollView>
      <ScrollBackUpHandler />
    </PortalProvider>
  );
};

export default Home;
