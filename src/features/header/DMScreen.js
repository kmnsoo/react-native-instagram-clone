import React from 'react';
import {View, Pressable, Text, SafeAreaView, BackHandler, StyleSheet, Image} from 'react-native';
import Header from '../header/Header';
import Icon from 'react-native-vector-icons/Ionicons';



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
            DM
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
      <View >
       
      </View>
    </View>
   
  );
};

const styles = StyleSheet.create({
  Icon:{
    width: 30
  }
});

export default DMScreen;
