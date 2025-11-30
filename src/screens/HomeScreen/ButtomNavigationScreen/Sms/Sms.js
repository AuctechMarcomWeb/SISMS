import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Layout from '../../../../components/layout/layout';
import { GetReceivedSMS } from '../../../../API/authAPI/authAPI';

const Sms = () => {
  const [smsList, setSmsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [isDataAvailable, setIsDataAvailable] = useState(false);

  const fetchSms = async () => {
    const userId = await AsyncStorage.getItem('userId');
    setLoading(true);

    try {
      const response = await GetReceivedSMS({ owner_id: userId, offset: 0 });
      console.log('Received SMS:', response.data);

      if (response.status === 200 && response.data?.status === 200) {
        const list = response.data.data || [];
        if (list.length > 0) {
          setIsDataAvailable(true);
          setSmsList(prev => [...prev, ...list]);
        } else {
          setIsDataAvailable(false);
        }
      } else {
        Alert.alert('Error', response.data?.message || 'Failed to fetch SMS');
      }
    } catch (error) {
      console.log('Error fetching SMS list:', error);
      Alert.alert('Error', 'Failed to fetch SMS');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSms();
  }, []);

  const renderSmsItem = ({ item }) => {
    return (
      <View style={styles.smsItem}>
        <Text style={styles.smsTitle}>{item.title}</Text>
        <Text style={styles.smsDescription}>{item.description}</Text>
        <Text style={styles.smsDate}>{item.date}</Text>
      </View>
    );
  };

  if (loading && smsList.length === 0) {
    return (
      <Layout>
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#8B4513" />
        </View>
      </Layout>
    );
  }

  return (
    <Layout>
      <View style={styles.container}>
        {!isDataAvailable ? (
          <View style={styles.noSmsContainer}>
            <Text style={styles.noSmsText}>No SMS available</Text>
          </View>
        ) : (
          <FlatList
            data={smsList}
            renderItem={renderSmsItem}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={() => setOffset(prev => prev + 10)} // load more
            onEndReachedThreshold={0.5}
            ListFooterComponent={
              loading ? (
                <ActivityIndicator size="small" color="#8B4513" />
              ) : null
            }
          />
        )}
      </View>
    </Layout>
  );
};

export default Sms;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noSmsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  noSmsText: {
    fontSize: 18,
    color: '#999',
    fontWeight: '500',
  },
  smsItem: {
    backgroundColor: '#FFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  smsTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color: '#6A4C3C',
  },
  smsDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  smsDate: {
    fontSize: 12,
    color: '#999',
  },
});
