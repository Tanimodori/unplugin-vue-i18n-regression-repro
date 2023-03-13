import { createI18n } from "vue-i18n";

export const WHATEVER_THE_FIRST_EXPORT = ["WHATEVER_THE_FIRST_EXPORT"];

const i18n = createI18n({
  locale: "zh-CN",
  fallbackLocale: "en-US",
  allowComposition: true,
  messages: {
    "en-US": {},
    "zh-CN": {},
  },
});

export default i18n;
