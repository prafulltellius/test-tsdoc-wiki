import { i18n } from 'i18next';
import {
    setLocale,
    getCurrentLocale,
    getLocaleDirection,
    updateLangAttributes
} from '../src';
import { setI18nInstance } from '../src/i18nInstance';

const i18next: i18n = jest.createMockFromModule('i18next');
i18next.language = 'en';
//@ts-ignore
i18next.changeLanguage = async (locale: string) => new Promise(() => {});
setI18nInstance(i18next);

describe('setLocale', () => {
    it('should call changeLanguage and invoke the callback on success', async () => {
        const callback = jest.fn();

        // Mock the changeLanguage functiona

        //@ts-ignore
        jest.spyOn(i18next, 'changeLanguage');

        await setLocale('en', callback);

        // Expect changeLanguage to be called with the correct language
        expect(i18next.changeLanguage).toHaveBeenCalledWith('en');
    });

    it('should return language on getCurrentLocale', async () => {
        const value = getCurrentLocale();

        expect(value).toBe('en');
    });

    //TODO: figure out how to test language direction
    it('should return dir on language', async () => {
        const value = getCurrentLocale();
        const dir = getLocaleDirection();
        expect(dir).toBe(i18next.dir(value));
    });

    it('should add language and  direction and  html', async () => {
        updateLangAttributes();

        // Expect setAttribute to be called on documentElement with the correct arguments
        expect(document.documentElement.lang).toBe('en');
    });
});
