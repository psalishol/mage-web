import {createBox} from '@shopify/restyle';
import {Theme} from './../../style/Theme';
import {Image as RNImage, ImageProps as RNImageProps} from 'react-native';

const Image = createBox<Theme, RNImageProps>(RNImage);

export type ImageProps = React.ComponentProps<typeof Image>;

export default Image;
