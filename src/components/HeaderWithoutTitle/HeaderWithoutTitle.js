import React from 'react';
import { View, Image, StyleSheet, Platform } from 'react-native';
import { wp, hp } from '../../utils/Functions/Responsive'; // adjust relative path as per your folder structure

const HeaderWithoutTitle = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

export default HeaderWithoutTitle;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(2.3),
    backgroundColor: '#FFFFFF',

  },
  logo: {
    width: wp(30),
    height: hp(5),
  },
});
