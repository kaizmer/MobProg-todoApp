import { StyleSheet, Text, View, Image } from 'react-native';
import styles from '../styles/styles';

const Profile = ({ isDarkMode }) => {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.profilePictureContainer}>
        <Image source={require('../assets/profile.jpg')} style={styles.profilePicture} />
      </View>
      <Text style={[styles.profileName, isDarkMode ? styles.darkText : styles.lightText]}>
        Vaughn Kaismer Sabillo
      </Text>
      <Text style={[styles.joinedDate, isDarkMode ? styles.darkText : styles.lightText]}>
        3rd Year BSIT
      </Text>
    </View>
  );
};

export default Profile;
