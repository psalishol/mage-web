import {Link} from 'react-router-dom';
import {linkedin} from '../../assets';
import {instagramProfileLink} from '../../constants/links';
import React from 'react';
import {Image} from '../atom';

interface Props {
  mr?: number;
  ml?: number;
  mt?: number;
  mb?: number;
}

const InstagramLinkHandler: React.FunctionComponent<Props> = ({
  mr,
  mb,
  ml,
  mt,
}) => {
  return (
    <Link to={instagramProfileLink}>
      <Image
        style={{
          marginRight: mr,
          marginLeft: ml,
          marginTop: mt,
          marginBottom: mb,
        }}
        height={25}
        width={25}
        source={{uri: linkedin}}
      />
    </Link>
  );
};

export default InstagramLinkHandler;
