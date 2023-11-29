import type { i18n } from 'i18next';
import { getI18nInstance } from './i18nInstance';

/**
 * Change the language and optionally update the HTML lang attribute.
 *
 * @param {string} value - The language code to switch to.
 * @param {Function} callback - The callback function to be called after language update.
 * @returns {Promise<void>} - A promise that resolves after the language is changed.
 */
export async function setLocale(
    value: string,
    callback: Function
): Promise<void> {
    const i18Instances: i18n = getI18nInstance();
    try {
        const result = await i18Instances.changeLanguage(value);
        callback(result);
    } catch (error) {
        console.error('Error while changing language:', error);
    }
}

/**
 * Get the current language.
 *
 * @returns {string} - The current language code.
 */
export function getCurrentLocale(): string {
    const i18Instances = getI18nInstance();
    return i18Instances.language;
}

/**
 * Get the current language direction.
 *
 * @param {string} [value] - The language code.
 * @returns {string} - The direction of the language.
 */
export function getLocaleDirection(value?: string): string {
    const i18Instances = getI18nInstance();
    const locale = value || getCurrentLocale();
    return i18Instances.dir(locale);
}

/**
 * Update the `lang` and `dir` attributes for the language.
 *
 * @param {string} [value] - The language code.
 * @returns {void}
 */
export const updateLangAttributes = (value?: string): void => {
    const i18nLang = getCurrentLocale();
    let language = value || i18nLang;

    document.documentElement.setAttribute('lang', language);
    document.documentElement.setAttribute('dir', getLocaleDirection(language));
};
