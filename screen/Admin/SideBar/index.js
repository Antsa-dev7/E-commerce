
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "../Home/HomeScreen"; 
import SettingScreen from "../SettingScreen/SettingsScreen"; 
import CommandeScreen from "../CommandeScreen/CommandeScreen"; 
import Sidebar from "./DrawerContent"; 
const Stack = createStackNavigator();

const Index = () =>{
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Settings" component={SettingScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Index;
