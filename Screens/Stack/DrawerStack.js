import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {Font, Commonstyles} from '../Font/Font';

//importing Icons
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

//imports screens
import TabStack from './TabStack';
import Groups from '../PlayerScreens/Groups';
import Reports from '../PlayerScreens/Reports';
import Schedule from '../PlayerScreens/Schedule';
import GotoShop from '../PlayerScreens/GotoShop';
import Signout from '../PlayerScreens/Signout';
import CustomDrawer from './CustomDrawer';

//Import Drawer
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: Font.green,
          drawerActiveTintColor: Font.white,
          drawerInactiveTintColor: Font.greyText,
          drawerLabelStyle: {
            marginLeft: -18,
            fontSize: 16,
            fontFamily: Font.fontfamily,
            marginBottom: 8,
          },
        }}
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen
          name="News Feed"
          component={TabStack}
          options={{
            drawerIcon: () => (
              <FontAwesome name="feed" size={28} color={'white'} />
            ),
          }}
        />
        <Drawer.Screen
          name="Groups"
          component={Groups}
          options={{
            drawerIcon: () => (
              <FontAwesome name="group" size={28} color={'white'} />
            ),
          }}
        />
        <Drawer.Screen
          name="Reports"
          component={Reports}
          options={{
            drawerIcon: () => (
              <Ionicons name="analytics-outline" size={28} color={'white'} />
            ),
          }}
        />
        <Drawer.Screen
          name="Schedule"
          component={Schedule}
          options={{
            drawerIcon: () => (
              <FontAwesome name="calendar" size={28} color={'white'} />
            ),
          }}
        />
        <Drawer.Screen
          name="Go to Shop"
          component={GotoShop}
          options={{
            drawerIcon: () => (
              <FontAwesome name="shopping-bag" size={28} color={'white'} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerStack;

const styles = StyleSheet.create({});
