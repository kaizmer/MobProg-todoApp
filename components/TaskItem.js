import React, { useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/styles';

const TaskItem = ({
  item,
  index,
  editingTaskId,
  setEditingTaskId,
  editingText,
  setEditingText,
  toggleTask,
  deleteTask,
  updateTask
}) => {
  const inputRef = useRef(null);

  // Focus the TextInput automatically when editing starts
  useEffect(() => {
    if (editingTaskId === item.id && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editingTaskId]);

  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={() => toggleTask(index)}>
        <Ionicons name={item.completed ? 'checkmark-circle' : 'ellipse-outline'} size={24} style={styles.checkbox} />
      </TouchableOpacity>

      {/* If editing, show TextInput. Otherwise, show task text */}
      {editingTaskId === item.id ? (
        <TextInput
          ref={inputRef} // Attach ref to TextInput for focusing
          style={styles.taskInput} // Different style for editing mode
          value={editingText}
          onChangeText={setEditingText}
        />
      ) : (
        <Text style={[styles.task, item.completed && styles.completedTask]}>
          {item.text}
        </Text>
      )}

      {/* Show "Done" button while editing */}
      {editingTaskId === item.id ? (
        <TouchableOpacity onPress={() => {
          updateTask(item.id);
          setEditingTaskId(null); // Exit editing mode
        }}>
          <Ionicons name="checkmark" size={24} color="#32CD32" />
        </TouchableOpacity>
      ) : (
        // Show Edit button if not editing
        <TouchableOpacity onPress={() => {
          setEditingTaskId(item.id);
          setEditingText(item.text); // Start editing
        }}>
          <Ionicons name="pencil" size={24} color="#FFA500" />
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={() => deleteTask(item.id)} style={styles.deleteButton}>
        <Ionicons name="trash-bin" size={24} color="#FF6347" />
      </TouchableOpacity>
    </View>
  );
};

export default TaskItem;
