import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import CheckBox from 'expo-checkbox';


export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);


  const addTask = () => {
    if (task) {
      setTasks([...tasks, { id: Date.now().toString(), text: task, completed: false }]);
      setTask('');
    }
  };


  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>


      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={task}
          onChangeText={setTask}
          placeholder="Add a new task"
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.button} onPress={addTask}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>


      <FlatList
        style={styles.taskList}
        data={tasks}
        renderItem={({ item, index }) => (
          <View style={styles.taskContainer}>
            <CheckBox
              value={item.completed}
              onValueChange={() => toggleTask(index)}
              style={styles.checkbox}
            />
            <Text style={[styles.task, item.completed && styles.completedTask]}>
              {item.text}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />


      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F6F3',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2F4F4F',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    width: '100%',
  },
  input: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderColor: '#B0C4DE',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#4682B4',
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  taskList: {
    width: '100%',
    marginTop: 10,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#B0C4DE',
  },
  checkbox: {
    marginRight: 10,
  },
  task: {
    color: '#2F4F4F',
    flex: 1,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#A9A9A9',
  },
});

