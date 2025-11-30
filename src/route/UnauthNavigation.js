import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RegisteredEmail from '../screens/UnauthScreens/RegisteredEmail';
import Login from '../screens/UnauthScreens/Login/Login';
import OtpScreen from '../screens/UnauthScreens/OtpScreen/OtpScreen';


const Stack = createNativeStackNavigator();

const UnauthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="RegisteredEmail" component={RegisteredEmail} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
  
    </Stack.Navigator>
  );
};

export default UnauthNavigation;
