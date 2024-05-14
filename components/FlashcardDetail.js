// FlashCardDetail.js
import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

const FlashCardDetail = ({ route, navigation }) => {
  const { flashcard } = route.params;

  const handleBackButtonPress = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.question}>{flashcard.question}</Text>
      <Text style={styles.answer}>{flashcard.answer}</Text>
      <Button title="Back" onPress={handleBackButtonPress} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  answer: {
    fontSize: 18,
  },
});

export default FlashCardDetail;
