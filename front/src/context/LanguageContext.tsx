
import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';
import i18n from '../i18n';

type Locale = 'es' | 'en' | 'fr';

interface LanguageContextType {
    locale: Locale;
    setLocale: (locale: Locale) => Promise<void>;
    isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
    locale: 'es',
    setLocale: async () => { },
    isLoading: true,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [locale, setLocaleState] = useState<Locale>('es');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadLocale();
    }, []);

    const loadLocale = async () => {
        try {
            // 1. Check stored preference
            const stored = await AsyncStorage.getItem('user-locale');
            if (stored && ['es', 'en', 'fr'].includes(stored)) {
                updateLocale(stored as Locale);
            } else {
                // 2. Fallback to default (Spanish)
                // User requested strict Spanish default even if device is EN/FR
                updateLocale('es');
            }
        } catch (error) {
            console.error("Error loading locale", error);
        } finally {
            setIsLoading(false);
        }
    };

    const updateLocale = (newLocale: Locale) => {
        i18n.locale = newLocale;
        setLocaleState(newLocale);
    };

    const setLocale = async (newLocale: Locale) => {
        try {
            await AsyncStorage.setItem('user-locale', newLocale);
            updateLocale(newLocale);
        } catch (error) {
            console.error("Error saving locale", error);
        }
    };

    return (
        <LanguageContext.Provider value={{ locale, setLocale, isLoading }}>
            {children}
        </LanguageContext.Provider>
    );
};
