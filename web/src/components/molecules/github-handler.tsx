import React from 'react';
import {Link} from 'react-router-dom';
import {github} from '../../assets';
import {githubProfileLink} from '../../constants/links';
import {Image} from '../atom';

interface Props {
  link?: string;
  mr?: number;
  ml?: number;
  mt?: number;
  mb?: number;
}

const GithubLinkHandler: React.FunctionComponent<Props> = ({
  link = githubProfileLink,
  mr,
  mb,
  ml,
  mt,
}) => {
  return (
    <Link to={link}>
      <Image
        style={{
          marginRight: mr,
          marginLeft: ml,
          marginTop: mt,
          marginBottom: mb,
        }}
        height={25}
        width={25}
        source={{uri: github}}
      />
    </Link>
  );
};

export default GithubLinkHandler;
