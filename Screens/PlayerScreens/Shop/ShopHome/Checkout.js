import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ImageBackground,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

//import font and design
import {Font, Commonstyles} from '../../../Font/Font';

//importing icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Checkout = ({navigation, route}) => {
  const Product = route?.params?.product;
  const Quantity = route?.params?.quantity;
  const Total = Quantity * Product?.Price;
  return (
    <ScrollView style={{flex: 1, backgroundColor: Font.black}}>
      {/* Top bar */}
      <View
        style={{
          height: 90,
          borderBottomWidth: 0.5,
          borderColor: Font.greyText,
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: Font.grey,
        }}>
        {/* Drawer Button and heading */}
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 15,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{marginRight: 5}}
            onPress={() => {
              navigation.openDrawer();
            }}>
            <Ionicons
              name={'reorder-three-sharp'}
              size={32}
              color={Font.green}
            />
          </TouchableOpacity>
          <Text style={Commonstyles.LogoWhite}>Checkout</Text>
        </View>
        {/* Notification icon */}
        <View
          style={{
            justifyContent: 'center',
            marginRight: 15,
            flexDirection: 'row',

            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{marginRight: 10}}
            onPress={() => {
              alert('Notification under development');
            }}>
            <AntDesign name={'search1'} size={20} color={Font.white} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              alert('My Cart under development');
            }}>
            <MaterialCommunityIcons
              name={'shopping-outline'}
              size={22}
              color={Font.white}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Delivery Address */}
      <View style={{margin: 15}}>
        <Text style={Commonstyles?.TextWhiteFeatured}>Delivery Address</Text>

        {/* TextInput */}
        <View
          style={{
            justifyContent: 'center',
            marginTop: 15,
          }}>
          <TextInput
            name="email"
            style={Commonstyles.inputText}
            placeholder="Enter Address"
            placeholderTextColor={Font.greyText}
            // value={values.email}
            // onChangeText={handleChange('email')}
          />
          <Ionicons
            name={'location-sharp'}
            size={26}
            color={'white'}
            style={{
              position: 'absolute',
              right: 10,
            }}
          />
        </View>
      </View>

      {/* My Cart */}
      <View style={{margin: 15}}>
        <Text style={Commonstyles?.TextWhiteFeatured}>My Cart</Text>
        <TouchableOpacity style={{marginTop: 10, borderRadius: 10}}>
          <ImageBackground
            source={{
              uri: Product?.ProductImage,
            }}
            resizeMode="cover"
            imageStyle={{borderRadius: 10}}
            style={{
              width: 158,
              height: 158,
              justifyContent: 'space-between',
            }}>
            <View style={{margin: 8}}>
              <Text style={Commonstyles?.TextGreen}>{Product?.Title}</Text>
              <Text style={Commonstyles?.TextGreysmallmini}>
                {Product?.Quantity > 0 ? 'In Stock' : 'Out of stock'}
              </Text>
            </View>
            <View
              style={{
                margin: 8,

                alignSelf: 'flex-end',
              }}>
              <Text style={Commonstyles?.TextWhite}>${Product?.Price}</Text>
              <Text style={Commonstyles?.TextWhitesmallmini300}>
                Qty:{' '}
                <Text style={Commonstyles?.TextGreensmallmini}>{Quantity}</Text>
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>

      {/* Pay Now */}
      <View
        style={{
          marginTop: 15,
          borderTopWidth: 0.5,
          borderColor: Font.greyText,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 15,
          }}>
          <Text style={Commonstyles?.TextWGreyMembersName}>Total</Text>
          <Text style={Commonstyles?.TextWGreyMembersName}>
            $ <Text style={Commonstyles?.LogoWhite20500}>{Total}</Text>
          </Text>
        </View>
        <View style={{margin: 15}}>
          <TouchableOpacity style={Commonstyles.ButtonGreen} onPress={() => {}}>
            <Text style={Commonstyles.TextWhite}>Pay Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Checkout;

const styles = StyleSheet.create({});
