import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/HomeScreen/ButtomNavigationScreen/Home/Home';
import AboutUs from '../screens/HomeScreen/ButtomNavigationScreen/SettingScreen/SettingsubScreen/AboutUs';
import ContactUs from '../screens/HomeScreen/ButtomNavigationScreen/SettingScreen/SettingsubScreen/ContactUs';
import ProfileScreen from '../screens/HomeScreen/ButtomNavigationScreen/SettingScreen/SettingsubScreen/ProfileScreen';
import Sms from '../screens/HomeScreen/ButtomNavigationScreen/Sms/Sms';
import Setting from '../screens/HomeScreen/ButtomNavigationScreen/SettingScreen/Setting';
import Notifications from '../screens/HomeScreen/ButtomNavigationScreen/Notification/Notifiction';
import Wallet from '../screens/HomeScreen/ButtomNavigationScreen/SettingScreen/SettingsubScreen/WolletScreen';
import TermsConditions from '../screens/HomeScreen/ButtomNavigationScreen/SettingScreen/SettingsubScreen/TermsConditions';
import PrivacyPolicy from '../screens/HomeScreen/ButtomNavigationScreen/SettingScreen/SettingsubScreen/PrivacyPolicy';
import VerifyMobileNumberScreen from '../screens/HomeScreen/ButtomNavigationScreen/SettingScreen/SettingsubScreen/VerifyMobileNumber';
import EditDocumentScreen from '../screens/HomeScreen/ButtomNavigationScreen/EditDocumentScreen/EditDocumentScreen';
const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false, // hide header if you want
      }}
    >

      
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AboutUs" component={AboutUs} />
      <Stack.Screen name="ContactUs" component={ContactUs} />
      <Stack.Screen name="SMS" component={Sms} />
      <Stack.Screen name="Settings" component={Setting} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen name="TermsConditions" component={TermsConditions} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen
        name="VerifyMobileNumber"
        component={VerifyMobileNumberScreen}
      />
      <Stack.Screen name="EditDocumentScreen" component={EditDocumentScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
