import enTranslation from "./locales/en/translation.json";
import zhCNTranslation from "./locales/zh-cn/translation.json";
import zhTWTranslation from "./locales/zh-tw/translation.json";
import { Resource } from "i18next";

export const resources: Resource = {
  en: {
    translation: enTranslation
  },
  'zh-tw': {
    translation: zhTWTranslation
  },
  'zh-cn': {
    translation: zhCNTranslation
  }
}