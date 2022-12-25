import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

//Stack navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

//Importing Screens
import Profile from '../../ParentScreens/Profile/Profile';

import ProfileAddPost from '../../ParentScreens/Profile/ProfileAddPost';
import IndividualPost from '../../../Components/IndividualPost';
import Comments from '../../../Components/Comments';
import EditProfile from '../../ParentScreens/Profile/EditProfile';

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ProfileInfo" component={Profile} />

      <Stack.Screen name="ProfileAddPost" component={ProfileAddPost} />
      <Stack.Screen name="IndividualPost" component={IndividualPost} />
      <Stack.Screen name="Comments" component={Comments} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};

export default ProfileStack;

const styles = StyleSheet.create({});
