import {createBox} from '@shopify/restyle';
import {Theme} from '../../style/Theme';
import {View} from 'react-native';

const Box = createBox<Theme>(View);

export type BoxProps = React.ComponentProps<typeof Box>;
export default Box;
