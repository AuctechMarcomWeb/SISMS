import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';

import SplashScreen from '../screens/UnauthScreens/SplashScreen';
import AuthNavigation from './AuthNavigation';
import UnauthNavigation from './UnauthNavigation';

import { setToken, setUser, setUserId } from '../redux/slices/authSlice';
import { FetchUserDetails } from '../API/authAPI/authAPI';

const RootNavigation = () => {
  const { token } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const restore = async () => {
      const savedToken = await AsyncStorage.getItem('token');
      const savedUserId = await AsyncStorage.getItem('userId');

      console.log('📦 savedToken =>', savedToken);
      console.log('👤 savedUserId =>', savedUserId);

      if (savedToken && savedUserId) {
        dispatch(setToken(savedToken));
        dispatch(setUserId(savedUserId));

   try {
  const userResponse = await FetchUserDetails({
    userId: savedUserId,
    offset: 0,
  });

  const data = userResponse?.data;
  console.log("Restored User Data =>", data?.user_data);

  if (data) {
    dispatch(setUser(data));  // Save in redux
  }
} catch (error) {
  console.log("❌ Failed to fetch user details =>", error);
}

      }

      setLoading(false);
    };

    restore();
  }, []);

  if (loading) return <SplashScreen />;

  if (!token) return <UnauthNavigation />;

  return <AuthNavigation initialScreen="Home" />;
};

export default RootNavigation;
