import {
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useState, useContext} from 'react';

//import Context Api
import CartProvider from '../ContextApi/contextApi';

//Importing Icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//Import FontColor
import {Font, Commonstyles} from '../Font/Font';

const SignupScreen = ({navigation}) => {
  const [notShowPassword, SetnotShowPassword] = useState(true);
  const {userdetails, setuserdetails} = useContext(CartProvider);
  return (
    <ScrollView style={styles.Container}>
      {/* Logo */}
      <SafeAreaView
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 70,
        }}>
        <Text style={Commonstyles.LogoWhite}>LOGO</Text>
      </SafeAreaView>

      <SafeAreaView
        style={{
          marginLeft: 15,
          marginRight: 15,
          marginTop: 5,
          height: 100,
        }}>
        <Text style={Commonstyles.HeadingWhite}>Create Account </Text>
        <Text style={Commonstyles.greyText}>Create account to register</Text>
      </SafeAreaView>

      {/* TextInput */}
      <SafeAreaView
        style={{
          marginLeft: 15,
          marginRight: 15,
          marginTop: 10,
          justifyContent: 'center',
        }}>
        <TextInput
          name="name"
          style={Commonstyles.inputText}
          placeholder="Enter Name"
          placeholderTextColor={Font.greyText}
          // value={values.email}
          // onChangeText={handleChange('email')}
        />
        <FontAwesome
          name={'user-circle'}
          size={26}
          color={'white'}
          style={{
            position: 'absolute',
            right: 10,
          }}
        />
      </SafeAreaView>

      <SafeAreaView
        style={{
          marginLeft: 15,
          marginRight: 15,
          marginTop: 15,
          justifyContent: 'center',
        }}>
        <TextInput
          secureTextEntry={notShowPassword}
          name="password"
          style={Commonstyles.inputText}
          placeholder="Enter Password"
          placeholderTextColor={Font.greyText}
          // value={values.email}
          // onChangeText={handleChange('email')}
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
      </SafeAreaView>
      <SafeAreaView
        style={{
          marginLeft: 15,
          marginRight: 15,
          marginTop: 15,
          justifyContent: 'center',
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
      </SafeAreaView>
      <SafeAreaView
        style={{
          marginLeft: 15,
          marginRight: 15,
          marginTop: 15,
          justifyContent: 'center',
        }}>
        <TextInput
          name="phone"
          style={Commonstyles.inputText}
          placeholder="Enter Phone"
          placeholderTextColor={Font.greyText}
          keyboardType="numeric"
          // value={values.email}
          // onChangeText={handleChange('email')}
        />
        <FontAwesome
          name={'phone-square'}
          size={26}
          color={'white'}
          style={{
            position: 'absolute',
            right: 10,
          }}
        />
      </SafeAreaView>

      {/* Buttons */}
      <SafeAreaView
        style={{
          marginLeft: 15,
          marginRight: 15,
          marginTop: 30,
        }}>
        <TouchableOpacity
          style={Commonstyles.ButtonGreen}
          onPress={() => {
            setuserdetails({
              login: true,
            });
          }}>
          <Text style={Commonstyles.TextWhite}>Register</Text>
        </TouchableOpacity>
      </SafeAreaView>

      <SafeAreaView
        style={{
          marginLeft: 15,
          marginRight: 15,
          marginTop: 15,
        }}>
        <TouchableOpacity
          style={Commonstyles.ButtonGrey}
          onPress={() => {
            navigation.navigate('LoginScreen');
          }}>
          <Text style={Commonstyles.TextWhite}>Login</Text>
        </TouchableOpacity>
      </SafeAreaView>

      <SafeAreaView
        style={{
          marginLeft: 15,
          marginRight: 15,
          marginTop: 25,
          alignItems: 'center',
        }}>
        <Text style={Commonstyles.TextWhite}>
          --------------------{'  '}Or{'  '}--------------------
        </Text>
      </SafeAreaView>

      {/* Other Login Buttons */}
      <View style={{marginTop: 15, marginLeft: 15, marginRight: 15}}>
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
      <SafeAreaView
        style={{
          marginLeft: 15,
          marginRight: 15,
          marginTop: 15,
        }}>
        <TouchableOpacity style={Commonstyles.otherButton}>
          <AntDesign
            name={'facebook-square'}
            size={26}
            color={'white'}
            style={{marginRight: 5}}
          />
          <Text style={Commonstyles.TextWhite}>Continue with Facebook</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <View style={{alignItems: 'center', marginTop: 10, marginBottom: 10}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LoginScreen');
          }}>
          <Text style={Commonstyles.TextGrey}>
            Already have an account?
            <Text style={Commonstyles.TextWhite}> Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Font.black,
  },
});
