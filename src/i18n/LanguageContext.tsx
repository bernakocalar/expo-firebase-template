import React, { createContext, useState, useEffect, useContext } from 'react';
import i18n from './i18n';
import * as Localization from 'expo-localization';

type LanguageContextType = {
    locale: string;
    setLocale: (locale: string) => void;
    t: (scope: string, options?: any) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [locale, setLocaleState] = useState(i18n.locale);

    useEffect(() => {
        // Optional: Persist language choice here
    }, [locale]);

    const setLocale = (newLocale: string) => {
        i18n.locale = newLocale;
        setLocaleState(newLocale);
    };

    const t = (scope: string, options?: any) => {
        return i18n.t(scope, options);
    };

    return (
        <LanguageContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
