import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

const StudentModal = ({ isVisible, student, onClose }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Student Details:</Text>
          {student && (
            <View>
              <View style={styles.rowContainer}>
                <Text style={styles.boldText}>First Name: </Text>
                <Text>{student.firstname}</Text>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.boldText}>Last Name: </Text>
                <Text>{student.lastname}</Text>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.boldText}>Course: </Text>
                <Text>{student.course}</Text>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.boldText}>Username: </Text>
                <Text>{student.username}</Text>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.boldText}>Password: </Text>
                <Text>{student.password}</Text>
              </View>
            </View>
          )}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  boldText: {
    fontWeight: 'bold',
  },
  rowContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#008080',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});

export default StudentModal;