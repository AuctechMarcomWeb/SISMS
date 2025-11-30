import React from 'react';
import { View, Text, Image, StyleSheet, Platform } from 'react-native';
import { wp, hp } from '../../utils/Functions/Responsive'; // adjust relative path as per your folder structure

const NormalHeader = ({ title }) => {
  return (
    <>
      {/* Top Logo Bar */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Title Bar */}
      <View style={styles.titleBar}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </>
  );
};

export default NormalHeader;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(2.3),
    backgroundColor: '#FFFFFF',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  logo: {
    width: wp(30),
    height: hp(5),
  },
  titleBar: {
    backgroundColor: '#efe5c2',
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(4),
  },
  titleText: {
    fontFamily: 'poppins_bold',
    fontSize: wp(6.5),
    fontWeight: '700',
    color: '#727271',
  },
});
