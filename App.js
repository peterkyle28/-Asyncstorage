import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StudentForm from './Data/StuForm';
import StudentTable from './Data/StuTable';
import StudentModal from './Data/StuModal';

const App = () => {
  const [students, setStudents] = useState([]);
  const [showStudentList, setShowStudentList] = useState(false);
  const [selectedStudentIndex, setSelectedStudentIndex] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  const addStudent = (student) => {
    setStudents([...students, student]);
    saveData([...students, student]);
    setMessage('Data is added successfully!'); 
  };

  const saveData = async (data) => {
    try {
      await AsyncStorage.setItem('students', JSON.stringify(data));
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const loadData = async () => {
    try {
      const data = await AsyncStorage.getItem('students');
      if (data !== null) {
        setStudents(JSON.parse(data));
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const onViewStudent = (index) => {
    setSelectedStudentIndex(index);
  };

  const closeModal = () => {
    setSelectedStudentIndex(null);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {selectedStudentIndex !== null && (
          <StudentModal
            isVisible={selectedStudentIndex !== null}
            student={students[selectedStudentIndex]}
            onClose={closeModal}
          />
        )}
        {showStudentList ? (
          <StudentTable students={students} onViewStudent={onViewStudent} />
        ) : (
          <StudentForm onAddStudent={addStudent} />
        )}
      </ScrollView>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => setShowStudentList(!showStudentList)}
      >
        <Text style={styles.buttonText}>
          {showStudentList ? '  BACK TO ADD STUDENT  ' : '            VIEW STUDENT LIST            '}
        </Text>
      </TouchableOpacity>
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,   
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: '#008080',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    marginBottom: 100,
    marginTop:50,
  },
  buttonText: {
    color: 'white',
  },
  message: {
    position: 'absolute',
    bottom: 10, 
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    padding: 10,
    borderRadius: 5,
  },
});

export default App;