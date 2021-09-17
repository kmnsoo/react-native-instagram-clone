import React from 'react';
import {View, Pressable, Text, SafeAreaView, BackHandler} from 'react-native';
import Header from '../header/Header';




const DMScreen = ({navigation}) => {
    
  return (
    <View
      style={{
        flex: 1,
      }}>
      <SafeAreaView style={{backgroundColor: 'white'}} />
      <Header
        transparent={false}
        headerTruncateBackTitle 
        leftComponent={     
       <View style = {{flexDirection : 'row'}}>
         <View>
           <View style={{flexDirection: 'row'}}>
            <Pressable
              onPress={() => {
               navigation.goBack()
              }}
              style={{padding: 4, paddingRight: 0}}>
              <View style={{width: 24, height: 24, backgroundColor: 'pink'}} />
            </Pressable>
          </View>
           </View>
              <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: '#333',
            }}>
            DM
          </Text>
          </View>
        }
        rightComponent={
          <View style={{flexDirection: 'row'}}>
            <Pressable
              onPress={() => {
                console.log('오른쪽버튼');
              }}
              style={{padding: 4, paddingRight: 0}}>
              <View style={{width: 24, height: 24, backgroundColor: 'pink'}} />
            </Pressable>
          </View>
        }
      />
    </View>
  );
};

export default DMScreen;
