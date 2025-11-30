import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import StoragePermissionModal from '../storagePermissionModal/storagePermissionModal';
import {
  handleDownload,
  requestStoragePermission,
} from '../../utils/Functions/requestPermissions';

const DocumentModal = ({
  visible,
  onClose,
  data,
  onEdit,
  onShare,
  onDownload,
  navigation
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const onDownloadPress = async () => {
    console.log('Permission required function');

    const sdkPermissionGranted = await requestStoragePermission();
    if (sdkPermissionGranted) {
      console.log(
        'Permission grandted ==>',
        sdkPermissionGranted,
        data?.fileUrl,
        data?.fileName,
      );

      if (data?.fileUrl && data?.fileName) {
        handleDownload(data.fileUrl, data.fileName);
      } else {
        console.warn('No file URL provided');
      }
    } else {
      setModalVisible(true); // show modal if permission not granted
    }
  };

  const onAllowPress = async () => {
    console.log('allow button pressed');

    setModalVisible(false);
    const granted = await requestStoragePermission();
    if (granted) {
      if (data?.fileUrl && data?.fileName) {
        handleDownload(data.fileUrl, data.fileName);
      }
    } else {
      Alert.alert(
        'Permission required',
        'Storage permission is required to download files',
      );
    }
  };

  return (
    <>
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
                {/* File Header */}
                <View style={styles.fileHeader}>
                  <View style={styles.iconWrapper}>
                    <Icon
                      name="file-document-outline"
                      size={28}
                      color="#8B4513"
                    />
                  </View>
                  <Text style={styles.fileName} numberOfLines={1}>
                    {data?.fileName || 'No file name'}
                  </Text>
                </View>

                {/* Details */}
                <View style={styles.detailsRow}>
                  <Text style={styles.label}>Date:</Text>
                  <Text style={styles.value}>{data?.date || '-'}</Text>
                </View>
                <View style={styles.detailsRow}>
                  <Text style={styles.label}>Label:</Text>
                  <Text style={styles.value}>{data?.label || '-'}</Text>
                </View>
                <View style={styles.detailsRow}>
                  <Text style={styles.label}>Description:</Text>
                  <Text style={styles.value}>{data?.description || '-'}</Text>
                </View>
                <View style={styles.detailsRow}>
                  <Text style={styles.label}>Uploaded By:</Text>
                  <Text style={styles.value}>{data?.uploadedBy || '-'}</Text>
                </View>

                {/* Action Buttons */}
                <View style={styles.buttonRow}>
                  <TouchableOpacity style={styles.button} onPress={onEdit}>
                    <Text style={styles.buttonText}>EDIT</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={onShare}>
                    <Text style={styles.buttonText}>SHARE</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={onDownloadPress}
                  >
                    <Text style={styles.buttonText}>DOWNLOAD</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <StoragePermissionModal
        visible={modalVisible}
        onAllow={onAllowPress}
        onCancel={() => setModalVisible(false)}
      />
    </>
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
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    elevation: 5,
  },
  fileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconWrapper: {
    backgroundColor: '#F5E6DA', // light brown background
    borderRadius: 40,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fileName: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
    flex: 1,
    color: '#333',
  },
  detailsRow: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  label: {
    fontWeight: '600',
    width: 110,
    color: '#555',
  },
  value: {
    flex: 1,
    color: '#333',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
    gap: 10,
  },
  button: {
    flex: 1,
    backgroundColor: '#6B4226',
    // marginHorizontal: 4,
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
  },
});

export default DocumentModal;
