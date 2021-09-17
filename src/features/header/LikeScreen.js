import React from 'react';
import {View, Pressable, Text, SafeAreaView, StyleSheet} from 'react-native';
import Header from '../header/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LikeScreen = ({navigation}) => {

  return (
    <View style={{ flex: 1, }}>
      <SafeAreaView style={{backgroundColor: 'white'}} />
      <Header
        transparent={true}
        leftComponent={     
          <View style = {{flexDirection : 'row'}}>
            <View>
              <View>
               <Pressable 
               style={styles.button} 
                 onPress={() => {
                  navigation.goBack()
             
                 }}
                 
                 style={{padding: 4, paddingRight: 10}}>
                 {/* <View style={{width: 24, height: 24, backgroundColor: 'black'}} /> */}
                 <Icon style = {styles.Icon} name='close' size={25}/>
               </Pressable >
             </View>
              </View>
                 <Text
               style={{
                 fontSize: 18,
                 fontWeight: '600',
                 color: '#333',
               }}>
               좋아요
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
const styles = StyleSheet.create({
  Icon:{
    width: 30
  }
});
export default LikeScreen;
