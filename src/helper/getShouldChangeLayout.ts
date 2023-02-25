import {PHONE_BREAKPOINT} from './../constants/dimensions';
const getShouldSwitchOutPhoneLayout = (screenWidth: number) => {
  if (screenWidth >= PHONE_BREAKPOINT) {
    return true;
  }
  return false;
};

export default getShouldSwitchOutPhoneLayout;
