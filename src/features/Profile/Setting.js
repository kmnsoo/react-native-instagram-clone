import React, {useState, useEffect} from 'react';
import {View, Pressable, Text, SafeAreaView, BackHandler, StyleSheet, TextInput, Alert} from 'react-native';
import Header from '../header/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomButton from '../home/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';



function SettingScreen({navigation}) {

 
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  // useEffect(() => {
  //     getData();
  // }, []);

  // const getData = () => {
  //     try {
  //         AsyncStorage.getItem('UserData')
  //             .then(value => {
  //                 if (value != null) {
  //                     navigation.navigate('My');
  //                 }
  //             })
  //     } catch (error) {
  //         console.log(error);
  //     }
  // }

  const setData = async () => {
      if (name.length == 0 || age.length == 0) {
          Alert.alert('Warning!', 'Please write your data.')
      } else {
          try {
              var user = {
                  Name: name,
                  Age: age
              }
              await AsyncStorage.setItem('UserData', JSON.stringify(user));
              navigation.navigate('App');
          } catch (error) {
              console.log(error);
          }
      }
  }


    
  return (
    <View style={{ flex: 1,}}>
      <SafeAreaView style={{backgroundColor: 'white'}} />
      <Header
        transparent={false}
        headerTruncateBackTitle 
        leftComponent={     
       <View style = {{flexDirection : 'row', alignItems : 'center', marginLeft: -5}}>
         <View>
           <View>
            <Pressable
             style={styles.button}             
              onPress={() => {
               navigation.goBack()
              }}>
        <Icon style = {styles.Icon} name='chevron-back' size={25}/>
            </Pressable>
          </View>
           </View>
              <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: '#333',
            }}>
           Setting 
          </Text>
          </View>
        }
        rightComponent={
          <View style={{flexDirection: 'row',}}>
            <Pressable
             style={styles.button} 
              onPress={() => {
                console.log('DM 새 메시지 스크린 이동');
                navigation.navigate('DMWriteScreen');

              }}>
            <Icon style = {styles.Icon} name='ios-create-outline' size={25}/>
            </Pressable>
          </View>
        }
      />
          <View style ={styles.body}>
          
        <Text style = {styles.text}>
            Login Page </Text>
        <TextInput
            style = {styles.input}
            placeholder = 'Enter Your Name'
            onChangeText= {(value) => setName(value)} />
        <TextInput
            style = {styles.input}
            placeholder = 'Enter Your Age'
            onChangeText= {(value) => setAge(value)} />
            <CustomButton
                title='Login'
                color='#1eb900'
                onPressFunction={setData}
            />
        </View>
    </View>  
    
  );
};

const styles = StyleSheet.create({
  Icon:{
    width: 30
  },
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0080ff',
},
text: {
    fontSize: 30,
    color: '#ffffff',
    marginBottom: 130,
},
logo: {
    width: 100,
    height: 100,
    margin: 20,
},
input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
}
});

export default SettingScreen;
