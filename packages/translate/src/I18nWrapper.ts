import i18next, { InitOptions, i18n } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import ChainedBackend from 'i18next-chained-backend';
import addResourcesToBackend from 'i18next-resources-to-backend';

import { setI18nInstance } from './i18nInstance';

import { PluginType, Modules } from './index.types';

export type Config = InitOptions & {
    backend: {
        backends: Array<Object>;
        backendOptions: Array<Object>;
    };
};

/**
 * Represents a specific type of i18next plugin configuration.
 *
 *
 * @template T - The key of the module type.
 * @see {@link Modules}
 * @interface PluginConfiguration
 */
export interface PluginConfiguration<T extends keyof Modules = keyof Modules> {
    plugin: PluginType<T> | undefined;
    [k: string]: any;
}

/**
 * A class for managing internationalization using i18next.
 *
 * @class I18nWrapper
 */

export class I18nWrapper {
    private i18nInstance: i18n;
    private config: Config;

    /**
     * Creates an instance of I18nWrapper.
     */

    constructor() {
        // Initialize i18next instance

        this.i18nInstance = i18next.createInstance();
        this.i18nInstance.use(ChainedBackend);
        this.config = { backend: { backends: [], backendOptions: [] } };
    }

    /**
     * Add a plugin to the i18next instance.
     *
     * @param {PluginConfiguration} [configuration] - The configuration for the plugin.
     * @returns {I18nWrapper} - The current instance for chaining.
     * @throws {Error} - If the plugin is an array or if the configuration is invalid.
     * @memberof I18nWrapper
     */
    use(configuration?: PluginConfiguration): I18nWrapper {
        const { plugin = undefined, ...pluginConfiguration } =
            configuration || {};

        if (Array.isArray(plugin)) {
            throw new Error('Not expecting an array for plugin');
        }

        if (plugin) {
            this.i18nInstance.use(plugin);
        }

        if (Object.keys(pluginConfiguration).length > 0) {
            this.config = { ...this.config, ...pluginConfiguration };
        }
        return this;
    }

    /**
     * Add a language detector to the i18next instance.
     *
     * @param {PluginConfiguration<'languageDetector'>} [configuration] - Configuration options for the language detector.
     * @returns {I18nWrapper} - The current instance for chaining.
     * @memberof I18nWrapper
     */
    useLanguageDetector(
        configuration?: PluginConfiguration<'languageDetector'>
    ): I18nWrapper {
        const { plugin = LanguageDetector, ...languageDetectorConfig } =
            configuration || {};

        return this.use({
            plugin: plugin as any,
            detection: languageDetectorConfig
        });
    }

    /**
     * Configure i18next for Webpack code splitting.
     *
     * @param {Function} configurator - Configuration function for code splitting.
     * @returns {I18nWrapper} - The current instance for chaining.
     * @throws {Error} - If the configurator is not a function.
     * @memberof I18nWrapper
     */
    useWebpackCodeSplitting(configurator: Function): I18nWrapper {
        if (typeof configurator !== 'function') {
            throw new Error('Configuration will be a function');
        }

        this.config.backend.backends.push(
            addResourcesToBackend((language, namespace) => {
                return configurator(language, namespace);
            })
        );

        return this;
    }

    /**
     * Add a backend plugin to i18next.
     * @param {Object} options - Configuration options for the backend plugin.
     * @returns {I18nWrapper} - The current instance for chaining.
     */
    useBackendPlugins(
        configuration?: PluginConfiguration<'backend'>
    ): I18nWrapper {
        const { plugin = HttpApi, ...backendPluginConfig } =
            configuration || {};

        const config = backendPluginConfig || {};

        this.config.backend.backends.push(plugin);
        this.config.backend.backendOptions.push(config);
        return this;
    }

    /**
     * Initialize i18next with the provided configuration.
     *
     *
     * @param {Config} [override] - Additional configuration to override defaults.
     * @memberof I18nWrapper
     */
    init(override?: Config): void {
        this.config = { ...this.config, ...override };
        this.i18nInstance
            .init(this.config)
            .then(() => {
                if (process.env.NODE_ENV === 'development') {
                    console.log('i18n Initialized successfully');
                }
            })
            .catch((error) => {
                if (process.env.NODE_ENV === 'development') {
                    console.error('Error in i18n');
                    console.error(error);
                }
                console.error(
                    'There is an error encountered with i18n. Please check the config'
                );
            });

        setI18nInstance(this.i18nInstance);
        // Expose translation function globally
        window.__ = this.i18nInstance.t;
    }

    /**
     * Get the generated configuration.
     *
     * @returns {Config} - The generated configuration.
     * @memberof I18nWrapper
     */
    getConfig() {
        return this.config;
    }
}

/**
 * Instance of I18nWrapper class.
 * Documentation for [I18nWrapper](packages/translate/i18nWrapper.md)
 */
export default new I18nWrapper();
