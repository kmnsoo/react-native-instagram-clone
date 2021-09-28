import React from 'react';
import {useState} from 'react';
import {View, Pressable, Text, Dimensions, Image, StyleSheet, Alert} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../header/Header';
import Profile from '../Profile/ProfileScreen';
import TabNavigation from '../tab/TabNavigation';


const Feed = ({ data, onPressIsLike, navigation}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [lastPress, setLastPress] = useState(0);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const createThreeButtonAlert = () =>
  Alert.alert(
    "Alert Title",
    "My Alert Msg",
    [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed")
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );

  return (
    <View style={{backgroundColor: 'white'}}>
      {/*  */}
      
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 8,
          paddingLeft: 16,
          paddingRight: 16,
         
        }}>
        <View
          style={{
            width: 32,
            height: 32,
            borderRadius: 32,
            backgroundColor: 'lightgray',
            marginRight: 8,
          }}
        />
      
      <Pressable       
        style={{flexGrow: 1, flexShrink: 1, justifyContent: 'center', }}
          onPress={() => {
            navigation.navigate('My');
            console.log('작성자 프로필로 가기');
          }}>
          <Text>{data.name}</Text>
        </Pressable>
        
        <Pressable
        style={styles.button} 
          onPress={() => {
            {createThreeButtonAlert}
            console.log('모달 띄우기');
            setModalVisible(true);

          }}
         >
           <Icon style = {styles.Icon} name='ellipsis-horizontal' size={25}/>
        </Pressable>
      </View>
      
      {/*  */}
      <View
        style={{
          position: 'absolute',
          top: 58,
          right: 10,
          zIndex: 10,
          backgroundColor: 'rgba(0,0,0,0.3)',
          padding: 4,
          paddingLeft: 8,
          paddingRight: 8,
          borderRadius: 20,
        }}>
        <Text style={{fontSize: 12, color: 'black'}}>
          {activeSlide + 1} / {data.images.length}
        </Text>
      </View>
     
      <Carousel
        data={data.images}
        renderItem={({item, index}) => {
          return (
            <Pressable
              onPress={() => {
                let delta = new Date().getTime() - lastPress;
                if (delta < 200) {
                  setLiked((isLiked)  => ! isLiked)
                }
                setLastPress(new Date().getTime());
              }}>
              <Image
                style={{
                  width: Dimensions.get('screen').width,
                  height: Dimensions.get('screen').width,
                }}
                source={{
                  uri: item.url,
                }}
              />
            </Pressable>
          );
        }}
        sliderWidth={Dimensions.get('screen').width}
        itemWidth={Dimensions.get('screen').width}
        onSnapToItem={index => {
          setActiveSlide(index);
        }}
      />
      {/*  */}
      <View
        style={{
          flexDirection: 'row',
          padding: 8,
          paddingLeft: 16,
          paddingRight: 16,
          
        }}>
    <View>
     <Pressable
         style={{marginRight: 8}}
         onPress = {() => setLiked((isLiked)  => ! isLiked)}>
      <Icon style = {styles.Icon} name= {liked ? 'heart' : 'ios-heart-outline'} size={25}/> 
      </Pressable>
     </View>


        {[1].map((inItem, index) => {
          return (
            <View>
            <Pressable 
            style={{marginRight: 8}}
            onPress={() => {
              console.log('댓글 남기기');
            }}>
              {/* <View
                style={{
                  width: 24,
                  height: 24,
                  backgroundColor: 'black',
                }}
              /> */}
       <Icon style = {styles.Icon} name='ios-chatbubble-outline' size={25}/>

            </Pressable>
            </View>
          );
        })}
        {[2].map((inItem, index) => {
          return (
            <View>
            <View>
            <Pressable 
            style={{marginRight: 8}}
            onPress={() => {
              console.log('DM보내기');
              navigation.navigate('DMScreen');
            }}>
              {/* <View
                style={{
                  width: 24,
                  height: 24,
                  backgroundColor: 'grey',
                }}
              /> */}
           <Icon style = {styles.Icon} name='ios-paper-plane-outline' size={25}/>

            </Pressable>
            </View>
            </View>
          );
        })}
        <View style={{flexGrow: 1, flexShrink: 1, alignItems: 'center'}}>
          <Pagination
            dotsLength={data.images.length}
            activeDotIndex={activeSlide}
            containerStyle={{
              // backgroundColor: 'rgba(0, 0, 0, 0.75)',
              marginHorizontal: -11,
              marginVertical: -25,
              width: 10,
            }}
            dotStyle={{
              width: 6,
              height: 6,
              borderRadius: 6,
              marginHorizontal: -11,
              backgroundColor: 'black',
              marginVertical: 5,
            }}
            inactiveDotStyle={{
              backgroundColor: 'gray',
            }}
            inactiveDotOpacity={1}
            inactiveDotScale={0.8}
          />
        </View>
        {/*  */}
        {[1, 2, 3].map((item, index) => {
          if (item == 3) {
            return (
           <View>
              <Pressable
                style={{marginLeft: 8}}
                onPress = {() => setBookmarked((isBookmarked)  => ! isBookmarked)}>
               {/* <Icon style = {styles.Icon} name='bookmark-outline' size={25}/> */}
             <Icon style = {styles.Icon} name= {bookmarked ? 'bookmark' : 'bookmark-outline'} size={25}/> 
            </Pressable>
          </View>
            );
          } else {
            return (
              <Pressable
                style={{marginLeft: 8}}
                onPress={() => {
                  console.log('저장하기??');
                }}>
                <View
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />
              </Pressable>
            );
          }
        })}
      </View>
      {/*  */}
      <View style={{padding: 8, paddingLeft: 16, paddingRight: 16}}>
        <Text>{data.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Icon:{
    width: 30,
    
  }
});

export default Feed;
