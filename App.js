// App.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Input from './components/Input.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Input />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
