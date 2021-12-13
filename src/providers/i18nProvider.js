import polyglotI18nProvider from 'ra-i18n-polyglot';
import englishMessages from '../i18n/en';
import customChineseMessages from '../i18n/zh-TW.js';

const i18nProvider = polyglotI18nProvider(locale => {
    if (locale === 'en') {
        // initial call, must return synchronously
        return englishMessages;
    }
    if (locale === 'zh-TW') {
        return customChineseMessages;
    }
}, 'zh-TW');


export default i18nProvider;