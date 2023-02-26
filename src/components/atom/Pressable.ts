import {createBox} from '@shopify/restyle';
import {Theme} from '../../style/Theme';
import {Pressable as RNPressable} from 'react-native';

const Pressable = createBox<Theme>(RNPressable);

export type PressableProps = React.ComponentProps<typeof Pressable>;

export default Pressable;
