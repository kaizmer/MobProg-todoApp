import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar'; //mao nani tung gigamit ni sir ata tung sa status bar
import { View, Text } from 'react-native'; //iimport sa tung mga gipang separate nato nga file
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import SearchBar from './components/SearchBar';
import styles from './styles/styles';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingText, setEditingText] = useState('');

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), text: task, completed: false }]);
      setTask('');
    }
  };

  const updateTask = (id) => {
    if (editingText.trim()) {
      const updatedTasks = tasks.map((t) => 
        t.id === id ? { ...t, text: editingText } : t
      );
      setTasks(updatedTasks);
      setEditingTaskId(null);
      setEditingText('');
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task =>
    task.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do na!</Text>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TaskInput task={task} setTask={setTask} addTask={addTask} />

      <TaskList
        tasks={filteredTasks}
        editingTaskId={editingTaskId}
        setEditingTaskId={setEditingTaskId}
        editingText={editingText}
        setEditingText={setEditingText}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />

      <StatusBar style="auto" />
    </View>
  );
}
