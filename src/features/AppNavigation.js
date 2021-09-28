import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import TabNavigation from './tab/TabNavigation';
import FeedWriteScreen from './home/FeedWriteScreen';
import LikeScreen from './header/LikeScreen';
import DMScreen from './header/DMScreen';
import DMWriteScreen from './header/DMWriteScreen';
import Settings  from './Profile/Setting';
import SettingScreen from './Profile/Setting';
// import ProfileScreen from './Profile/ProfileScreen';


const AppNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainScreen" component={TabNavigation} />
        <Stack.Screen name="FeedWriteScreen" component={FeedWriteScreen} />
        <Stack.Screen name="LikeScreen" component={LikeScreen} />
        <Stack.Screen name="DMScreen" component={DMScreen} />
        <Stack.Screen name="DMWriteScreen" component={DMWriteScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        {/* <Stack.Screen name="ProfileScreen" component={ProfileScreen} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
