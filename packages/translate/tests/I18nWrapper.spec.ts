import i18next from 'i18next';

import i18nWrapper from '../src/I18nWrapper';

const baseConfig = {
    backend: {
        backends: [],
        backendOptions: []
    }
};

const testConfiguration = {
    testConfig: {
        value: 'test'
    }
};

const languageDetectionConfig = { detection: { test: 'value' } };

jest.mock('i18next', () => {
    const i18n = jest.requireActual('i18next');
    let mI18next = {
        ...i18n,
        use: jest.fn()
    };

    // Mocking createInstance method
    //@ts-ignore
    mI18next.createInstance = jest.fn(() => mI18next);

    return mI18next;
});

describe('Testing i18nWrapper', () => {
    it('Should have baseConfig before any action', () => {
        expect(i18nWrapper.getConfig()).toEqual(baseConfig);
    });

    it('if there is no configuration passed for use then there will be no new config added', () => {
        const CustomPlugin = jest.fn();
        i18nWrapper.use({
            plugin: CustomPlugin as any
        });

        expect(i18nWrapper.getConfig()).toEqual(baseConfig);
    });

    it('should make use', () => {
        const CustomPlugin = jest.fn();

        const i18nValue = i18nWrapper.use({
            plugin: CustomPlugin as any,
            ...testConfiguration
        });

        expect(i18nWrapper.getConfig()).toEqual({
            ...baseConfig,
            ...testConfiguration
        });

        expect(i18next.use).toHaveBeenCalledTimes(1);
        expect(i18next.use).toHaveBeenCalledWith(CustomPlugin);
        expect(i18nValue).toEqual(i18nWrapper);
    });

    it('if plugin is an array there will be an error', () => {
        const CustomPlugin = jest.fn();

        expect(() =>
            i18nWrapper.use({
                plugin: [CustomPlugin as any],
                testConfig: { ...testConfiguration }
            })
        ).toThrow('Not expecting an array for plugin');
    });

    //TODO: Figure out how to test  Wether the plugin has been called with Language Detector
    it('calls use method with language detector plugin', () => {
        // Call the method you want to test
        i18nWrapper.useLanguageDetector();

        // Expect the use method to be called
        expect(i18next.use).toHaveBeenCalled();
        // Optionally, you can assert other things, for example, the number of calls
        expect(i18next.use).toHaveBeenCalledTimes(1);
    });

    it('calls use method with language detector plugin', () => {
        // Call the method you want to test
        //@ts-expect-error
        i18nWrapper.useLanguageDetector(languageDetectionConfig.detection);

        // Expect the use method to be called
        expect(i18next.use).toHaveBeenCalled();
        // Optionally, you can assert other things, for example, the number of calls
        expect(i18nWrapper.getConfig()).toEqual({
            ...baseConfig,
            ...testConfiguration,
            ...languageDetectionConfig
        });
    });

    it('calls useWebpackSplitting method with language detector plugin', () => {
        // Call the method you want to test
        //@ts-expect-error
        i18nWrapper.useLanguageDetector(languageDetectionConfig.detection);

        // Expect the use method to be called
        expect(i18next.use).toHaveBeenCalled();
        // Optionally, you can assert other things, for example, the number of calls
        expect(i18nWrapper.getConfig()).toEqual({
            ...baseConfig,
            ...testConfiguration,
            ...languageDetectionConfig
        });
    });

    it('calls useWebpackCodeSplitting with a configurator as object will throw an error', () => {
        // Mock configurator function
        //@ts-expect-error
        expect(() => i18nWrapper.useWebpackCodeSplitting({})).toThrow();
    });

    it('useBackendPlugin config will be added to backendOptions', () => {
        const CustomPlugin = jest.fn();
        i18nWrapper.useBackendPlugins({
            plugin: CustomPlugin as any,
            value: 'Test'
        });

        const config = i18nWrapper.getConfig();

        expect(config.backend.backends).toEqual([CustomPlugin]);
        expect(config.backend.backendOptions).toEqual([{ value: 'Test' }]);
    });

    it('call init have been called with', () => {
        jest.spyOn(i18next, 'init');

        i18nWrapper.init();

        expect(i18next.init).toHaveBeenCalled();
    });
});
