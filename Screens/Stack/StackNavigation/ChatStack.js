import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

//Stack navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

//Importing Screens
import Chat from '../../PlayerScreens/Chat/Chat';
import IndividualChat from '../../PlayerScreens/Chat/IndividualChat';
const ChatStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ChatList" component={Chat} />
      <Stack.Screen name="IndividualChat" component={IndividualChat} />
    </Stack.Navigator>
  );
};

export default ChatStack;

const styles = StyleSheet.create({});
