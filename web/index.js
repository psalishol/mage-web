import {AppRegistry} from 'react-native';
import {name as appName} from '../app.json';
import App from './App';
import 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/dist/Feather';
import Entypo from 'react-native-vector-icons/dist/Entypo';

import iconFonts from 'react-native-vector-icons/Fonts/Feather.ttf';

// import poppinsBold from '../web/public/assets/fonts/poppins/Poppins-Bold.ttf';
// import poppinsBold from '../web/public/assets/fonts/Poppins-Bold.ttf';

const iconFontStyles = `@font-face {
  src: url(${iconFonts});
  font-family: Feather;
}`;

const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}

// Inject stylesheet
document.head.appendChild(style);

if (module.hot) {
  module.hot.accept();
}
AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});
