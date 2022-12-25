import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
//importing Stacks
import LoginStack from '../Stack/StackNavigation/LoginStack';
import DrawerStack from '../Stack/Drawer/DrawerStack';
//import Context Api
import CartProvider from '../ContextApi/contextApi';

const Authentication = () => {
  const {userdetails, setuserdetails} = useContext(CartProvider);
  return <>{userdetails?.login ? <DrawerStack /> : <LoginStack />}</>;
};

export default Authentication;

const styles = StyleSheet.create({});
