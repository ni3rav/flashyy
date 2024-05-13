// FlashcardList.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FlashcardList = ({ flashcards }) => {
  const [visibleAnswerIndex, setVisibleAnswerIndex] = useState(null);

  const toggleAnswerVisibility = (index) => {
    if (visibleAnswerIndex === index) {
      setVisibleAnswerIndex(null);
    } else {
      setVisibleAnswerIndex(index);
    }
  };

  return (
    <View>
      {flashcards.map((flashcard, index) => (
        <TouchableOpacity
          key={index}
          style={styles.flashcard}
          onPress={() => toggleAnswerVisibility(index)}>
          <Text style={styles.question}>{flashcard.question}</Text>
          {visibleAnswerIndex === index && (
            <Text style={styles.answer}>{flashcard.answer}</Text>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  flashcard: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  answer: {
    fontSize: 16,
  },
});

export default FlashcardList;
