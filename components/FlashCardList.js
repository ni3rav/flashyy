// FlashCardList.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FlashCardList = ({ flashcards }) => {
  const navigation = useNavigation();

  const handleFlashcardPress = (flashcard) => {
    navigation.navigate('FlashCardDetail', { flashcard });
  };

  return (
    // <ScrollView>
    //   {flashcards.map((flashcard, index) => (
    //     <TouchableOpacity
    //       key={index}
    //       style={styles.flashcard}
    //       onPress={() => handleFlashcardPress(flashcard)}>
    //       <Text style={styles.question}>{flashcard.question}</Text>
    //     </TouchableOpacity>
    //   ))}
    // </ScrollView>
    <View>
      {flashcards.map((flashcard, index) => (
        <TouchableOpacity
          key={index}
          style={styles.flashcard}
          onPress={() => handleFlashcardPress(flashcard)}>
          <Text style={styles.question}>{flashcard.question}</Text>
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
});

export default FlashCardList;
