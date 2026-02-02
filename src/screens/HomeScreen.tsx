import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import i18n from '../i18n/i18n';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Login: undefined;
    Home: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{i18n.t('welcome')}</Text>
            <Text style={styles.text}>{i18n.t('home')}</Text>
            <Button title={i18n.t('login')} onPress={() => navigation.navigate('Login')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        marginBottom: 20,
    }
});

export default HomeScreen;
