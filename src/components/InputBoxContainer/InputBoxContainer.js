
import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import styles from './InputBoxContainerStyle';

const OtpInputContainer = ({ 
  length = 6, 
  onComplete, 
  onChangeOtp,
  autoFocus = true 
}) => {
  const [otp, setOtp] = useState(new Array(length).fill(''));
  const inputRefs = useRef([]);

  const handleChangeText = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    
    // Call onChangeOtp callback with current OTP
    if (onChangeOtp) {
      onChangeOtp(newOtp.join(''));
    }

    // Auto-focus next input
    if (text && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Check if OTP is complete
    if (newOtp.every(digit => digit !== '') && onComplete) {
      onComplete(newOtp.join(''));
    }
  };

  const handleKeyPress = (e, index) => {
    // Handle backspace
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleFocus = (index) => {
    // Clear current input on focus for better UX
    if (otp[index]) {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
      
      if (onChangeOtp) {
        onChangeOtp(newOtp.join(''));
      }
    }
  };

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={(ref) => (inputRefs.current[index] = ref)}
          style={[
            styles.input,
            digit ? styles.inputFilled : styles.inputEmpty
          ]}
          value={digit}
          onChangeText={(text) => handleChangeText(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          onFocus={() => handleFocus(index)}
          keyboardType="numeric"
          maxLength={1}
          cursorColor={"#8B4513"}
          autoFocus={index === 0 && autoFocus}
          selectTextOnFocus
          textAlign="center"
        />
      ))}
    </View>
  );
};

export default OtpInputContainer;