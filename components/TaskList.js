import React from 'react';
import { FlatList } from 'react-native';
import TaskItem from './TaskItem';
import styles from '../styles/styles';

const TaskList = ({ tasks, editingTaskId, setEditingTaskId, editingText, setEditingText, toggleTask, deleteTask, updateTask }) => (
  <FlatList
    style={styles.taskList}
    data={tasks}
    renderItem={({ item, index }) => (
      <TaskItem
        item={item}
        index={index}
        editingTaskId={editingTaskId}
        setEditingTaskId={setEditingTaskId}
        editingText={editingText}
        setEditingText={setEditingText}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
    )}
    keyExtractor={(item) => item.id}
  />
);

export default TaskList;
