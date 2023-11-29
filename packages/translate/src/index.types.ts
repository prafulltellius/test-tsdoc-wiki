import { Modules as i18nextModules } from 'i18next';

export type Modules = i18nextModules;

/**
 * Represents the type of a plugin based on a specific module key.
 *
 * @template T - The key of the module type.
 * @see {@link Modules}
 * @type {Modules[T]}
 */
export type PluginType<T extends keyof Modules = keyof Modules> = Modules[T];

/**
 * Augments the global Window interface to expose the translation function globally.
 *
 * @interface Window
 */
declare global {
    interface Window {
        __: () => any;
    }
}
