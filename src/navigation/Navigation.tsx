import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { navigationRef } from "../utils/NavigationUtil";
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import LevelScreen from '../screens/LevelScreen';
import GameScreen from '../screens/GameScreen';
import { SoundProvider } from './SoundContext';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <SoundProvider>
      <NavigationContainer ref = {navigationRef}>
        <Stack.Navigator screenOptions={{ headerShown: false}} initialRouteName='SplashScreen'>
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ animation: "fade"}}/>
            <Stack.Screen name='LevelScreen' component={LevelScreen} options={{ animation: "fade"}}/>
            <Stack.Screen name='GameScreen' component={GameScreen} options={{ animation: "fade"}}/>
            <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ animation: "fade"}}/>
        </Stack.Navigator>
    </NavigationContainer>
    </SoundProvider>
  )
}

export default Navigation;