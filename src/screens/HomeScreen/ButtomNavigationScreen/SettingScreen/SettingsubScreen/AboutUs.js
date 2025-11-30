import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Animated,
  Image,
  Easing,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg, { Path, Polygon } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';

import AboutHero from '../../../../../assets/images/aboutHero.png';
import SpeakerHero from '../../../../../assets/images/speaker.png';
import BellHero from '../../../../../assets/images/bellIcon.png';
import { hp, wp } from '../../../../../utils/Functions/Responsive';
import colors from '../../../../../utils/Functions/colors';
import AboutVideo from '../../../../../components/aboutVideo/aboutVideo';
import ScreenWrapper from '../../../../../components/safeAreaViewWrapper/ScreenWrapper';
// import Features from '../../../../../components/aboutFeatures/aboutFeatures'

const { width } = Dimensions.get('window');

const AboutUs = () => {
  // Animated values
  const rotateDots = useRef(new Animated.Value(0)).current;
  const rotateAsterisk = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Dots animation
    Animated.loop(
      Animated.timing(rotateDots, {
        toValue: 1,
        duration: 8000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();

    // Asterisk animation
    Animated.loop(
      Animated.timing(rotateAsterisk, {
        toValue: 1,
        duration: 12000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();

    // Reset values for infinite looping
    return () => {
      rotateDots.setValue(0);
      rotateAsterisk.setValue(0);
    };
  }, []);

  const dotsRotation = rotateDots.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
    extrapolate: 'clamp',
  });

  const asteriskRotation = rotateAsterisk.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
    extrapolate: 'clamp',
  });

  return (
    <ScreenWrapper>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../../../../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Rotating Dots (Arranged in a circular path) */}
      <Animated.View
        style={[
          styles.dotsContainer,
          {
            transform: [{ rotate: dotsRotation }],
            top: 100, // Positioning below the header
            left: 50, // Adjust as needed to center the rotation
            zIndex: 0,
          },
        ]}
      >
        {/* First dot */}
        <View
          style={[
            styles.dot,
            { transform: [{ translateX: -30 }, { translateY: -30 }] },
          ]}
        />
        {/* Second dot */}
        <View
          style={[
            styles.dot,
            { transform: [{ translateX: 30 }, { translateY: -30 }] },
          ]}
        />
        {/* Third dot */}
        <View
          style={[
            styles.dot,
            { transform: [{ translateX: 0 }, { translateY: 30 }] },
          ]}
        />
      </Animated.View>

      <ScrollView style={styles.container} contentContainerStyle={{paddingBottom:'9%'}}>
        {/* Hero Section */}
        <View style={styles.heroContainer}>
          <Image source={AboutHero} style={styles.heroImage} />
          {/* <View style={styles.heroTextBox}>
            <Text style={styles.heroText}>
              SI-Print Specially designed to manage receipts and Invoice, Easy
              to use.
            </Text>
          </View> */}
        </View>

        {/* Text Section */}
        <View style={styles.textSection}>
          <View
            style={{
              backgroundColor: colors.golden,
              padding: wp(1.5),
              width: '80%',
              borderRadius: 5,
            }}
          >
            <Text style={{ fontSize: 12 }}>
              SI-Print - Receipt and Invoice Management
            </Text>
          </View>
          <Text style={styles.heading}>
            Ultimate solution for Receipt and Invoice Management
          </Text>
          <Text style={styles.paragraph}>
            Discover the ultimate solution for hassle-free shopping receipt and
            invoice management with Project SI-Print. Experience a Streamlined
            approach to storing, accessing, and handling your receipts online.No
            more paper clutter, no more lost documents - just effortless
            organization at your fingertips
          </Text>

          {[
            'Simplify Storage and Access',
            'Effortless Retrieval',
            'Seamless PDF Handling',
            'Stay Within Your Limit',
          ].map((item, idx) => (
            <View style={styles.listItem} key={idx}>
              <Icon name="check-circle" size={20} color="#000" />
              <Text style={styles.listText}>{item}</Text>
            </View>
          ))}
        </View>

        {/* Why Choose Us */}
        <View style={styles.whyChooseContainer}>
          {/* Zigzag Top */}
          <Svg
            height={10}
            width="100%"
            viewBox="0 0 100 5"
            preserveAspectRatio="none"
            style={styles.zigzagTop}
          >
            <Polygon
              points="
      0,5 2.5,2 5,5 7.5,2 10,5 
      12.5,2 15,5 17.5,2 20,5 
      22.5,2 25,5 27.5,2 30,5 
      32.5,2 35,5 37.5,2 40,5 
      42.5,2 45,5 47.5,2 50,5 
      52.5,2 55,5 57.5,2 60,5 
      62.5,2 65,5 67.5,2 70,5 
      72.5,2 75,5 77.5,2 80,5 
      82.5,2 85,5 87.5,2 90,5 
      92.5,2 95,5 97.5,2 100,5"
              fill="#111"
            />
          </Svg>

          {/* Video Section */}
          {/* <View style={styles.videoSection}> */}
          <AboutVideo />
          {/* <TouchableOpacity style={styles.playButton}>
              <Icon name="play" size={30} color="#fff" />
            </TouchableOpacity>
          </View> */}

          <View style={styles.whyChoose}>
            {/* Rotating Asterisk */}
            <Animated.View
              style={[
                styles.asterisk,
                { transform: [{ rotate: asteriskRotation }] },
              ]}
            >
              <Text style={{ fontSize: 80, color: '#eee' }}>*</Text>
            </Animated.View>

            {/* ✅ Added Wavy Line SVG before the heading */}
            <View style={styles.headingRow}>
              <Svg height={20} width={60} viewBox="0 0 100 20">
                <Path
                  d="M0 10 Q 10 0, 20 10 T 40 10 T 60 10 T 80 10 T 100 10"
                  fill="none"
                  stroke="#b56ff7"
                  strokeWidth="4"
                />
              </Svg>
              <Text style={styles.subHeading}>Why Choose Us</Text>
            </View>
            <Text style={[styles.paragraph, {color:'#fff', fontWeight:'700', lineHeight:30}]}>
              Experience receipt and invoice management with SI-Print.Say
              goodbye to paper clutter and hello to convenience.
            </Text>
            <View style={[styles.listItem, { marginVertical: '4%' }]}>
              <Image source={SpeakerHero} style={styles.featureIcon} />
              <View style={{ width: '70%' }}>
                <Text style={styles.featureTitle}>
                  Streamlined Organization:
                </Text>
                <Text style={styles.featureText}>
                  Centralize your receipts and invoices in one secure location.
                  Our user-friendly platform ensures easy access and management
                  whenever you need it
                </Text>
              </View>
            </View>
            <View style={styles.listItem}>
              <Image source={BellHero} style={styles.featureIcon} />
              <View style={{ width: '70%' }}>
                <Text style={styles.featureTitle}>PDF Made Simple:</Text>
                <Text style={styles.featureText}>
                  Easily handle PDF receipts – download, upload, and organize
                  seamlessly. Your sensitive data stays secure throughout the
                  process
                </Text>
              </View>
            </View>

            {/* Zigzag Bottom - Blunt Version */}
            <Svg
              height={10}
              width="100%"
              viewBox="0 0 100 5"
              preserveAspectRatio="none"
              style={styles.zigzagBottom}
            >
              <Polygon
                points="
      0,0 2.5,3 5,0 7.5,3 10,0 12.5,3 15,0 17.5,3 20,0 
      22.5,3 25,0 27.5,3 30,0 32.5,3 35,0 37.5,3 40,0 
      42.5,3 45,0 47.5,3 50,0 52.5,3 55,0 57.5,3 60,0 
      62.5,3 65,0 67.5,3 70,0 72.5,3 75,0 77.5,3 80,0 
      82.5,3 85,0 87.5,3 90,0 92.5,3 95,0 97.5,3 100,0
    "
                fill="#111"
              />
            </Svg>
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: { 
    // flex: 1,
     backgroundColor: '#ffffffbb' },
  header: {
    paddingHorizontal: wp(3),
    paddingVertical: hp(1),
    backgroundColor: '#FFFFFF',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: { elevation: 3 },
    }),
  },
  logo: { width: wp(30), height: hp(5) },
  heroContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  heroImage: {
    width: '100%',
    height: 330,
    borderRadius: 15,
    resizeMode: 'stretch',
  },
  heroTextBox: {
    position: 'absolute',
    bottom: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    width: '90%',
    opacity: 0.8,
  },
  heroText: { fontSize: 16, fontWeight: '500', textAlign: 'center' },
  textSection: { padding: 15, gap: 10 },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
    color: colors.blue,
    fontFamily: 'Poppins-Regular',
    letterSpacing: 1.5,
    width: '80%',
  },
  paragraph: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
    fontFamily: 'Poppins-Regular',
    lineHeight: 40,
  },
  listItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
  listText: { marginLeft: 10, fontSize: 15, fontWeight: '800' },
  videoSection: { alignItems: 'center', marginVertical: 20 },
  playButton: {
    backgroundColor: '#000',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whyChooseContainer: {
    backgroundColor: '#111',
    marginTop: 0,
    marginBottom: wp(2),
  },
  whyChoose: {
    padding: 15,
    backgroundColor: '#111',
    position: 'relative',
    paddingTop: 20,
    paddingBottom: 20,
  },

  featureIcon: {
    width: '30%',
    height: '100%',
    resizeMode: 'contain',
  },

  // ✅ New: Row containing wave and heading
  headingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  zigzagTop: { position: 'absolute', top: -10, left: 0, right: 0, zIndex: 10 },
  zigzagBottom: {
    position: 'absolute',
    bottom: -10,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  asterisk: { position: 'absolute', top: -20, right: 50 },
  dotsContainer: {
    position: 'absolute',
    flexDirection: 'row',
    top: 50, // Adjust as needed
    left: 70, // Adjust as needed
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: colors.pink,
    borderRadius: 50,
    position: 'absolute',
  },
  subHeading: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.blue,
    marginBottom: 10,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: '3.5%',
  },
  featureText: {
    fontSize: 14,
    color: '#eee',
    marginBottom: '7%',
    lineHeight: 27,
  },
});

export default AboutUs;
