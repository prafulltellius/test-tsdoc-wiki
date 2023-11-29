import { i18n } from 'i18next';

let i18nInstance: i18n;

export function getI18nInstance(): i18n {
    return i18nInstance;
}

export function setI18nInstance(i18n: i18n): void {
    i18nInstance = i18n;
}
