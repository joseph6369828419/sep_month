import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = () => {
      axios.post('http://192.168.43.198:5000/register', { username, password })  // Replace with your server URL
          .then((response) => {
              setMessage('User registered successfully');
          })
          .catch((error) => {
              console.error(error);
              setMessage('Registration failed: ' + (error.response ? error.response.data.message : error.message));
          });
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                value={password}
                secureTextEntry
                onChangeText={setPassword}
                style={styles.input}
            />
            <Button title="Register" onPress={handleRegister} />
            {message && <Text style={styles.message}>{message}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',  // Vertically center the content
        alignItems: 'center',       // Horizontally center the content
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    input: {
        width: '80%',               // Take up 80% of the screen width
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    message: {
        marginTop: 10,
        color: 'green',
        fontSize: 16,
    },
});

export default LoginScreen;
