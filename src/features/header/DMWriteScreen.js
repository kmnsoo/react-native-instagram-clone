import React from 'react';
import {View, Pressable, Text, SafeAreaView, BackHandler, StyleSheet} from 'react-native';
import Header from '../header/Header';
import Icon from 'react-native-vector-icons/Ionicons';

const DMWriteScreen = ({navigation}) => {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <SafeAreaView style={{backgroundColor: 'white'}} />
        <Header
          transparent={true}
          leftComponent={     
            <View style = {{flexDirection : 'row', alignItems:'center',}}>
              <View>
                <View>
                 <Pressable 
                 style={styles.button} 
                   onPress={() => {
                    navigation.goBack()
                   }}>
                   <Icon style = {styles.Icon} name='chevron-back' size={25}/>
                 </Pressable >
               </View>
                </View>
                   <Text
                 style={{
                   fontSize: 18,
                   fontWeight: '600',
                   color: '#333',
                   textAlign:"center"
              
                 }}>
                 새 메시지
               </Text>
               </View>
             }
          
          rightComponent={
            <View style={{flexDirection: 'row'}}>
              <Pressable
                onPress={() => {
                  console.log('오른쪽버튼');
                  navigation.goBack()

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
    },
    button : {
      flexDirection: 'row',
    
    }
  });
  
  export default DMWriteScreen;
  