import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import HeaderWithoutTitle from '../../components/HeaderWithoutTitle/HeaderWithoutTitle';
import { wp, hp } from '../../utils/Functions/Responsive';

const RegisteredEmail = () => {
  const [email, setEmail] = useState('');

  const handleGetOTP = () => {
    console.log('Get OTP for:', email);
  };

  return (
    <View style={styles.container}>
      <HeaderWithoutTitle />

      {/* Title */}
      <Text style={styles.title}>Enter Your Registered Email</Text>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          cursorColor={'#8B4513'}
          autoComplete="email"
        />
      </View>

      {/* Get OTP Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleGetOTP}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Get OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisteredEmail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: wp(5), // responsive font size
    fontWeight: '700',
    color: '#8B4513',
    paddingHorizontal: wp(3),
    fontFamily:"poppins_bold",
    marginBottom: hp(2),
  },
  inputContainer: {
    paddingHorizontal: wp(5),
    marginBottom: hp(3),
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#8B4513',
    borderRadius: wp(3),
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.8),
    fontSize: wp(4),
    color: '#333',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#8B4513',
    alignSelf: 'center', // make button size wrap its content
    paddingVertical: hp(2),
    paddingHorizontal: wp(12), // control width with padding
    borderRadius: wp(3),
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: wp(4),
    fontWeight: '600',
  },
});
