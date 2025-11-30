import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import styles from './OtpScreenStyle';
import InputBoxContainer from '../../../components/InputBoxContainer/InputBoxContainer';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import { VerifyOTP } from '../../../API/unauthAPI/unauthAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login, setToken, setUser } from '../../../redux/slices/authSlice';
import ScreenWrapper from '../../../components/safeAreaViewWrapper/ScreenWrapper';

const OtpScreen = ({ route }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const prevUser = useSelector(state => state.auth.user);  // ✔ correct usage
  const { otpsend, phone } = route?.params || {};

  const [user_otp, setUserOtp] = useState("");

  const handleLogin = async () => {
    try {
      const response = await VerifyOTP({ phone, user_otp });
      const token = response?.data?.api_token;
      const userId = response?.data?.id?.toString();

      if (token) {
        await AsyncStorage.multiSet([
          ["token", token],
          ["userId", userId],
        ]);

        dispatch(
          login({
            token,
            userId,
            user: {
              ...prevUser,   // merge previously saved phone
              id: userId,
            },
          })
        );
      } else {
        Alert.alert("Invalid OTP", "Please try again");
      }
    } catch (error) {
      console.log("Error verifying OTP", error);
      Alert.alert("Error", "Something went wrong");
    }
  };

  return (
    <ScreenWrapper>
      <SafeAreaView>
        {/* <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
    > */}
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Header with Logo */}
          {/* <View style={styles.header}>
          <Image
            source={require('../../../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View> */}

          <View style={styles.mainContent}>
            {/* Illustration */}
            <View style={styles.illustrationContainer}>
              <Image
                source={require('../../../assets/images/login_img.png')}
                style={styles.illustration}
                resizeMode="contain"
              />
            </View>

            {/* Title Text */}
            <View style={styles.textContainer}>
              <Text style={styles.title}>Get organised. Make life easier.</Text>
              <Text style={styles.subtitle}>Never lose your Documents.</Text>
            </View>

            {/* Input Box */}
            <View style={styles.dotsContainer}>
              <InputBoxContainer onChangeOtp={text => setUserOtp(text)} />
            </View>
            {otpsend && (
              <Text
                style={{
                  marginBottom: 10,
                  fontSize: 18,
                  fontWeight: '300',
                  color: 'green',
                }}
              >
                OTP: {otpsend}
              </Text>
            )}

            {/* Login Button */}
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ScreenWrapper>
  );
};

export default OtpScreen;
