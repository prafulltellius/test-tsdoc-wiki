import React, { useState, memo } from 'react';
import './App.css';

import {
    getLanguage,
    setLanguage,
    getLanguageDirection,
    useTranslation
} from '@einstein/translate';

import './App.css';

const LanguageOptions = [
    {
        label: 'English',
        value: 'en'
    },
    {
        label: 'हिंदी',
        value: 'hi'
    },
    {
        label: 'తెలుగు',
        value: 'tel'
    }
];

const Select = ({ selectedLang, onChangeLanguage }) => {
    return (
        <select value={selectedLang} onChange={onChangeLanguage}>
            {LanguageOptions.map(({ label, value: optionValue }) => (
                <option key={optionValue} value={optionValue}>
                    {label}
                </option>
            ))}
        </select>
    );
};

const TextUpdate = () => {
    return (
        <div>
            <div>{__('Hello')}</div>
            <div>
                {__('Hello {{name}} working in {{job}}', {
                    name: 'Prafull',
                    job: 'Railway'
                })}
            </div>
        </div>
    );
};

const Counter = () => {
    const [count, setCount] = useState(0);
    const [locale, setLocale] = useState('');
    const [langCode, setlangCode] = useState('');
    const [dirForLangCode, setDir] = useState('');

    const onClick = () => {
        setLocale(getLanguage());
    };

    const onLanguageClick = () => {
        setDir(getLanguageDirection(langCode));
    };

    useTranslation();
    return (
        <div>
            <div>{count}</div>
            <div>Locale is :- {locale}</div>
            <div>{__('Hello')}</div>
            <button onClick={() => setCount((prev) => prev + 1)}>Count</button>
            <button onClick={onClick}>Get Current Lang</button>
            <input
                type='text'
                value={langCode}
                onChange={(e) => setlangCode(e.target.value)}
                placeholder='enter language code'
            />
            <div>Direction is {dirForLangCode}</div>
            <button onClick={onLanguageClick}>Check Direction</button>
        </div>
    );
};
const MemoizedCounter = memo(Counter);

export default function App() {
    const language = getLanguage();
    const [selectedLang, setSelectedLang] = useState(language);

    const onChangeLanguage = (e) => {
        setSelectedLang(e.target.value);
        setLanguage(e.target.value);
    };

    return (
        <div className='App'>
            <TextUpdate />
            <Select
                selectedLang={selectedLang}
                onChangeLanguage={onChangeLanguage}
            />

            <MemoizedCounter />
        </div>
    );
}
