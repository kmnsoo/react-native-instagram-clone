import React from 'react';
import {View, Pressable, Text, SafeAreaView, StyleSheet} from 'react-native';
import Header from '../header/Header';
import Icon from 'react-native-vector-icons/Ionicons';

const LikeScreen = ({navigation}) => {

  return (
    <View style={{ flex: 1, }}>
      <SafeAreaView style={{backgroundColor: 'white'}} />
      <Header
        transparent={true}
        leftComponent={     
          <View style = {{flexDirection : 'row', alignItems:'center', marginLeft: -5}}>
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
               }}>
               활동
             </Text>
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
