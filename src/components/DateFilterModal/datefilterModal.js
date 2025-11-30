import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import { Calendar } from 'react-native-calendars';

const DateSelectModal = ({ visible, onClose, onSearch }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selecting, setSelecting] = useState('start'); // 'start' or 'end'

  const handleDayPress = day => {
    const dateStr = day.dateString;
    if (selecting === 'start') {
      setStartDate(dateStr);
      setSelecting('end'); // switch to selecting end date
      if (endDate && new Date(endDate) < new Date(dateStr)) {
        setEndDate(null); // reset end date if start > end
      }
    } else {
      if (startDate && new Date(dateStr) >= new Date(startDate)) {
        setEndDate(dateStr);
      } else {
        setStartDate(dateStr);
        setEndDate(null);
        setSelecting('end');
      }
    }
  };

  // Highlight selected dates
  const getMarkedDates = () => {
    const marked = {};
    if (startDate) {
      marked[startDate] = {
        startingDay: true,
        color: '#5a341c',
        textColor: '#fff',
      };
    }
    if (endDate) {
      marked[endDate] = {
        endingDay: true,
        color: '#5a341c',
        textColor: '#fff',
      };
    }
    if (startDate && endDate) {
      // mark the range
      let current = new Date(startDate);
      const end = new Date(endDate);
      while (current < end) {
        const dateString = current.toISOString().split('T')[0];
        if (dateString !== startDate && dateString !== endDate) {
          marked[dateString] = { color: '#f2e5b6', textColor: '#5a341c' };
        }
        current.setDate(current.getDate() + 1);
      }
    }
    return marked;
  };

  // ✅ Clear selected dates
  const handleClear = () => {
    setStartDate(null);
    setEndDate(null);
    setSelecting('start');
    onSearch('', '');
  };
  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={styles.modalContainer}>
              <Text style={styles.title}>Select Date Range</Text>

              <View style={styles.dateButtonsContainer}>
                <TouchableOpacity
                  style={[
                    styles.dateButton,
                    selecting === 'start' && styles.selectedButton,
                  ]}
                  onPress={() => setSelecting('start')}
                >
                  <Text style={styles.dateButtonText}>
                    {startDate ? startDate : 'START DATE'}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.dateButton,
                    selecting === 'end' && styles.selectedButton,
                  ]}
                  onPress={() => setSelecting('end')}
                >
                  <Text style={styles.dateButtonText}>
                    {endDate ? endDate : 'END DATE'}
                  </Text>
                </TouchableOpacity>
              </View>

              <Calendar
                onDayPress={handleDayPress}
                markingType={'period'}
                markedDates={getMarkedDates()}
                theme={{
                  todayTextColor: '#5a341c',
                  arrowColor: '#5a341c',
                  monthTextColor: '#5a341c',
                  textDayFontWeight: '500',
                  textMonthFontWeight: 'bold',
                  textDayHeaderFontWeight: '600',
                  selectedDayBackgroundColor: '#5a341c',
                  selectedDayTextColor: '#fff',
                }}
                enableSwipeMonths={true} // swipe to change months
              />

              <View style={styles.actionButtons}>
                <TouchableOpacity
                  style={[styles.actionButton, styles.clearButton]}
                  onPress={handleClear}
                >
                  <Text style={styles.clearButtonText}>CLEAR</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.actionButton, styles.searchButton]}
                  onPress={() => onSearch(startDate, endDate)}
                >
                  <Text style={styles.searchButtonText}>SEARCH</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '92%',
    backgroundColor: '#fff8e1',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8, // Android shadow
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#5a341c',
  },
  dateButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 16,
  },
  dateButton: {
    flex: 1,
    backgroundColor: '#f2e5b6',
    paddingVertical: 12,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  selectedButton: {
    borderColor: '#5a341c',
    borderWidth: 2,
  },
  dateButtonText: {
    color: '#5a341c',
    fontWeight: '600',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 15,
  },
  actionButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  searchButton: {
    backgroundColor: '#5a341c',
    // paddingVertical: 14,
    // paddingHorizontal: 40,
    // borderRadius: 10,
    // width: '100%',
    // alignItems: 'center',
    // marginTop: 15,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  clearButton: {
    backgroundColor: '#f2e5b6',
  },
  clearButtonText: {
    color: '#5a341c',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default DateSelectModal;
