import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import NormalHeader from '../../../../../components/NormalHeader/NormalHeader';
import { wp, hp } from '../../../../../utils/Functions/Responsive';
// import { Layout } from 'react-native-reanimated';
import ScreenWrapper from '../../../../../components/safeAreaViewWrapper/ScreenWrapper';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <NormalHeader title={'Contact Us'} />

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <Text style={styles.heading}>Get in Touch</Text>

          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={formData.name}
              cursorColor={'#8B4513'}
              onChangeText={value => handleInputChange('name', value)}
              placeholderTextColor="#999"
            />

            <TextInput
              style={styles.input}
              placeholder="Email"
              value={formData.email}
              cursorColor={'#8B4513'}
              onChangeText={value => handleInputChange('email', value)}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor="#999"
            />

            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              value={formData.phone}
              cursorColor={'#8B4513'}
              onChangeText={value => handleInputChange('phone', value)}
              keyboardType="phone-pad"
              placeholderTextColor="#999"
            />

            <TextInput
              style={[styles.input, styles.messageInput]}
              placeholder="How can we help you?"
              value={formData.message}
              onChangeText={value => handleInputChange('message', value)}
              multiline={true}
              cursorColor={'#8B4513'}
              numberOfLines={6}
              textAlignVertical="top"
              placeholderTextColor="#999"
            />

            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
            >
              <Text style={styles.submitButtonText}>Submit Request</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    // flex: 1,
    paddingHorizontal: wp(5),
  },
  heading: {
    fontSize: wp(6), // Responsive heading
    fontFamily: 'poppins_bold',
    fontWeight: '500',
    color: '#8B4513',
    textAlign: 'center',
    marginVertical: hp(4),
  },
  formContainer: {
    marginBottom: hp(5),
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#8B4513',
    borderRadius: wp(3),
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.8),
    fontSize: wp(4),
    marginBottom: hp(2),
    color: '#000',
  },
  messageInput: {
    height: hp(18),
    paddingTop: hp(1.5),
  },
  submitButton: {
    backgroundColor: '#8B4513',
    borderRadius: wp(3),
    paddingVertical: hp(2),
    alignItems: 'center',
    marginTop: hp(2.5),
  },
  submitButtonText: {
    color: '#fff',
    fontSize: wp(4.5),
    fontWeight: '600',
  },
});
