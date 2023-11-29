[@einstein/translate](README.md) / Modules

# @einstein/translate

## Table of contents

### Variables

- [default](modules.md#default)

### Functions

- [getCurrentLocale](modules.md#getcurrentlocale)
- [getLocaleDirection](modules.md#getlocaledirection)
- [setLocale](modules.md#setlocale)
- [updateLangAttributes](modules.md#updatelangattributes)
- [useTranslation](modules.md#usetranslation)
- [withTranslationHOC](modules.md#withtranslationhoc)

## Variables

### default

• **default**: `I18nWrapper`

Instance of I18nWrapper class.
Documentation for [I18nWrapper](packages/translate/i18nWrapper.md)

#### Defined in

[I18nWrapper.ts:184](https://github.com/Tellius/einstein/blob/7ab581d/packages/translate/src/I18nWrapper.ts#L184)

## Functions

### getCurrentLocale

▸ **getCurrentLocale**(): `string`

Get the current language.

#### Returns

`string`

- The current language code.

#### Defined in

[i18nHelpers.ts:29](https://github.com/Tellius/einstein/blob/7ab581d/packages/translate/src/i18nHelpers.ts#L29)

___

### getLocaleDirection

▸ **getLocaleDirection**(`value?`): `string`

Get the current language direction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `string` | The language code. |

#### Returns

`string`

- The direction of the language.

#### Defined in

[i18nHelpers.ts:40](https://github.com/Tellius/einstein/blob/7ab581d/packages/translate/src/i18nHelpers.ts#L40)

___

### setLocale

▸ **setLocale**(`value`, `callback`): `Promise`\<`void`\>

Change the language and optionally update the HTML lang attribute.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | The language code to switch to. |
| `callback` | `Function` | The callback function to be called after language update. |

#### Returns

`Promise`\<`void`\>

- A promise that resolves after the language is changed.

#### Defined in

[i18nHelpers.ts:11](https://github.com/Tellius/einstein/blob/7ab581d/packages/translate/src/i18nHelpers.ts#L11)

___

### updateLangAttributes

▸ **updateLangAttributes**(`value?`): `void`

Update the `lang` and `dir` attributes for the language.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `string` | The language code. |

#### Returns

`void`

#### Defined in

[i18nHelpers.ts:52](https://github.com/Tellius/einstein/blob/7ab581d/packages/translate/src/i18nHelpers.ts#L52)

___

### useTranslation

▸ **useTranslation**(): `string`

Hook for managing translation state.

#### Returns

`string`

- The current language code.

#### Defined in

[i18nReact.tsx:10](https://github.com/Tellius/einstein/blob/7ab581d/packages/translate/src/i18nReact.tsx#L10)

___

### withTranslationHOC

▸ **withTranslationHOC**(`Component`): (`props`: `any`) => `React.ReactNode`

Higher-Order Component (HOC) for adding translation capabilities to a component.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Component` | `ComponentType`\<{}\> | The component to enhance. |

#### Returns

`fn`

- The enhanced component.

▸ (`props`): `React.ReactNode`

Component wrapper with added translation.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | `any` | The component props. |

##### Returns

`React.ReactNode`

- The rendered component.

#### Defined in

[i18nReact.tsx:30](https://github.com/Tellius/einstein/blob/7ab581d/packages/translate/src/i18nReact.tsx#L30)
