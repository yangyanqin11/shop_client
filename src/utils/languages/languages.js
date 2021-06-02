/**
 * 多语言配置文件
 */
import I18n from "i18n-js";
import * as RNLocalize from "react-native-localize";
import cn from './cn';
import en from './en';
import jap from './jap';

// const locales = RNLocalize.getLocales();
// const systemLanguage = locales[0]?.languageCode;

// if (systemLanguage) {
//   I18n.locale = systemLanguage;
// } else {
I18n.locale = 'cn';
// }

I18n.fallbacks = true;
I18n.translations = {
  cn,
  en,
  jap,
};

export default I18n;