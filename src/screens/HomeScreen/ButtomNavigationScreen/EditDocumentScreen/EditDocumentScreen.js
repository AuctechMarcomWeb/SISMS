import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const EditDocumentScreen = () => {
  const [invoice, setInvoice] = useState('invoice');
  const [party, setParty] = useState('party');

  const handleUpdate = () => {
    // Handle update logic here
    console.log('Invoice:', invoice);
    console.log('Party:', party);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>SI PRINT</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.title}>Edit Document details</Text>

        <Text style={styles.documentId}>
          invoice_ORD-721488437916691317420108
        </Text>

        <TextInput
          style={styles.input}
          value={invoice}
          onChangeText={setInvoice}
          placeholder="Invoice"
          placeholderTextColor="#888"
        />

        <TextInput
          style={[styles.input, styles.textArea]}
          value={party}
          onChangeText={setParty}
          placeholder="Party"
          placeholderTextColor="#888"
          multiline
        />

        <TouchableOpacity style={styles.button} onPress={handleUpdate}>
          <Text style={styles.buttonText}>UPDATE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EditDocumentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  body: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    backgroundColor: '#d6c799',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  documentId: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    color: '#000',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#5c3815',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
