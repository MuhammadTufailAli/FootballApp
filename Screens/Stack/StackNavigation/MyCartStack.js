import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

//Stack navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

//Importing Screens
import MyCart from '../../PlayerScreens/Shop/MyCart/MyCart';

const MyCartStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MyCart" component={MyCart} />
    </Stack.Navigator>
  );
};

export default MyCartStack;

const styles = StyleSheet.create({});
