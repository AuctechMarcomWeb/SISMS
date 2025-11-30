import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import OtpInputContainer from '../../../../../components/InputBoxContainer/InputBoxContainer';
import { hp, wp } from '../../../../../utils/Functions/Responsive';
import ScreenWrapper from '../../../../../components/safeAreaViewWrapper/ScreenWrapper';

const VerifyMobileNumberScreen = ({ route }) => {
  const { phone } = route?.params || '';
  const [mobileNumber, setMobileNumber] = useState(phone);
  const [otp, setOtp] = useState('');

  return (
    <ScreenWrapper>
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require('../../../../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.header}>Enter new mobile number</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.countryCode}>+91</Text>
        <TextInput
          style={styles.mobileInput}
          placeholder="Enter mobile number"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          keyboardType="phone-pad"
        />
      </View>

      <Text style={styles.otpLabel}>OTP</Text>
      {/* <View style={styles.otpInputContainer}>
        {[...Array(6)].map((_, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            maxLength={1}
            keyboardType="number-pad"
            value={otp[index]}
            onChangeText={text => {
              const otpArray = otp.split('');
              otpArray[index] = text;
              setOtp(otpArray.join(''));
            }}
          />
        ))}
      </View> */}
      <View style={styles.dotsContainer}>
        <OtpInputContainer />
      </View>

      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateButtonText}>Update</Text>
      </TouchableOpacity>
    </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    backgroundColor: 'white',
    gap: 10,
  },
  headerContainer: {
    backgroundColor: '#ffffff',
    // paddingTop: hp(2),
    paddingHorizontal: wp(2),
  },
  logo: {
    width: wp(30),
    height: hp(5),
  },
  header: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: '10%',
    color: '#6A4C3C',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#8B4513',
    borderRadius: wp(1.9),
    backgroundColor: '#FAFAFA',
    paddingHorizontal: wp(2),
    height: hp(7),
    marginBottom: hp(1.5),
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.08,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  countryCode: {
    fontSize: wp(4.2),
    color: '#8B4513',
    fontWeight: Platform.OS === 'ios' ? '900' : 'bold',
    marginRight: wp(4),
    marginLeft: wp(3),
  },
  mobileInput: {
    flex: 1,
    fontSize: wp(4.2),
    color: '#333333',
    fontWeight: Platform.OS === 'ios' ? '500' : 'normal',
    paddingLeft: wp(2),
    paddingVertical: Platform.OS === 'android' ? hp(1.5) : 0,
  },
  otpLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6A4C3C',
    marginBottom: 10,
    textAlign: 'center',
  },
  otpInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    width: 40,
    height: 40,
    textAlign: 'center',
    fontSize: 18,
  },
  updateButton: {
    backgroundColor: '#8B4513',
    paddingHorizontal: wp(10),
    paddingVertical: hp(1.8),
    alignSelf: 'center', // make button size wrap its content
    borderRadius: wp(4),
    marginBottom: hp(2),
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#8B4513',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  updateButtonText: {
    color: 'white',
    fontSize: 16,
  },
  dotsContainer: {
    alignItems: 'center',
    marginBottom: hp(5),
    gap: wp(2.5),
  },
});

export default VerifyMobileNumberScreen;
