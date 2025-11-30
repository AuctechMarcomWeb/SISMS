import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../../../../components/header/header';
import Layout from '../../../../components/layout/layout';
import Icon from 'react-native-vector-icons/Ionicons';
import { FetchNotification } from '../../../../API/authAPI/authAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../../../utils/Functions/colors';

const Notification = () => {
  const [data, setData] = useState([]);

  const NotificationsData = async () => {
    console.log('Notification function call');

    const userId = await AsyncStorage.getItem('UserID');

    try {
      const response = await FetchNotification(userId);
      console.log('User Notifications', response);
      setData(response?.data?.data || []);
    } catch (error) {
      console.log('Error while fetching notifications', error);
    } finally {
      console.log('Notification data set', data);
    }
  };

  useEffect(() => {
    NotificationsData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Icon name="notifications-outline" size={24} color={colors.blue} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.description}>{item?.description}</Text>
        <Text style={styles.date}>{formatDate(item?.date)}</Text>
      </View>
    </View>
  );

  const formatDate = dateString => {
    const date = new Date(dateString);
    return date.toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <>
      <Layout>
        <Header title="Notifications" />
        <View style={styles.container}>
          {data?.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Icon name="notifications-off-outline" size={50} color="#aaa" />
              <Text style={styles.emptyText}>No Notifications Yet</Text>
            </View>
          ) : (
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={styles.list}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      </Layout>
    </>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F9FAFB',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f9fAfB',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
  date: {
    fontSize: 12,
    color: '#888',
    marginTop: 6,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  emptyText: {
    fontSize: 16,
    color: '#aaa',
    marginTop: 10,
  },
});
