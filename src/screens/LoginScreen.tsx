import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import i18n from '../i18n/i18n';
import { auth } from '../config/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('User logged in:', userCredential.user.email);
            alert('Login Successful');
        } catch (error: any) {
            console.error(error);
            alert(error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{i18n.t('login')}</Text>
            <TextInput
                style={styles.input}
                placeholder={i18n.t('email')}
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder={i18n.t('password')}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title={i18n.t('login')} onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
});

export default LoginScreen;
