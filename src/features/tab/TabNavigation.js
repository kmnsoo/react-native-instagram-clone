import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../home/HomeScreen';
import SearchScreen from '../search/SearchScreen';
import ReelsScreen from '../reels/ReelsScreen';
import ProfileScreen from '../Profile/ProfileScreen';

import Icon from 'react-native-vector-icons/Ionicons';
import { Button , StyleSheet, TouchableOpacity, Text, View} from "react-native";

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} 
       options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <Icon style={styles.Icon} name='md-home-outline' size={28} />
        ),
      }}/>
      <Tab.Screen name="SearchScreen" component={SearchScreen} 
         options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Icon style={styles.Icon} name='ios-search-outline' size={28} />
          ),
        }}/>
       <Tab.Screen name="Reels" component={ReelsScreen} 
     options={{
      tabBarLabel: '',
      tabBarIcon: ({ color, size }) => (
        <Icon style={styles.Icon} name='ios-caret-forward-circle-outline' size={28} />
      ),
    }}/>
      <Tab.Screen name="Shop" component={SearchScreen} 
      options={{
      tabBarLabel: '',
      tabBarIcon: ({ color, size }) => (
        <Icon style={styles.Icon} name='ios-briefcase-outline' size={28} />
      ),
    }}/>
      <Tab.Screen name="My" component={ProfileScreen}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <Icon style={styles.Icon} name='person-outline' size={28} />
        ),
      }}/>
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({

  Icon: {
    
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    padding: 2
    
  }
});


export default TabNavigation;
