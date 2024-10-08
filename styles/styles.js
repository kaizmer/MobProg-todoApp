import { StyleSheet } from 'react-native';

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
  searchContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderColor: '#B0C4DE',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4682B4',
    borderRadius: 5,
    padding: 10,
    marginLeft: 10,
    height: 50,
    width: 50,
  },
  input: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderColor: '#B0C4DE',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
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
    marginRight: 10,
    padding: 5,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#A9A9A9',
  },
  taskWrapper: {
    flex: 1,
    position: 'relative',
  },
  deleteButton: {
    marginLeft: 10,
  },
  taskInput: {
    flex: 1,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
    color: '#333',
    fontSize: 16,
  },  
});

export default styles;
