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

//importing FLatList for group
import FlatListForGroups from '../../../Components/FlatListForGroups';

const Groups = ({navigation}) => {
  var Nav = navigation;
  const [groupArray, setGroupArray] = useState([
    {
      GroupImage:
        'https://img.freepik.com/premium-photo/football-stadium-with-stands-full-fans-waiting-night-game-d-rendering_207634-4274.jpg?w=2000',
      GroupName: 'GoalKeepers',
      Members: 22,
      UserImageUrl: [
        {
          UserImage:
            'https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1602248693535-KTGCFTA50807510I5LVN/Tom+LinkedIn+Headshot+Profile+Picture.jpg?format=500w',
          Name: 'John',
        },
        {
          UserImage:
            'https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1599805610146-J0G5GMGFBXVWND4Z71UK/Aleem+Business+Headshot+for+LinkedIn+Profile.jpg',
          Name: 'Adam',
        },
        {
          UserImage:
            'https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1599805610146-J0G5GMGFBXVWND4Z71UK/Aleem+Business+Headshot+for+LinkedIn+Profile.jpg',
          Name: 'Ross',
        },
        {
          UserImage:
            'https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1599805610146-J0G5GMGFBXVWND4Z71UK/Aleem+Business+Headshot+for+LinkedIn+Profile.jpg',
          Name: 'Chris',
        },
        {
          UserImage:
            'https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1599805610146-J0G5GMGFBXVWND4Z71UK/Aleem+Business+Headshot+for+LinkedIn+Profile.jpg',
          Name: 'Whitman',
        },
        {
          UserImage:
            'https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1599805610146-J0G5GMGFBXVWND4Z71UK/Aleem+Business+Headshot+for+LinkedIn+Profile.jpg',
          Name: 'Ali',
        },
        {
          UserImage:
            'https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1599805610146-J0G5GMGFBXVWND4Z71UK/Aleem+Business+Headshot+for+LinkedIn+Profile.jpg',

          Name: 'Tufail',
        },
      ],
    },
    {
      GroupImage:
        'https://img.freepik.com/premium-photo/football-stadium-with-stands-full-fans-waiting-night-game-d-rendering_207634-4274.jpg?w=2000',
      GroupName: 'Striker Group',
      Members: 22,
      UserImageUrl: [
        {
          UserImage:
            'https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1602248693535-KTGCFTA50807510I5LVN/Tom+LinkedIn+Headshot+Profile+Picture.jpg?format=500w',
        },
        {
          UserImage:
            'https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1599805610146-J0G5GMGFBXVWND4Z71UK/Aleem+Business+Headshot+for+LinkedIn+Profile.jpg',
        },
      ],
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
          <Text style={Commonstyles.LogoWhite}>
            My Groups{'\n'}
            <Text style={Commonstyles.TextGrey}>Groups are listed below</Text>
          </Text>
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
      {/* FlatList for Groups */}
      <FlatListForGroups GroupArray={groupArray} navigation={Nav} />
    </SafeAreaView>
  );
};

export default Groups;

const styles = StyleSheet.create({});