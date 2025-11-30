import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Features() {
  return (
    <View style={styles.container}>
      {/* Feature 1 */}
      <View style={styles.featureRow}>
        <Icon
          name="check-circle"
          size={24}
          color="#4CAF50"
          style={styles.icon}
        />
        <View style={{ flex: 1, marginLeft: 8 }}>
          <Text style={styles.featureTitle}>Streamlined Organization:</Text>
          <Text style={styles.featureText}>
            Centralize your receipts and invoices in one secure location...
          </Text>
        </View>
      </View>

      {/* Feature 2 */}
      <View style={styles.featureRow}>
        <Icon
          name="check-circle"
          size={24}
          color="#4CAF50"
          style={styles.icon}
        />
        <View style={{ flex: 1, marginLeft: 8 }}>
          <Text style={styles.featureTitle}>PDF Made Simple:</Text>
          <Text style={styles.featureText}>
            Easily handle PDF receipts – download, upload, and organize
            seamlessly...
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  featureText: {
    fontSize: 14,
    color: '#555',
  },
  icon: {
    // optional: adjust spacing if needed
  },
});
