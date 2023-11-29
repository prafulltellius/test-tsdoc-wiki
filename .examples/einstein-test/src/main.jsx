import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import './i18n.js';

import { withTranslationHOC } from '@einstein/translate';

const AppWithLocale = withTranslationHOC(App);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AppWithLocale />
    </React.StrictMode>
);
