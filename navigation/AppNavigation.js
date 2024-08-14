import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreens from '../screens/HomeScreens';
import StoreScreens from '../screens/StoreScreens';
const AppNavigation = () => {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <stack.Navigator initialRouteName="HomeScn">
        <stack.Screen
          options={{headerShown: false, statusBarTranslucent: true}}
          name="HomeScn"
          component={HomeScreens}
        />
        <stack.Screen name="StoreScn" component={StoreScreens} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
