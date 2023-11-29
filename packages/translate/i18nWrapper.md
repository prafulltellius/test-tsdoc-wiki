[@einstein/translate](../README.md) / [Exports](../modules.md) / default

# Class: I18nWrapper

A class for managing internationalization using i18next.

## Table of contents

### Constructors

-   [constructor](default.md#constructor)

### Properties

-   [config](default.md#config)
-   [i18nInstance](default.md#i18ninstance)

### Methods

-   [getConfig](default.md#getconfig)
-   [init](default.md#init)
-   [use](default.md#use)
-   [useBackendPlugins](default.md#usebackendplugins)
-   [useLanguageDetector](default.md#uselanguagedetector)
-   [useWebpackCodeSplitting](default.md#usewebpackcodesplitting)

## Constructors

### constructor

• **new default**(): `I18nWrapperInstances`

Creates an instance of I18nWrapper.

#### Returns

`I18nWrapperInstances`

#### Defined in

[I18nWrapper.ts:45](https://github.com/Tellius/einstein/blob/7ab581d/packages/translate/src/I18nWrapper.ts#L45)

## Properties

### config

• `Private` **config**: `Config`

#### Defined in

[I18nWrapper.ts:39](https://github.com/Tellius/einstein/blob/7ab581d/packages/translate/src/I18nWrapper.ts#L39)

---

### i18nInstance

• `Private` **i18nInstance**: `i18n`

#### Defined in

[I18nWrapper.ts:38](https://github.com/Tellius/einstein/blob/7ab581d/packages/translate/src/I18nWrapper.ts#L38)

## Methods

### getConfig

▸ **getConfig**(): `Config`

Get the generated configuration.

#### Returns

`Config`

-   The generated configuration.

**`Memberof`**

I18nWrapper

#### Defined in

[I18nWrapper.ts:175](https://github.com/Tellius/einstein/blob/7ab581d/packages/translate/src/I18nWrapper.ts#L175)

---

### init

▸ **init**(`override?`): `void`

Initialize i18next with the provided configuration.

**Note**<br/>
As of now , we do not have data on default configuration.Please provide the override config and drop your config to @prafulltellius.

#### Parameters

| Name        | Type     | Description                                                                                                      |
| :---------- | :------- | :--------------------------------------------------------------------------------------------------------------- |
| `override?` | `Config` | Additional configuration to override [defaults](https://github.com/i18next/i18next/blob/master/src/defaults.js). |

#### Returns

`void`

**`Memberof`**

I18nWrapper

#### Defined in

[I18nWrapper.ts:145](https://github.com/Tellius/einstein/blob/7ab581d/packages/translate/src/I18nWrapper.ts#L145)

---

### use

▸ **use**(`configuration?`): `I18nWrapperInstances`

Add a plugin to the i18next instance.

#### Parameters

| Name             | Type                                     | Description                       |
| :--------------- | :--------------------------------------- | :-------------------------------- |
| `configuration?` | `PluginConfiguration`\<keyof `Modules`\> | The configuration for the plugin. |

#### Returns

`I18nWrapperInstances`

-   The current instance for chaining.

**`Throws`**

-   If the plugin is an array or if the configuration is invalid.

**`Memberof`**

I18nWrapper

#### Defined in

[I18nWrapper.ts:61](https://github.com/Tellius/einstein/blob/7ab581d/packages/translate/src/I18nWrapper.ts#L61)

---

### useBackendPlugins

▸ **useBackendPlugins**(`configuration?`):`I18nWrapperInstances`

Add a backend plugin to i18next.

#### Parameters

| Name             | Type                                 |
| :--------------- | :----------------------------------- |
| `configuration?` | `PluginConfiguration`\<`"backend"`\> |

#### Returns

`I18nWrapperInstances`

-   The current instance for chaining.

#### Defined in

[I18nWrapper.ts:125](https://github.com/Tellius/einstein/blob/7ab581d/packages/translate/src/I18nWrapper.ts#L125)

---

### useLanguageDetector

▸ **useLanguageDetector**(`configuration?`): `I18nWrapperInstances`

Add a language detector to the i18next instance.

#### Parameters

| Name             | Type                                          | Description                                      |
| :--------------- | :-------------------------------------------- | :----------------------------------------------- |
| `configuration?` | `PluginConfiguration`\<`"languageDetector"`\> | Configuration options for the language detector. |

#### Returns

`I18nWrapperInstances`

-   The current instance for chaining.

**`Memberof`**

I18nWrapper

#### Defined in

[I18nWrapper.ts:86](https://github.com/Tellius/einstein/blob/7ab581d/packages/translate/src/I18nWrapper.ts#L86)

---

### useWebpackCodeSplitting

▸ **useWebpackCodeSplitting**(`configurator`): `I18nWrapperInstances`

Configure i18next for Webpack code splitting.

#### Parameters

| Name           | Type       | Description                                |
| :------------- | :--------- | :----------------------------------------- |
| `configurator` | `Function` | Configuration function for code splitting. |

#### Returns

`I18nWrapperInstances`

-   The current instance for chaining.

**`Throws`**

-   If the configurator is not a function.

**`Memberof`**

I18nWrapper

#### Defined in

[I18nWrapper.ts:106](https://github.com/Tellius/einstein/blob/7ab581d/packages/translate/src/I18nWrapper.ts#L106)

### Additional Details

-   PluginConfiguration :- Accepts an Object with below format

    ```js
        {
            plugin: //your plugin function
            ...restOfYourConfigForPlugin //any config provided here will be added directly
        }
    ```

## Important Note

-   Ensure that the `use` or `useLanguageDetector` or or `useWebpackCodeSplitting` or `useBackendPlugin` methods are used to add configs before calling `init`.

-   Use the `init` method to initialize i18next with the provided configuration. Don't Miss this.

-   The class exposes a global translation function `window.__` after initialization.

Feel free to customize the class according to your project's needs and configurations.

**As of now we do not provide any default configuration, you can use the refercend links for it. Also drop your config to @prafulltellius.**

# Example

```js

import translate from '@einstein/translate';



// Create an instance

// Add plugins and configure i18next
translate
  .useLanguageDetector({ plugin: LanguageDetectorPlugin,
  // configuration for lang detector plugin
   }
   //use with webpack
  .useWebpackCodeSplitting((language, namespace) => {
    // use dynamic import always
    import(`path-to-your-locale/${language}/${namespace}.json`)
  })
  .useBackendPlugin({plugin:BackendPlugin,
  //configuration for backend plugin
  })
  .init({
    ...configuration to override.
  });

// Get the generated configuration
const config = i18nInstance.getConfig();


```
