import React, { useEffect, useState } from 'react';

import { getI18nInstance } from './i18nInstance';

/**
 * Hook for managing translation state.
 *
 * @returns {string} - The current language code.
 */
export const useTranslation = (): string => {
    const [lang, setLang] = useState('');

    useEffect(() => {
        const i18nInstance = getI18nInstance();

        i18nInstance.on('languageChanged', (value) => {
            setLang(value);
        });
    }, []);

    return lang;
};

/**
 * Higher-Order Component (HOC) for adding translation capabilities to a component.
 *
 * @param {React.ComponentType} Component - The component to enhance.
 * @returns {React.ComponentType} - The enhanced component.
 */
export default function withTranslationHOC(Component: React.ComponentType) {
    /**
     * Component wrapper with added translation.
     *
     * @param {Object} props - The component props.
     * @returns {React.ReactNode} - The rendered component.
     */
    function AppComponent(props): React.ReactNode {
        const lang = useTranslation();

        // key is required for the Component tree  needs to be recreated.
        return <Component {...props} key={lang} />;
    }

    return AppComponent;
}
