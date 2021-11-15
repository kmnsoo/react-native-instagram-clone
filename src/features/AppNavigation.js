import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TabNavigation from './tab/TabNavigation';
import FeedWriteScreen from './home/FeedWriteScreen';
import LikeScreen from './header/LikeScreen';
import DMScreen from './header/DMScreen';
import DMWriteScreen from './header/DMWriteScreen';
import SettingScreen from './Profile/Setting';
import Login from'./home/Login';
import HomeScreen from './home/HomeScreen';
import Feed from'./home/Feed';

const AppNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false, }}/>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MainScreen" component={TabNavigation} />
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="FeedWriteScreen" component={FeedWriteScreen} />
      <Stack.Screen name="LikeScreen" component={LikeScreen} />
      <Stack.Screen name="DMScreen" component={DMScreen} />
      <Stack.Screen name="DMWriteScreen" component={DMWriteScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
