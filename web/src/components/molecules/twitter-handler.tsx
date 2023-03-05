import {Link} from 'react-router-dom';
import {twitter} from '../../assets';
import {twitterProfileLink} from '../../constants/links';
import React from 'react';
import {Image} from '../atom';

interface Props {
  mr?: number;
  ml?: number;
  mt?: number;
  mb?: number;
}

const TwitterHandler: React.FunctionComponent<Props> = ({mr, mb, ml, mt}) => {
  return (
    <Link to={twitterProfileLink}>
      <Image
        style={{
          marginRight: mr,
          marginLeft: ml,
          marginTop: mt,
          marginBottom: mb,
        }}
        height={25}
        width={25}
        source={{uri: twitter}}
      />
    </Link>
  );
};

export default TwitterHandler;
