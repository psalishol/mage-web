import {createBox} from '@shopify/restyle';
import {Theme} from '../../style/Theme';
import {
  Pressable as RNPressable,
  PressableProps as RNPressableProps,
} from 'react-native';

const Pressable = createBox<Theme, RNPressableProps>(RNPressable);

export type PressableProps = React.ComponentProps<typeof Pressable>;

export default Pressable;
