import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

//Stack navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

//Importing Screens
import SettingList from '../../ParentScreens/Setting/Setting';

import ChangeEmail from '../../ParentScreens/Setting/ChangeEmail';
import ChangePassword from '../../ParentScreens/Setting/ChangePassword';
import ChangeNumber from '../../ParentScreens/Setting/ChangeNumber';

const ShopSettingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ShopSettingList" component={SettingList} />
      <Stack.Screen name="ChangeEmail" component={ChangeEmail} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="ChangeNumber" component={ChangeNumber} />
    </Stack.Navigator>
  );
};

export default ShopSettingStack;

const styles = StyleSheet.create({});
