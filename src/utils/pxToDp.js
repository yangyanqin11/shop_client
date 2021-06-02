import { Dimensions } from 'react-native';

// 屏幕宽度
export const screenWidth = Dimensions.get('window').width;

// 屏幕高度
export const screenHeight = Dimensions.get('window').height;

// px转dp  设计稿为dp时不用转换
export const pxToDp = (elePx) => screenWidth * elePx / 375;

