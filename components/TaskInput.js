import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/styles';

const TaskInput = ({ task, setTask, addTask }) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      value={task}
      onChangeText={setTask}
      placeholder="Add a new task"
      placeholderTextColor="#888"
    />
    <TouchableOpacity onPress={addTask} style={styles.addButton}>
      <Ionicons name="add-circle" size={24} color="#FFFFFF" />
    </TouchableOpacity>
  </View>
);

export default TaskInput;
