import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
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
    <View>
      <Text>To-Do List</Text>

      <View>
        <TextInput
          value={task}
          onChangeText={setTask}
          placeholder="Add a new task"
        />
        <TouchableOpacity onPress={addTask}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <View>
            <CheckBox
              value={item.completed}
              onValueChange={() => toggleTask(index)}
            />
            <Text>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      <StatusBar style="auto" />
    </View>
  );
}
