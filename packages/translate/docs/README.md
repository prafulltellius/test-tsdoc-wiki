@einstein/translate / [Modules](modules.md)

# @einstein/translate

### Installation

**npm**

```js
npm install @einstein/translate
```

**yarn**

```js
yarn add @einstein/translate
```

**pnpm**

```js
pnpm install @einstein/translate
```

It has peer dependcies on `react` and `react-dom`.We do provide some APIs for `react` projects.If you want to use react specific APIs please install `react` and `react-dom`

### Imports

```js
import i18nWrapper, { getCurrentLocale } from '@einstein/translate';
```

## Description

`@einstein/translate` is an wrapper around,`i18next` package and it provides the flexible way to generate the `i18nConfig`.You can find all config for `i18next` from [here](https://github.com/i18next/i18next/blob/master/src/defaults.js). This package is design to integrate with frontend.

`translate` makes use of [`i18next-browser-languagedetector`](https://github.com/i18next/i18next-browser-languageDetector/blob/9efebe6ca0271c3797bc09b84babf1ba2d9b4dbb/src/index.js#L11) as Default Language detector. For general [`i18next-http-backend`](https://github.com/i18next/i18next-browser-languageDetector/blob/9efebe6ca0271c3797bc09b84babf1ba2d9b4dbb/src/index.js#L11) as backend. For webpack support, we use [`i18next-resources-to-backend`](https://github.com/i18next/i18next-resources-to-backend) as backend.

## API

For More API configuration.

-   [i18nWrapper](i18nWrapper.md)
-   For all other API, Check out [here](modules.md)

This library exposes the i18n translation function on the windows as `window.__`.
After setup wrap all your translation with `__` and it will replace with your translation.

```js
//en.json
{
    LBL_NAME: 'My Name is Einstein';
}

//fr.json
{
    LBL_NAME: "Je m'appelle Einstein";
}

__('LBL_NAME'); // en->'My Name is Einstein';
__('LBL_NAME'); // fr->"Je m'appelle Einstein";
```

**Note:-**<br/>
`__` does not takes care of re-rendering i.e; Even you change the language,re-rendering or reloading needs to be taken care. We have exposed react specific APIs [here](modules.md).
