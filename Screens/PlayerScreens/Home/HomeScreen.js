import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

//import font and design
import {Font, Commonstyles} from '../../Font/Font';

//importing icons
import Ionicons from 'react-native-vector-icons/Ionicons';

//Importing FlatList
import FlatListForFeed from '../../Components/FlatListForFeed';

const HomeScreen = ({navigation}) => {
  const Nav = navigation;
  const [feedArray, setFeedArray] = useState([
    {
      UserImage:
        'https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1599805610146-J0G5GMGFBXVWND4Z71UK/Aleem+Business+Headshot+for+LinkedIn+Profile.jpg',
      Email: 'shaheer121@gmail.com',
      UserName: 'Shaheer Khan',

      Image:
        'https://img.freepik.com/premium-photo/football-stadium-with-stands-full-fans-waiting-night-game-d-rendering_207634-4274.jpg?w=2000',
      Likes: 25,
      Comment: 5,
    },
    {
      UserImage:
        'https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1602248693535-KTGCFTA50807510I5LVN/Tom+LinkedIn+Headshot+Profile+Picture.jpg?format=500w',
      Email: 'alitufail95@gmail.com',
      UserName: 'Tufail Ali',
      Role: 'Admin',
      Status:
        'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit”  Length and appearance do not determine whether a section in a paper is a paragraph',
      Likes: 25,
      Comment: 5,
    },
    {
      UserImage:
        'https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1602248693535-KTGCFTA50807510I5LVN/Tom+LinkedIn+Headshot+Profile+Picture.jpg?format=500w',
      Email: 'tufail95@gmail.com',
      UserName: 'Ali Khan',
      Role: 'Coach',
      Image:
        'https://img.freepik.com/premium-photo/football-stadium-with-stands-full-fans-waiting-night-game-d-rendering_207634-4274.jpg?w=2000',

      Status:
        'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length',
      Likes: 25,
      Comment: 5,
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
          <Text style={Commonstyles.LogoWhite}>
            News Feed{'\n'}
            <Text style={Commonstyles.TextGrey}>
              See what's new from the coaches!
            </Text>
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
              alert('Notification under development');
            }}>
            <Ionicons
              name={'notifications-outline'}
              size={28}
              color={Font.white}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* FlatList to show the Feeds */}

      <FlatListForFeed FeedArray={feedArray} navigation={Nav} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
