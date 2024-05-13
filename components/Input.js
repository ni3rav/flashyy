// Input.js
import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import FlashcardList from './FlashCardList';

export default function Input() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [flashcards, setFlashcards] = useState([]);

  const handleQuestionChange = (text) => {
    setQuestion(text);
  };
  const handleAnswerChange = (text) => {
    setAnswer(text);
  };

  const handleSubmit = () => {
    setFlashcards([...flashcards, { question, answer }]);
    setQuestion('');
    setAnswer('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>
        <Text
          style={{
            fontSize: 28,
            marginBottom: 20,
            textAlign: 'center',
          }}>
          FLASHYY
        </Text>

        <Text style={styles.inputLabel}>Enter the Question</Text>
        <TextInput
          value={question}
          onChangeText={handleQuestionChange}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Enter the Answer</Text>
        <TextInput
          value={answer}
          onChangeText={handleAnswerChange}
          style={[styles.input, styles.answerInput]} // Add styles for answer input
          multiline={true} // Allow multiline input
          numberOfLines={4} // Set number of lines to 4
        />
      </View>
      <Button onPress={handleSubmit} title="Submit" style={styles.button} />
      <View style={styles.flashcardListContainer}>
        <FlashcardList flashcards={flashcards} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40, // Add top margin
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  answerInput: {
    height: 100, // Increase height of answer input
  },
  button: {
    marginTop: 20,
  },
  flashcardListContainer: {
    marginTop: 20, // Add space between submit button and flashcard list
  },
});
