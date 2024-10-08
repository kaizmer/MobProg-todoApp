import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/styles';

const Options = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <View style={styles.optionsWrapper}>
      <View style={styles.optionsContainer}>
        <Text style={[styles.sectionTitle, isDarkMode ? styles.darkText : styles.lightText]}>
          Profile
        </Text>
        <TouchableOpacity style={[styles.option, isDarkMode ? styles.darkOption : styles.lightOption]}>
          <Icon name="user" size={24} color={isDarkMode ? '#FFD700' : '#333'} />
          <Text style={[styles.optionText, isDarkMode ? styles.darkText : styles.lightText]}>
            Manage user
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.optionsContainer}>
        <Text style={[styles.sectionTitle, isDarkMode ? styles.darkText : styles.lightText]}>
          Settings
        </Text>
        <TouchableOpacity style={[styles.option, isDarkMode ? styles.darkOption : styles.lightOption]}>
          <Icon name="bell" size={24} color={isDarkMode ? '#FFD700' : '#333'} />
          <Text style={[styles.optionText, isDarkMode ? styles.darkText : styles.lightText]}>
            Notifications
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.option, isDarkMode ? styles.darkOption : styles.lightOption]} 
          onPress={toggleDarkMode}
          accessibilityLabel="Toggle Dark Mode"
          accessibilityHint="Switch between light and dark themes"
        >
          <Icon 
            name={isDarkMode ? "sun-o" : "moon-o"}
            size={24} 
            color={isDarkMode ? '#FFD700' : '#333'} 
          />
          <Text style={[styles.optionText, isDarkMode ? styles.darkText : styles.lightText]}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.signOutButton}>
        <Icon name="sign-out" size={24} color="#fff" />
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Options;
