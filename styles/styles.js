import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePictureContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#A0D5E3',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  profilePicture: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  profileName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  joinedDate: {
    fontSize: 16,
    marginBottom: 20,
    color: '#666',
  },
  optionsWrapper: {
    width: '100%',
    alignItems: 'center',
  },
  optionsContainer: {
    width: '100%',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#FF6F61',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  optionText: {
    fontSize: 20,
    marginLeft: 10,
  },
  lightOption: {
    backgroundColor: '#A0D5E3',
  },
  darkOption: {
    backgroundColor: '#4D4D4D',
  },
  signOutButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#FF6F61',
    borderRadius: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  signOutText: {
    fontSize: 20,
    color: '#fff',
    marginLeft: 10,
  },
  lightContainer: {
    backgroundColor: '#F9F9F9',
  },
  lightText: {
    color: '#333',
  },
  darkContainer: {
    backgroundColor: '#2E2E2E',
  },
  darkText: {
    color: '#E0E0E0',
  },
});

export default styles;
