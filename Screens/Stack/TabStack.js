import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

//Import FontColor
import {Font, Commonstyles} from '../Font/Font';

//Importing Screens
import HomeScreen from '../PlayerScreens/HomeScreen';
import Drills from '../PlayerScreens/Drills';
import Chat from '../PlayerScreens/Chat';
import Profile from '../PlayerScreens/Profile';
import Setting from '../PlayerScreens/Setting';
//importing Icons
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

//import tab navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,

        tabBarIcon: ({focused, color, size}) => {
          size = 30;
          if (route.name === 'Home') {
            return <Entypo name={'home'} size={size} color={color} />;
          } else if (route.name === 'Drills') {
            return (
              <Ionicons name="football-outline" size={size} color={color} />
            );
          } else if (route.name === 'Chat') {
            return (
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Profile') {
            return <FontAwesome name="user" size={size} color={color} />;
          } else if (route.name === 'Setting') {
            return (
              <Ionicons name="settings-outline" size={size} color={color} />
            );
          }
        },
        tabBarActiveTintColor: Font.green,
        tabBarInactiveTintColor: 'white',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 70,
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: Font.black,
          position: 'absolute',
          borderTopWidth: 0,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{unmountOnBlur: true}}
      />
      <Tab.Screen
        name="Drills"
        component={Drills}
        options={{unmountOnBlur: true}}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{unmountOnBlur: true}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{unmountOnBlur: true}}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{unmountOnBlur: true}}
      />
    </Tab.Navigator>
  );
};

export default TabStack;

const styles = StyleSheet.create({});
