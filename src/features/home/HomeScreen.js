import {useIsFocused} from '@react-navigation/core';
import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import { View,Pressable, Text, SafeAreaView, FlatList, Dimensions, StyleSheet, Modal, TouchableOpacity, Image, AsyncStorage,} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Carousel, {Pagination} from 'react-native-snap-carousel';
import Header from '../header/Header';
import Feed from './Feed';



const HomeScreen = ({navigation, route}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [feedList, setFeedList] = useState(DATAS);
  const [liked, setLiked] = useState(false);

  const isFocused = useIsFocused();




  
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

  const LeftComponent = () => {
    return (
      <View style = {{flexDirection : 'row',  }}>
            <View>
              <View>
               <Pressable 
               style={styles.button} 
                 onPress={() => {
                         }}
                 style={{paddingRight: 7, }}> 
                 {/* <View style={{width: 24, height: 24, backgroundColor: 'black'}} /> */}
                 <Icon style = {styles.Icon} name='logo-instagram' size={25}/>
               </Pressable >
             </View>
              </View>
               <Text style={{ fontSize: 22, fontWeight: '600', color: '#333', top: -3}}>Instagram</Text>
             </View>
    );
  };



  const RightComponent = () => {
    return (
      
      <View style={{flexDirection: 'row', }}>
        <Pressable 
        style={styles.button} 
          onPress={() => {
            console.log('새 게시물 작성');
            navigation.navigate('FeedWriteScreen');
          }}
          style={{padding: 7}}>
           <Icon style={styles.Icon} name='md-duplicate-outline' size={25} />
        </Pressable>
        <Pressable 
        style={styles.button} 
          onPress={() => {
            console.log('좋아요 페이지로 이동');
            navigation.navigate('LikeScreen');
          }}
          style={{padding: 7}}>
           <Icon style={styles.Icon} name='ios-heart-outline' size={25}/>
        </Pressable>
        <Pressable 
        style={styles.button} 
          onPress={() => {
            console.log('DM 페이지로 이동');
            navigation.navigate('DMScreen');
          }}
          style={{padding: 7}}>
           <Icon style={styles.Icon} name='ios-paper-plane-outline' size={25}/>
        </Pressable>
      </View>
    );
  };
  //
  return (
    <View
      style={{
        flex: 1,
      }}>
      <SafeAreaView style={{backgroundColor: 'white'}} />
      <Header
        leftComponent={<LeftComponent />}
        rightComponent={<RightComponent />}
      />
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
      {/*  */}
      <Modal visible={modalVisible} transparent={true}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(false);
          }}
          activeOpacity={1}
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}>
          <View style={{backgroundColor: 'white'}}>
            <Text>신고</Text>
            <Text>신고</Text>
            <Text>신고</Text>
            <Text>신고</Text>
            <Text>신고</Text>
            <Text>신고</Text>
            <SafeAreaView />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
  Icon: {
    width:23,
    marginLeft:-3,
  },
  button: {
    // position :'absolute',
    // left: 0,
    // top: 0
  }
});

export default HomeScreen;

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
