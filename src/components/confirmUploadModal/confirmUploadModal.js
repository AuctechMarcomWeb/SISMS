import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

const ConfirmUploadModal = ({ visible, onClose, fileName, onConfirm }) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.container}>
              {/* Header */}
              <View style={styles.header}>
                <Text style={styles.headerText}>Upload?</Text>
              </View>

              {/* Message */}
              <View style={styles.body}>
                <Text style={styles.message}>
                  Are you sure, You want to upload?
                </Text>
                <Text style={styles.fileName} numberOfLines={1}>
                  {fileName || 'No file selected'}
                </Text>
              </View>

              {/* Footer Buttons */}
              <View style={styles.footer}>
                <TouchableOpacity
                  style={[styles.button, styles.cancelButton]}
                  onPress={onClose}
                >
                  <Text style={[styles.buttonText, { color: '#333' }]}>
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.confirmButton]}
                  onPress={onConfirm}
                >
                  <Text style={styles.buttonText}>Sure</Text>
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
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  header: {
    backgroundColor: '#6B4226',
    paddingVertical: 12,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  body: {
    padding: 16,
    alignItems: 'center',
  },
  message: {
    fontSize: 15,
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  fileName: {
    fontSize: 13,
    color: '#6B4226',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#fff',
  },
  confirmButton: {
    backgroundColor: '#6B4226',
  },
  buttonText: {
    fontWeight: '600',
    color: '#fff',
  },
});

export default ConfirmUploadModal;
