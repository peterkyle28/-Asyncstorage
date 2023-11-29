import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Picker, StyleSheet } from 'react-native';

const StudentForm = ({ onAddStudent }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [course, setCourse] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleAddStudent = () => {
    if (!firstname || !lastname || !course || !username || !password) {
      setError('Please fill in all fields!');
      return;
    }

    setError('');

    onAddStudent({ firstname, lastname, course, username, password });

    setFirstname('');
    setLastname('');
    setCourse('');
    setUsername('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstname}
        onChangeText={(text) => setFirstname(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastname}
        onChangeText={(text) => setLastname(text)}
      />
      <Picker
        style={styles.input}
        selectedValue={course}
        onValueChange={(itemValue) => setCourse(itemValue)}
      >
        <Picker.Item label="Select Course" value=""/>
        <Picker.Item label="BS Information Technology" value="BS Information Technology" />
        <Picker.Item label="BS Computer Science" value="BS Computer Science" />
        <Picker.Item label="BS Computer Engineering" value="BS Computer Engineering" />
        <Picker.Item label="BS Electrical Engineering" value="BS Electrical Engineering" />
      </Picker>
      <TextInput
        style={[styles.input, styles.usernameInput]}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={[styles.input, styles.passwordInput]}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <View style={styles.errorContainer}>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addButton} onPress={handleAddStudent}>
          <Text style={styles.buttonText}>ADD STUDENT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom:200,
    paddingTop:100,
    
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  usernameInput: {
    marginTop: 20,
  },
  passwordInput: {
    marginTop: 1,
  },
  errorContainer: {
    height: 20,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  addButton: {
    backgroundColor: '#008080',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
    alignItems: 'center',
    marginTop: 50,
  },
  buttonText: {
    color: 'white',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default StudentForm;