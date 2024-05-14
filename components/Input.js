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
import FlashCardList from './FlashCardList';

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
    // Trim whitespace from the input fields
    const trimmedQuestion = question.trim();
    const trimmedAnswer = answer.trim();

    // Check if either the question or the answer is empty
    if (!trimmedQuestion || !trimmedAnswer) {
      // Alert the user that both fields are required
      alert('Both question and answer are required.');
      return;
    }

    // Add the flashcard to the list
    setFlashcards([
      ...flashcards,
      { question: trimmedQuestion, answer: trimmedAnswer },
    ]);

    // Clear the input fields
    setQuestion('');
    setAnswer('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>
        <Text
          style={{
            fontSize: 26,
            marginBottom: 20,
            textAlign: 'center',
          }}>
          Create and See FlashCards
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
        <FlashCardList flashcards={flashcards} />
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
