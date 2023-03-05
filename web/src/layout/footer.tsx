import {Box} from '../components/atom';
import React from 'react';
import {
  FooterGetStartedText,
  GithubHandler,
  InstagramHandler,
  LinkedInHandler,
  SendMailHandler,
  TwitterHandler,
} from '../components/molecules';

const FOOTER_HEIGHT = 220;

const Footer: React.FunctionComponent = () => {
  return (
    <Box height={FOOTER_HEIGHT} width={'100%'} bg={'cardColor'}>
      <FooterGetStartedText />
      <Box mt={'l'} flexDirection={'row'} alignItems={'center'}>
        <SendMailHandler />
        <GithubHandler ml={20} />
        <LinkedInHandler ml={20} />
        <TwitterHandler ml={20} />
        <InstagramHandler ml={20} />
      </Box>
    </Box>
  );
};

export default Footer;
