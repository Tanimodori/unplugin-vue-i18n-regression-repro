# unplugin-vue-i18n-regression-repro

Reproduction of https://github.com/intlify/bundle-tools/issues/235

# Steps to reproduce

```
pnpm i
pnpm dev

# Open http://localhost:5173
# Open console, you should the following error:
# Uncaught SyntaxError: Unexpected token '{'  at index.ts:4
```

`src/locale/index.ts`:

```ts
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
```

Transformed code

```js
export default [
  (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["WHATEVER_THE_FIRST_EXPORT"])};fn.source="WHATEVER_THE_FIRST_EXPORT";return fn;})(),

]{
  "locale": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["zh-CN"])};fn.source="zh-CN";return fn;})(),
  "fallbackLocale": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["en-US"])};fn.source="en-US";return fn;})(),
  "allowComposition": true,
  "messages": {
    "en-US": {

    },
    "zh-CN": {

    }
  }
}
```
