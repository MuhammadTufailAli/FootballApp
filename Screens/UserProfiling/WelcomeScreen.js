import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import React, {useState, useContext} from 'react';

//import Context Api
import CartProvider from '../ContextApi/contextApi';

//Importing Icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
//Import FontColor
import {Font, Commonstyles} from '../Font/Font';

const WelcomeScreen = ({navigation}) => {
  const {user, setuser} = useContext(CartProvider);
  return (
    <View
      style={{flex: 1, backgroundColor: Font.black, justifyContent: 'center'}}>
      <View style={{margin: 20}}>
        <TouchableOpacity
          style={Commonstyles.ButtonGreen}
          onPress={() => {
            setuser('Player');
            navigation.navigate('LoginScreen', {user: 'Player'});
          }}>
          <Text style={Commonstyles.TextWhite}>Login as Player</Text>
        </TouchableOpacity>
      </View>

      <View style={{margin: 20}}>
        <TouchableOpacity
          style={Commonstyles.ButtonGreen}
          onPress={() => {
            setuser('Parent');
            navigation.navigate('LoginScreen', {user: 'Parent'});
          }}>
          <Text style={Commonstyles.TextWhite}>Login as Parent</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
