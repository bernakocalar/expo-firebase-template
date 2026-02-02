import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useLanguage } from '../i18n/LanguageContext';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Login: undefined;
    Home: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();
    const { t, locale, setLocale } = useLanguage();

    const toggleLanguage = () => {
        const newLocale = locale === 'en' ? 'tr' : 'en';
        setLocale(newLocale);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{t('welcome')}</Text>

            <View style={styles.content}>
                <Text style={styles.description}>{t('description')}</Text>

                <Text style={styles.subtitle}>{t('features')}</Text>
                <Text style={styles.feature}>• {t('feature1')}</Text>
                <Text style={styles.feature}>• {t('feature2')}</Text>
                <Text style={styles.feature}>• {t('feature3')}</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={toggleLanguage}>
                <Text style={styles.buttonText}>{t('changeLanguage')} ({locale.toUpperCase()})</Text>
            </TouchableOpacity>

            <Button title={t('login')} onPress={() => navigation.navigate('Login')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    content: {
        marginBottom: 30,
        width: '100%',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        color: '#333',
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
        alignSelf: 'flex-start',
    },
    feature: {
        fontSize: 16,
        marginBottom: 5,
        marginLeft: 10,
    },
    button: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },
});

export default HomeScreen;
