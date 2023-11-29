import i18nWrapper from '@einstein/translate';

i18nWrapper
    .useLanguageDetector({
        config: {
            order: ['localStorage', 'cookie'],
            caches: ['localStorage', 'cookie'],
            lookupLocalStorage: 'lang',
            lookupCookie: 'lang'
        }
    })
    .useBackendPlugins()
    .init({
        debug: true,
        supportedLangs: ['en', 'hi', 'tel'],
        falbackLang: 'en',
        interpolation: {
            escapeValue: false // not needed for react!!
        }
    });
