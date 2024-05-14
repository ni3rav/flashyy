// AppNavigator.js
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Input from './components/Input';
import FlashCardDetail from './components/FlashcardDetail';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Input" component={Input} />
      <Stack.Screen name="FlashCardDetail" component={FlashCardDetail} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
