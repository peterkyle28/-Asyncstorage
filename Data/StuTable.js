import React from 'react';
import { View, Text } from 'react-native';
import { Table, Row } from 'react-native-table-component';

const StudentTable = ({ students, onViewStudent }) => {
  const tableHead = ['#', '       FIRST NAME                      ', '       LAST NAME                  ', '         COURSE         '];

  return (
    <View style={{ marginTop: 20, justifyContent: 'flex-start', flex: 1, marginHorizontal: 5 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 15, justifyContent: 'center', textAlign: 'center' }}>STUDENT LISTS:</Text>
      <Table borderStyle={{ borderWidth: 1, marginTop: 15, borderColor: '#C1C0B9' }} style={{ marginTop: 15, width: '100%' }}>
        <Row data={tableHead} style={{ height: 40, backgroundColor: '#f1f8ff', width: '100%' }} textStyle={{ margin: 5, textAlign: 'center' }} />
        {students.map((student, index) => (
          <Row
            key={index}
            data={[index + 1, student.firstname, student.lastname, student.course]}
            style={{ height: 40 }}
            textStyle={{ margin: 1, textAlign: 'center', flexWrap: 'wrap' }}
            onPress={() => onViewStudent(index)}
          />
        ))}
      </Table>
    </View>
  );
};

export default StudentTable;