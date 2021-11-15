    import {useIsFocused} from '@react-navigation/core';
    import React from 'react';
    import {useState} from 'react';
    import { View, Pressable, Text, SafeAreaView, TextInput, FlatList, Dimensions, Image, ScrollView, StyleSheet, Button
    } from 'react-native';
    import {useEffect} from 'react/cjs/react.development';
    import Icon from 'react-native-vector-icons/Ionicons';
    import Header from '../header/Header';
    import { color } from 'react-native-reanimated';
    import Feed from '../home/Feed';

    import AsyncStorage from '@react-native-async-storage/async-storage';
    import CustomButton from '../home/CustomButton';



    const Separator = () => (
      <View style ={styles.Separator} />
    )

    const ProfileScreen = ({navigation, route}) => {
      
      const isFocused = useIsFocused();
      const [tempFeedList, setTempFeedList] = useState([]);
      const [splitList, setSpliList] = useState([]);
      
      //
      const [feedList, setFeedList] = useState(DATAS);
      useEffect(() => {
        if (isFocused) {
          if (route.params?.newFeed) {
            console.log(route.params.newFeed);
            setFeedList([route.params.newFeed, ...feedList]);
          }
        }
      }, [isFocused]);
      useEffect(() => {
        AsyncStorage.setItem('feedData', JSON.stringify(feedList));
      }, [feedList]);
     //
    
     const [name, setName] = useState('');
     const [age, setAge] = useState('');

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
                        setAge(user.Age);
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

  //   const updateData = async () => {
  //     if (name.length == 0) {
  //         Alert.alert('Warning!', 'Please write your data.')
  //     } else {
  //         try {
  //             var user = {
  //                 Name: name
  //             }
  //             await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
  //             Alert.alert('Success!', 'Your data has been updated.');
  //         } catch (error) {
  //             console.log(error);
  //         }
  //     }
  // }
    // 


      const LeftComponent = () => {
        return (
        <View style = {{flexDirection : 'row'}}>
            <Text
              style={{
              fontSize: 22,
              fontWeight: '600',
              color: '#333', }}>
             {name} 
          </Text>
        </View>
        );
      };

      const RightComponent = () => {
        return (
          <View style={{flexDirection: 'row', alignItems:'center',}}>
            <Pressable 
            style={styles.button} 
              onPress={() => {
                console.log('새 게시물 작성');
                navigation.navigate('FeedWriteScreen');
              }}
              style={{paddingRight: 15}}>
              <Icon style={styles.Icon} name='md-duplicate-outline' size={25} />
            </Pressable>
            <Pressable 
            style={styles.button} 
              onPress={() => {
                console.log('Setting 페이지로 이동');
                navigation.navigate('Setting')
              }} >
              <Icon style={styles.Icon} name='menu' size={30}/>
            </Pressable>
          </View>  
        );
      };

      useEffect(async () => {
        if (isFocused) {
          let data = await AsyncStorage.getItem('feedData');
          data = JSON.parse(data);
          console.log(data);
          setTempFeedList(data);
        }
      }, [isFocused]);

      useEffect(() => {
        let splitVal = [];
        if (tempFeedList.length > 0) {
          for (let i = 0; i < tempFeedList.length; i += 3) {
            console.log(i, i + 2);
            splitVal.push(tempFeedList.slice(i, i + 3));
          }
          console.log(splitVal);
          setSpliList(splitVal);
        }
      }, [tempFeedList, setTempFeedList]);

      return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <SafeAreaView />
          {/*  */}
          <Header
            leftComponent={<LeftComponent />}
            rightComponent={<RightComponent />}
          />
          <Separator/>
          {/*  */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 15,      
            }}>
          <View style={{
            // width: 70,
            // height: 70,
            // borderRadius: 60,
            // backgroundColor: 'lightgray',
            // marginRight: 8,
            }}>
            <Image 
            style = {{  width: 70,
              height: 70,
              borderRadius: 60,}}
            source = {require('../header/kmnsoo.jpg')}
            />      
           </View>  

          <View style = {{alignItems : 'center', flexGrow :1 ,flexShrink : 1, paddingLeft: 40, paddingTop: 10}}>    
          <View style = {{flexDirection: 'row',   paddingLeft: 15}}>
            <Text style = {styles.text1}>67</Text>
            <Text style = {styles.text1}>13.2M</Text>
            <Text style = {styles.text1}>142</Text>
          </View>

          <View style = {{flexDirection: 'row'}}>
            <Text style = {{alignItems: 'center',flexGrow: 1, flexShrink : 1,}}>게시물</Text>
            <Text style = {{alignItems: 'center',flexGrow: 1, flexShrink : 1,}}>팔로워</Text>
            <Text style = {{alignItems: 'center',flexGrow: 1, flexShrink : 1,}}>팔로잉</Text>
          </View>

            </View>
            </View>

            {/*  */}
            <View style = {{flexDirection: 'column', padding: 20}}>
              <Text style ={{fontWeight : '600'}}>
                강민수
              </Text>
              <Text>개발자</Text>
            </View>


            {/* <View style ={{paddingLeft: 28, paddingRight: 28, paddingBottom: 3}}>
              <Button color = "#000000" 
              title = "프로필 편집"
              onPress={() => {
                navigation.navigate('Setting')
              }}/>
            </View> */}

          <View style ={{paddingLeft: 15, paddingRight: 15}}>
          <Button  color = '#000'  
              title = "프로필 편집"
              onPress={() => {
                navigation.navigate('Setting')
              }}/>
            <View style ={styles.Profilebutton}>
              <Pressable style={{flex:1, backgroundColor:'#000',margin:1, alignItems:'center'}}><Text style={{color:'white'}}>광고 도구</Text></Pressable>
              <Pressable style={{flex:1, backgroundColor:'#000',margin:1, alignItems:'center'}}><Text style={{color:'white'}}>인사이트</Text></Pressable>
              <Pressable style={{flex:1, backgroundColor:'#000',margin:1, alignItems:'center'}}><Text style={{color:'white'}}>이메일</Text></Pressable>
            </View>
          </View>
            
          <FlatList
        showsVerticalScrollIndicator={false}
        data={feedList}
        renderItem={({item, index}) => (
          <Feed
            data={item}
            onPressIsLike={() => {
              let clone = [...feedList];
              let clone2 = {...clone[index]};
              clone2.isLike = !clone2.isLike;
              clone[index] = clone2;
              setFeedList(clone);
              
              <Icon style = {styles.Icon} name= {liked ? 'heart' : 'ios-heart-outline'}/> 

              console.log('asdaa');

            }}
            navigation = {navigation}
          />
        )}
        onEndReached={() => {
          setFeedList([...feedList, ...DATAS]);
        }}
        onEndReachedThreshold={0.7}
      />       

        </View>
      );
    };

    const styles = StyleSheet.create({
        Icon: {
          width:23,
          marginLeft:-3,
        },
      Profilebutton: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        marginBottom: 5,
        marginTop :3,
        height: 25
        },
        Separator:{
          marginVertical: 8,
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: '#737373'
        },
        text1 : {
          alignItems: 'center',
          flexGrow: 1, 
          flexShrink : 1,
          fontWeight: '600',
          fontSize: 15
        },
       
      });

    export default ProfileScreen;
    const DATAS = [
      {
        name: 'Kmnsoo',
        content:
          '내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용',
        images: [
          {
            url: 'https://via.placeholder.com/300',
          },
          {
            url: 'https://via.placeholder.com/200',
          },
        ],
        isLike: false,
      },
      {
        name: '두번째',
        content:
          '내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용',
        images: [
          {
            url: 'https://via.placeholder.com/300',
          },
        ],
        isLike: true,
      },
      {
        name: '세번째',
        content:
          '내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용',
        images: [
          {
            url: 'https://via.placeholder.com/300',
          },
        ],
        isLike: false,
      },
    ];
    