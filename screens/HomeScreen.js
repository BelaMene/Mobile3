import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import PasswordGenerator from '../components/PasswordGenerator';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <PasswordGenerator />
      <Button
        title="Ver Senhas Salvas"
        onPress={() => navigation.navigate('SavedPasswords')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
});

export default HomeScreen;

