import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
//import font and design
import {Font, Commonstyles} from '../../../Font/Font';

//importing icons
import Ionicons from 'react-native-vector-icons/Ionicons';

//importing Flatlist for chat
import FlatListForChat from '../../../Components/FlatListForChat';

const Chat = ({navigation}) => {
  var Nav = navigation;
  const [chatListArray, setChatListArray] = useState([
    {
      ProfileUrl:
        'https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1602248693535-KTGCFTA50807510I5LVN/Tom+LinkedIn+Headshot+Profile+Picture.jpg?format=500w',
      Username: 'Shaheer Ahmed',
      Email: 'Shaheer@gmail.com',
      LastMessage: 'I will be back',
      Time: '12:00 PM',
    },
    {
      ProfileUrl:
        'https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1599805610146-J0G5GMGFBXVWND4Z71UK/Aleem+Business+Headshot+for+LinkedIn+Profile.jpg',
      Username: 'Amer Ahmed',

      Email: 'Shaheer@gmail.com',
      LastMessage: 'I will be back',
      Time: '12:00 PM',
    },

    {
      ProfileUrl:
        'https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1599805610146-J0G5GMGFBXVWND4Z71UK/Aleem+Business+Headshot+for+LinkedIn+Profile.jpg',
      Username: 'Ali Ahmed',

      Email: 'Shaheer@gmail.com',
      LastMessage: 'Rehan da bhai',
      Time: '11:00 PM',
    },
    {
      ProfileUrl:
        'https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1599805610146-J0G5GMGFBXVWND4Z71UK/Aleem+Business+Headshot+for+LinkedIn+Profile.jpg',
      Username: 'Dani Ahmed',

      Email: 'Shaheer@gmail.com',
      LastMessage: 'Ok boss',
      Time: '10:00 PM',
    },
    {
      ProfileUrl:
        'https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1599805610146-J0G5GMGFBXVWND4Z71UK/Aleem+Business+Headshot+for+LinkedIn+Profile.jpg',
      Username: 'Shaheer Ahmed',
      Email: 'Shaheer@gmail.com',
      LastMessage: 'I will be back',
      Time: '12:00 PM',
    },
    {
      ProfileUrl:
        'https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1599805610146-J0G5GMGFBXVWND4Z71UK/Aleem+Business+Headshot+for+LinkedIn+Profile.jpg',
      Username: 'Shaheer Ahmed',
      Email: 'Shaheer@gmail.com',
      LastMessage: 'I will be back',
      Time: '12:00 PM',
    },
    {
      ProfileUrl:
        'https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1599805610146-J0G5GMGFBXVWND4Z71UK/Aleem+Business+Headshot+for+LinkedIn+Profile.jpg',
      Username: 'Shaheer Ahmed',
      Email: 'Shaheer@gmail.com',
      LastMessage: 'I will be back',
      Time: '12:00 PM',
    },
    {
      ProfileUrl:
        'https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1599805610146-J0G5GMGFBXVWND4Z71UK/Aleem+Business+Headshot+for+LinkedIn+Profile.jpg',
      Username: 'Shaheer Ahmed',
      Email: 'Shaheer@gmail.com',
      LastMessage: 'I will be back',
      Time: '12:00 PM',
    },

    {
      ProfileUrl:
        'https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1599805610146-J0G5GMGFBXVWND4Z71UK/Aleem+Business+Headshot+for+LinkedIn+Profile.jpg',
      Username: 'Shaheer Ahmed',
      Email: 'Shaheer@gmail.com',
      LastMessage: 'I will be back',
      Time: '12:00 PM',
    },
    {
      ProfileUrl:
        'https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1599805610146-J0G5GMGFBXVWND4Z71UK/Aleem+Business+Headshot+for+LinkedIn+Profile.jpg',
      Username: 'Shaheer Ahmed',
      Email: 'Shaheer@gmail.com',
      LastMessage: 'I will be back',
      Time: '12:00 PM',
    },
    {
      ProfileUrl:
        'https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1599805610146-J0G5GMGFBXVWND4Z71UK/Aleem+Business+Headshot+for+LinkedIn+Profile.jpg',
      Username: 'Shaheer Ahmed',
      Email: 'Shaheer@gmail.com',
      LastMessage: 'I will be back',
      Time: '12:00 PM',
    },
    {
      ProfileUrl:
        'https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1599805610146-J0G5GMGFBXVWND4Z71UK/Aleem+Business+Headshot+for+LinkedIn+Profile.jpg',
      Username: 'Shaheer Ahmed',
      Email: 'Shaheer@gmail.com',
      LastMessage: 'I will ',
      Time: '12:00 PM',
    },
    {
      ProfileUrl:
        'https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1599805610146-J0G5GMGFBXVWND4Z71UK/Aleem+Business+Headshot+for+LinkedIn+Profile.jpg',
      Username: 'Shaheer Ahmed',
      Email: 'Shaheer@gmail.com',
      LastMessage: 'I will be back',
      Time: '12:00 PM',
    },
    {
      ProfileUrl:
        'https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1599805610146-J0G5GMGFBXVWND4Z71UK/Aleem+Business+Headshot+for+LinkedIn+Profile.jpg',
      Username: 'Shaheer Ahmed',
      Email: 'Shaheer@gmail.com',
      LastMessage: 'I will be back',
      Time: '12:00 PM',
    },
    {
      ProfileUrl:
        'https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1599805610146-J0G5GMGFBXVWND4Z71UK/Aleem+Business+Headshot+for+LinkedIn+Profile.jpg',
      Username: 'Shaheer Ahmed',
      Email: 'Shaheer@gmail.com',
      LastMessage: 'I will be back',
      Time: '12:00 PM',
    },
    {
      ProfileUrl:
        'https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1599805610146-J0G5GMGFBXVWND4Z71UK/Aleem+Business+Headshot+for+LinkedIn+Profile.jpg',
      Username: 'Shaheer Ahmed',
      Email: 'Shaheer@gmail.com',
      LastMessage: 'I will be back',
      Time: '12:00 PM',
    },
  ]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Font.black}}>
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

            alignItems: 'center',
            marginLeft: 15,
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
          <Text style={Commonstyles.LogoWhite}>Chat</Text>
        </View>
        {/* Notification icon */}
        <View
          style={{
            justifyContent: 'center',
            marginRight: 15,
          }}>
          <TouchableOpacity
            onPress={() => {
              alert('Working on it');
            }}>
            <Ionicons
              name={'notifications-outline'}
              size={28}
              color={Font.white}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Chat List */}
      <FlatListForChat ChatListArray={chatListArray} navigation={Nav} />
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({});
