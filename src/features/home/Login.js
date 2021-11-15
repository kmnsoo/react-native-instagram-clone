import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Text, TextInput, Alert, Button}  from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from './CustomButton';
import GlobalStyle from '../utils/GlobalStyle';
import AppNavigation from '../AppNavigation';


export default function Login({navigation}) {
    
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if (value != null) {
                        navigation.navigate('MainScreen');
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    const setData = async () => {
        if (name.length == 0 || password.length == 0) {
            Alert.alert('Warning!', 'Please write your data.')
        } else {
            try {
                var user = {
                    Name: name,
                    Password: password
                }
                await AsyncStorage.setItem('UserData', JSON.stringify(user));
                navigation.navigate('MainScreen');
            } catch (error) {
                console.log(error);
            }
        }
    }

    return(
        <View style ={styles.body}>
           <Text style={[
                GlobalStyle.CustomFont,
                styles.text
            ]}>
           Welcome    Minstagram </Text>
        <TextInput
            style = {styles.input}
            placeholder = 'Enter Your Name'
            onChangeText= {(value) => setName(value)} />
        <TextInput
            style = {styles.input}
            placeholder = 'Enter Your Password'
            onChangeText= {(value) => setPassword(value)} />
            <CustomButton
                title='로그인'
                color='skyblue'
                onPressFunction={setData}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
     
    },
    text: {
        fontSize: 40,
        color: 'black',
        marginBottom: 40,
        marginTop:40,
        backgroundColor:'white',
    },
    logo: {
        width: 100,
        height: 100,
        margin: 20,
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: 'gainsboro',
        borderRadius: 1,
        backgroundColor: 'ghostwhite',
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 10,
    }
})