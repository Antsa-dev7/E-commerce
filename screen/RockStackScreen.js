import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import SettingScreen from './SettingScreen';
import UserScreen from './User/HomeScreen/Index';
import AdminScreen from './Admin/HomeScreen/Index2';

const RootStack = createStackNavigator();
const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="SignInScreen" component={SignInScreen} />
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
        <RootStack.Screen name="SettingScreen" component={SettingScreen} />
        <RootStack.Screen name="User" component={UserScreen} />
        <RootStack.Screen name="Admin" component={AdminScreen} />
    </RootStack.Navigator>
);

export default RootStackScreen;
