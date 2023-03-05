import {useEffect, useState} from 'react';
import {Box, Image, Pressable, Text} from '../src/components/atom';
import Header from '../src/components/organism/Header';
import {ScreenBackground} from '../src/components/template';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ScrollView,
  Linking,
} from 'react-native';
import {MotiView} from 'moti';
import React from 'react';

import {createClient, type ClientConfig} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import {useRTWindowDimension} from '../src/hooks';
import {Link} from 'react-router-dom';

// const config: ClientConfig = {
//   projectId: process.env.SANITY_PROJECT_ID,
//   dataset: 'production',
//   useCdn: true,
//   apiVersion: '2023-03-01',
//   token: process.env.SANITY_PROJECT_TOKEN,
// };

export const client = createClient({
  projectId: 'v7g8fsdp',
  dataset: 'production',
  useCdn: true, // set to `true` to fetch from edge cache
  apiVersion: '2023-03-01', // use current date (YYYY-MM-DD) to target the latest API version
  token:
    'skjYp1LQAynsWHyenxYUEeVBkI2RjqqdhCoNwy0FWMDaRYc6O9aC66f3xYz3lQC0kiTvgX1OZJttNFWzAcQO5MfQq52g6sCBv8rdsDgyKurN6HgymdjVpgNrbQvi2xrqbkmBFikCGAWKG2m838NYB1GlXCPYr7IzCgPZMJzOUfLO3WlJxnUS', // Only if you want to update content with the client
});

export const builder = imageUrlBuilder(client);

export const getUrlFor = (source?: any) => builder.image(source);

// const client = createClient(config);

const {height} = Dimensions.get('window');

const staticAbout =
  "Hello there, fellow adventurer! I'm a developer with a passion for exploration and innovation. When I'm not busy typing away at my keyboard, I'm often found in the kitchen, whipping up new recipes and experimenting with flavors. You could say that I'm a master of both code and cuisine!\
\n\n\
But my love for adventure doesn't stop at the kitchen counter. I'm also a dedicated volunteer, committed to making a positive impact in my community and beyond. That's why I founded my own NGO that helps provide school materials and other resources to people in remote areas. It's a cause that's near and dear to my heart, and I'm grateful for every opportunity I have to make a difference in the world.\
\n\n\
In addition to coding, cooking, and volunteering, I also enjoy playing guitar. Now, I'm not going to lie, I'm no Jimi Hendrix - in fact, I'm pretty sure my guitar skills could make a cat cry! But despite my lack of talent, I still enjoy strumming a few chords and making some noise. Who knows, maybe one day I'll even master the art of playing \"Wonderwall.\"\
\n\n\
One thing that always brings a smile to my face is spending time with my nephew and nieces. They're the light of my life, and I cherish every moment we get to spend together. Whether we're playing games, watching movies, or just goofing around, I always feel grateful to have them in my life.\
\n\n\
And speaking of gratitude, I'm also incredibly thankful for the opportunities I've had to go on adventures and explore new places. While I haven't been able to travel as much as I'd like to, I'm determined to change that in the future. Whether it's hiking through the mountains, camping in the woods, or simply taking a road trip to somewhere new, I'm always up for an adventure.\
\n\n\
So if you're looking for a developer who's as skilled in the kitchen as they are with code, a volunteer who's making a difference in the world, a musician who's still learning the ropes, an uncle who loves his family, and an adventurer who's always ready for the next journey, then look no further than me!\
";

// type IAboutType = {
//   about: string;
//   inages?: [];
// };

type AboutResponse = {
  about: string;
  position: number;
  _createdAt: string;
  _updatedAt: string;
  _id: string;
  _rev: string;
  _type: string;
  images?: Array<{_key: string; _type: string}>;
};

const AboutPage: React.FunctionComponent = () => {
  const [fetching, setFetching] = useState<boolean>(false);
  const [abouts, setAbouts] = useState<AboutResponse[] | undefined>();

  console.log(abouts, 'abouts');

  const fetchAbout = async () => {
    setFetching(true);
    try {
      const query = '*[_type == "about-me"]';
      const response: AboutResponse[] = await client.fetch(query);
      const sortedResponse = response.sort((a, b) => a.position - b.position);
      setAbouts(sortedResponse);
      setFetching(false);
    } catch (err) {
      console.log(err);
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchAbout();
  }, []);

  const marginLeft = '5%';

  const {PHONE_SIZE} = useRTWindowDimension();

  return (
    <ScreenBackground>
      <ScrollView style={{flex: 1, height: '100%'}}>
        <Box flex={1}>
          {fetching && (
            <Box
              style={{marginTop: height / 2.5}}
              justifyContent={'center'}
              alignItems={'center'}
              flex={1}>
              <ActivityIndicator />
            </Box>
          )}
          {!fetching && (
            <>
              <MotiView
                from={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{type: 'timing', duration: 1000}}>
                <Text
                  style={{marginLeft}}
                  mt={'xl'}
                  fontSize={PHONE_SIZE ? 18 : 30}
                  variant={'text'}>
                  A little detail about me
                </Text>
                <Intro />
                <Volunteering />
                <Nephew />
                <Adventure />
                <Outro />
              </MotiView>
              <RenderMyPictures />
            </>
          )}
        </Box>
      </ScrollView>
      <Header />
    </ScreenBackground>
  );
};

const Nephew = () => {
  const [writeUp, setWriteUp] = useState();

  const fetchWriteUp = async () => {
    const response = await client.fetch('*[_type == "about-write-up"]');
    const writeUpResponse = response.filter(_ => _.target === 'nephew')[0];
    setWriteUp(writeUpResponse.content);
    // console.log(writeUpResponse.content);
  };

  useEffect(() => {
    fetchWriteUp();
  }, []);
  return (
    <Box
      style={{marginLeft: '5%'}}
      justifyContent={'center'}
      mt={'xl'}
      width={'84%'}>
      <Text fontSize={14} variant={'default'}>
        {writeUp}
      </Text>
    </Box>
  );
};
const Adventure = () => {
  const [writeUp, setWriteUp] = useState();

  const fetchWriteUp = async () => {
    const response = await client.fetch('*[_type == "about-write-up"]');
    const writeUpResponse = response.filter(_ => _.target === 'adventure')[0];
    setWriteUp(writeUpResponse.content);
    // console.log(writeUpResponse.content);
  };

  useEffect(() => {
    fetchWriteUp();
  }, []);
  return (
    <Box
      style={{marginLeft: '5%'}}
      justifyContent={'center'}
      mt={'xl'}
      width={'84%'}>
      <Text fontSize={14} variant={'default'}>
        {writeUp}
      </Text>
    </Box>
  );
};
const Outro = () => {
  const [writeUp, setWriteUp] = useState();

  const fetchWriteUp = async () => {
    const response = await client.fetch('*[_type == "about-write-up"]');
    const writeUpResponse = response.filter(_ => _.target === 'ending')[0];
    setWriteUp(writeUpResponse.content);
    // console.log(writeUpResponse.content);
  };

  useEffect(() => {
    fetchWriteUp();
  }, []);
  return (
    <Box
      style={{marginLeft: '5%'}}
      justifyContent={'center'}
      mt={'xl'}
      width={'84%'}>
      <Text fontSize={14} variant={'default'}>
        {writeUp}
      </Text>
    </Box>
  );
};

const Intro = () => {
  const {urls} = useFetchGROQPicture('my-cooking');

  const [writeUp, setWriteUp] = useState();

  const fetchWriteUp = async () => {
    const response = await client.fetch('*[_type == "about-write-up"]');
    const writeUpResponse = response.filter(_ => _.target === 'intro')[0];
    setWriteUp(writeUpResponse.content);
    // console.log(writeUpResponse.content);
  };

  useEffect(() => {
    fetchWriteUp();
  }, []);

  const {PHONE_SIZE} = useRTWindowDimension();

  return (
    <Box
      //   style={{marginLeft: PHONE_SIZE ? '5%' : '15%'}}
      style={{marginLeft: '5%'}}
      justifyContent={'center'}
      mt={'xl'}
      width={'84%'}>
      <Text fontSize={14} variant={'default'}>
        {writeUp}
      </Text>

      <Text mb={'s'} opacity={0.6} fontSize={12} mt={'l'} variant="default">
        Hey, your ear closer, the food turns out bad most time 😅
      </Text>

      <FlatList
        horizontal
        // numColumns={5}
        // contentContainerStyle={{marginTop: 20}}
        data={urls}
        renderItem={({item, index}) => {
          console.log(item, 'this is the item');
          return (
            <Box>
              <Image height={150} width={200} source={{uri: item}} />
            </Box>
          );
        }}
      />
    </Box>
  );
};

const Volunteering = () => {
  const {urls} = useFetchGROQPicture('volunteering');

  const [writeUp, setWriteUp] = useState();

  const fetchWriteUp = async () => {
    const response = await client.fetch('*[_type == "about-write-up"]');
    const writeUpResponse = response.filter(
      _ => _.target === 'volunteering',
    )[0];
    setWriteUp(writeUpResponse.content);
    // console.log(writeUpResponse.content);
  };

  useEffect(() => {
    fetchWriteUp();
  }, []);

  return (
    <Box
      style={{marginLeft: '5%'}}
      justifyContent={'center'}
      mt={'xl'}
      width={'84%'}>
      <Text fontSize={14} variant={'default'}>
        {writeUp}
      </Text>
      <FlatList
        horizontal
        // numColumns={5}
        contentContainerStyle={{marginTop: 20}}
        data={urls}
        renderItem={({item, index}) => {
          console.log(item, 'this is the item');
          return (
            <Box>
              <Image height={150} width={200} source={{uri: item}} />
            </Box>
          );
        }}
      />
    </Box>
  );
};

const useFetchWriteUp = (target: string) => {};

const useFetchGROQPicture = (type: string) => {
  const [urls, setUrls] = useState<string[]>();

  console.log(urls);

  const fetchUrls = async () => {
    try {
      const query = `*[_type == "${type}"]`;
      const response = await client.fetch(query);
      const imageUrl = response.map(_ => _.image) as string[];
      setUrls(imageUrl);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUrls();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {urls};
};

const RenderMyPictures = () => {
  const {urls} = useFetchGROQPicture('my-pictures');

  const marginLeft = '5%';
  const {PHONE_SIZE} = useRTWindowDimension();

  const handlePress = async () => {
    await Linking.openURL('https://www.instagram.com/psalishol/');
  };

  return (
    <Box>
      <Text
        style={{marginLeft}}
        mt={'xl'}
        fontSize={PHONE_SIZE ? 18 : 30}
        variant={'text'}>
        Some Picture of me...
      </Text>
      <FlatList
        numColumns={2}
        contentContainerStyle={{
          marginLeft: '5%',
          marginTop: 20,
          marginBottom: 20,
        }}
        data={urls}
        renderItem={({item, index}) => {
          console.log(item, 'this is the item');
          return (
            <Pressable onPress={handlePress} key={index}>
              <Image height={100} width={150} source={{uri: item}} />
            </Pressable>
          );
        }}
      />
      <Text mb={'l'} style={{marginLeft}} variant={'default'}>
        Check more picture on{' '}
        <Link to={'https://www.instagram.com/psalishol/'}>
          <Text
            // onPress={handlePress}
            style={{color: 'blue', textDecorationLine: 'underline'}}
            variant={'default'}>
            instagram
          </Text>
        </Link>
      </Text>
    </Box>
  );
};

interface Props {
  about: string;
  images?: any[];
}

const RenderAboutChunk: React.FunctionComponent<Props> = props => {
  const {images, about} = props;
  return (
    <Box
      style={{marginLeft: '15%'}}
      justifyContent={'center'}
      mt={'xl'}
      width={'70%'}>
      <Text fontSize={14} variant={'default'}>
        {about}
      </Text>
      <AboutImagesRenderer images={images} />
    </Box>
  );
};

export default AboutPage;

interface AboutImagesProps {
  images?: any[];
}

const AboutImagesRenderer: React.FunctionComponent<AboutImagesProps> = ({
  images,
}) => {
  //   console.log(getUrlFor(images?.at(0)), 'item');
  return (
    <FlatList
      horizontal
      data={images}
      renderItem={({item, index}) => (
        <Box key={index}>
          <Image
            bg={'foregroundColor'}
            height={100}
            width={400}
            source={{uri: ''}}
          />
        </Box>
      )}
    />
  );
};
