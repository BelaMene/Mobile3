import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PasswordList = () => {
  const [passwords, setPasswords] = React.useState([]);

  React.useEffect(() => {
    const fetchPasswords = async () => {
      try {
        const savedPasswords = JSON.parse(await AsyncStorage.getItem('passwords')) || [];
        setPasswords(savedPasswords);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPasswords();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={passwords}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.password}>{item}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    padding: 10,
  },
  password: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'Calibri',
  },
});

export default PasswordList;