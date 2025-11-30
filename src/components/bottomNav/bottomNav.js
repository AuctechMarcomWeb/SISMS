import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native'; // ✅ Import navigation hooks
import styles from './bottomnavStyles';

const { width } = Dimensions.get('window');

const tabs = [
  { name: 'Home', icon: 'home-outline', route: 'Home' },
  { name: 'SMS', icon: 'chatbox-ellipses-outline', route: 'SMS' },
  { name: 'Notifications', icon: 'notifications-outline', route: 'Notifications' },
  { name: 'Settings', icon: 'settings-outline', route: 'Settings' },
];

const BottomNav = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // Find initial active tab based on current screen
  const initialIndex = tabs.findIndex(tab => tab.route === route.name) || 0;

  const [activeTab, setActiveTab] = useState(initialIndex);
  const slideAnim = useRef(new Animated.Value(initialIndex * (width / tabs.length))).current;
  const tabWidth = width / tabs.length;

  useEffect(() => {
    // Update when screen changes (important if navigation is triggered elsewhere)
    const currentIndex = tabs.findIndex(tab => tab.route === route.name);
    if (currentIndex !== -1) {
      setActiveTab(currentIndex);
      Animated.spring(slideAnim, {
        toValue: currentIndex * tabWidth,
        useNativeDriver: true,
        friction: 14,
        tension: 80,
      }).start();
    }
  }, [route.name]);

  const onTabPress = index => {
    setActiveTab(index);

    Animated.spring(slideAnim, {
      toValue: index * tabWidth,
      useNativeDriver: true,
      friction: 14,
      tension: 80,
    }).start();

    navigation.navigate(tabs[index].route); // ✅ Navigate to screen
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.bottomNav}>
        <Animated.View
          style={[
            styles.activeTabBackground,
            {
              width: tabWidth - 10,
              transform: [{ translateX: slideAnim }],
            },
          ]}
        />

        {tabs.map((tab, index) => {
          const isActive = activeTab === index;
          return (
            <TouchableOpacity
              key={index}
              style={[styles.tabItem, { width: tabWidth }]}
              onPress={() => onTabPress(index)}
              activeOpacity={0.8}
            >
              <View style={styles.iconAndTextRow}>
                <Icon
                  name={tab.icon}
                  size={21}
                  color={isActive ? '#fff' : '#000'}
                  style={styles.tabIcon}
                />
                {isActive && (
                  <Text
                    style={[styles.tabText, { color: '#fff' }]}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {tab.name}
                  </Text>
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default BottomNav;
