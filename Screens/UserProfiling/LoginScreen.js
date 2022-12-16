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

const LoginScreen = ({navigation}) => {
  const [notShowPassword, SetnotShowPassword] = useState(true);
  const {userdetails, setuserdetails} = useContext(CartProvider);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.TopContainer}>
          <View style={styles.Logo}>
            <Text style={Commonstyles.LogoWhite}>LOGO</Text>
          </View>
          <View style={styles.Form}>
            <View style={{height: 100}}>
              <Text style={Commonstyles.HeadingWhite}>Welcome Back</Text>
              <Text style={Commonstyles.greyText}>Login to continue using</Text>
            </View>
            {/* TextInput */}
            <View
              style={{
                justifyContent: 'center',
                marginTop: 15,
              }}>
              <TextInput
                name="email"
                style={Commonstyles.inputText}
                placeholder="Enter Email"
                placeholderTextColor={Font.greyText}
                // value={values.email}
                // onChangeText={handleChange('email')}
                keyboardType="email-address"
              />
              <MaterialCommunityIcons
                name={'email'}
                size={26}
                color={'white'}
                style={{
                  position: 'absolute',
                  right: 10,
                }}
              />
            </View>

            <View
              style={{
                justifyContent: 'center',
                marginTop: 15,
              }}>
              <TextInput
                name="password"
                secureTextEntry={notShowPassword}
                style={Commonstyles.inputText}
                placeholder="Enter Password"
                placeholderTextColor={Font.greyText}
                // value={values.password}
                // onChangeText={handleChange('password')}
              />
              <TouchableOpacity
                onPress={() => {
                  SetnotShowPassword(!notShowPassword);
                }}
                style={{
                  position: 'absolute',
                  right: 10,
                }}>
                <Entypo name={'eye-with-line'} size={26} color={'white'} />
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 10, alignItems: 'flex-end'}}>
              <TouchableOpacity
                onPress={() => {
                  alert('Coming Soon');
                }}>
                <Text style={Commonstyles.TextGreysmall}>Forgot password?</Text>
              </TouchableOpacity>
            </View>
            {/* Buttons */}
            <View style={{marginTop: 20}}>
              <TouchableOpacity
                style={Commonstyles.ButtonGreen}
                onPress={() => {
                  setuserdetails({
                    login: true,
                  });
                }}>
                <Text style={Commonstyles.TextWhite}>Login</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 15}}>
              <TouchableOpacity
                style={Commonstyles.ButtonGrey}
                onPress={() => {
                  navigation.navigate('SignupScreen');
                }}>
                <Text style={Commonstyles.TextWhite}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.OtherMethod}>
            <View style={{alignItems: 'center', marginTop: 15}}>
              <Text style={Commonstyles.TextWhite}>
                --------------------{'  '}Or{'  '}--------------------
              </Text>
            </View>
            {/* Other Login Buttons */}
            <View style={{marginTop: 15}}>
              <TouchableOpacity style={Commonstyles.otherButton}>
                <AntDesign
                  name={'google'}
                  size={26}
                  color={'white'}
                  style={{marginRight: 5}}
                />
                <Text style={Commonstyles.TextWhite}>Continue with Google</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 15}}>
              <TouchableOpacity style={Commonstyles.otherButton}>
                <AntDesign
                  name={'facebook-square'}
                  size={26}
                  color={'white'}
                  style={{marginRight: 5}}
                />
                <Text style={Commonstyles.TextWhite}>
                  Continue with Facebook
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center', marginTop: 10}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SignupScreen');
                }}>
                <Text style={Commonstyles.TextGrey}>
                  Don't have an account?
                  <Text style={Commonstyles.TextWhite}> Register</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TopContainer: {
    flex: 1,
    backgroundColor: Font.black,
  },
  Logo: {
    height: 70,

    alignItems: 'center',
    justifyContent: 'center',
  },
  LogoText: {
    fontFamily: Font.LogoFamily,
    fontSize: Font.LogoSize,
    fontWeight: Font.LogoWeight,
    color: Font.white,
  },
  Form: {
    marginLeft: 15,
    marginRight: 15,
  },
  OtherMethod: {
    marginLeft: 15,
    marginRight: 15,
  },
});
