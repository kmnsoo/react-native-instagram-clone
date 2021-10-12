import React, {useState, useEffect} from 'react';
import {Pressable, SafeAreaView, Text, TextInput, View} from 'react-native';
import Header from '../header/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import {withNavigation} from 'react-navigation'
import AsyncStorage from '@react-native-async-storage/async-storage';

const FeedWriteScreen = ({navigation}) => {
  const [content, setContent] = useState('');
 
  const [name, setName] = useState('');

 useEffect(() => {
     getData();
 }, []);

 const getData = () => {
     try {
         AsyncStorage.getItem('UserData')
             .then(value => {
                 if (value != null) {
                     let user = JSON.parse(value);
                     setName(user.Name);
                 }
             })
     } catch (error) {
         console.log(error);
     }
 }

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <SafeAreaView />
      <Header
        leftComponent={
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
     <Icon style={Icon} name='ios-close' size={25} />

          </Pressable>
        }
        centerComponent={
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>새 게시물</Text>
          </View>
        }
        rightComponent={
          <Pressable
            onPress={() => {
              console.log('글 작성');
              navigation.navigate('MainScreen', {
                screen: 'HomeScreen',
                // screen: 'My',
                params: {
                  newFeed: {
                    name: name,
                    content: content,
                    images: [
                      {                     
                        url: 'https://ifh.cc/g/eSlPew.jpg',
                      },
                      {
                        url: 'https://ifh.cc/g/29KvKf.jpg',
                      },
                      {
                        url: 'https://via.placeholder.com/500',
                      },
                      {
                        url: 'https://via.placeholder.com/600',
                      },
                      {
                        url: 'https://via.placeholder.com/500',
                      },
                      {
                        url: 'https://via.placeholder.com/600',
                      },
                    ],
                    isLike: false,
                  },
                },
              })
              
            }}>
            <Text style= {{fontWeight : '600'}}>다음</Text>
          </Pressable>
        }
      />

      <TextInput
        style={{borderWidth: 1, borderColor: 'black', padding: 10}}
        placeholder={'내용을 입력해주세요.'}
        onChangeText={txt => {
          setContent(txt);
        }}
      />
    </View>
  );
};

export default FeedWriteScreen;
