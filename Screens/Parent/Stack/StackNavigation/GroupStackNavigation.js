import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

//Importing Screens
import Groups from '../../ParentScreens/Groups/Groups';
import IndividualGroup from '../../ParentScreens/Groups/IndividualGroup';
import IndividualGroupDetails from '../../ParentScreens/Groups/IndividualGroupDetails';
import IndividualGroupMembers from '../../ParentScreens/Groups/IndividualGroupMembers';
import GroupAddPost from '../../ParentScreens/Groups/GroupAddPost';
import IndividualPost from '../../../Components/IndividualPost';
import Comments from '../../../Components/Comments';
//Stack navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const GroupStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="GroupList" component={Groups} />
      <Stack.Screen name="IndividualGroup" component={IndividualGroup} />
      <Stack.Screen
        name="IndividualGroupDetails"
        component={IndividualGroupDetails}
      />
      <Stack.Screen
        name="IndividualGroupMembers"
        component={IndividualGroupMembers}
      />
      <Stack.Screen name="GroupAddPost" component={GroupAddPost} />
      <Stack.Screen name="IndividualPost" component={IndividualPost} />
      <Stack.Screen name="Comments" component={Comments} />
    </Stack.Navigator>
  );
};

export default GroupStackNavigation;

const styles = StyleSheet.create({});
