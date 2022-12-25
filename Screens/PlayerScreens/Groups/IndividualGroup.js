import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

//Importing FlatList
import FlatListForFeed from '../../Components/FlatListForFeed';

//importing icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//import font and design
import {Font, Commonstyles} from '../../Font/Font';

const IndividualGroup = ({navigation, route}) => {
  const Nav = navigation;
  const GroupArray = route.params.grouparray;
  if (GroupArray?.UserImageUrl.length > 4) {
    var UserImages = GroupArray.UserImageUrl.slice(1, 5);
  } else {
    var UserImages = GroupArray.UserImageUrl;
  }
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
        'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: ',
      Likes: 25,
      Comment: 5,
    },
  ]);
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
            {GroupArray?.GroupName}
            {'\n'}
            <Text style={Commonstyles.TextGrey}>
              See what's new in the group
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

      {/* Group Info */}
      <View
        style={{
          backgroundColor: Font.grey,
          paddingBottom: 15,
          marginBottom: 10,
        }}>
        <View style={{margin: 13}}>
          <Image
            source={{
              uri: GroupArray?.GroupImage,
            }}
            style={{
              width: '100%',
              height: 140,

              borderRadius: 5,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            margin: 13,
            marginTop: 0,
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={Commonstyles.TextWhiteGroupName}>
              {GroupArray?.GroupName}
              {'  '}
              <Text style={Commonstyles.TextGreysmall}>
                {GroupArray?.Members} Members
              </Text>
            </Text>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              {UserImages.map(image => {
                return (
                  <View>
                    <Image
                      source={{
                        uri: image?.UserImage,
                      }}
                      style={{
                        width: 24,
                        height: 24,

                        borderRadius: 90 / 2,
                      }}
                    />
                  </View>
                );
              })}
              {GroupArray.UserImageUrl.length > 4 ? (
                <TouchableOpacity style={{marginLeft: 2}}>
                  <AntDesign
                    name={'pluscircleo'}
                    size={24}
                    color={Font.white}
                    style={{marginRight: 8}}
                  />
                </TouchableOpacity>
              ) : null}
            </View>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('IndividualGroupDetails', {
                  groupArray: GroupArray,
                });
              }}>
              <Entypo
                name={'dots-three-horizontal'}
                size={23}
                color={Font.white}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Post thing */}
      <View
        style={{
          backgroundColor: Font.grey,
          paddingBottom: 20,
          marginBottom: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            margin: 15,

            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: GroupArray?.UserImageUrl[0].UserImage,
            }}
            style={{
              width: 30,
              height: 30,

              borderRadius: 90 / 2,
            }}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('GroupAddPost', {
                groupArray: GroupArray,
              });
            }}
            style={{
              marginLeft: 10,
              width: '90%',
              marginRight: 15,
            }}>
            <View pointerEvents="none">
              <TextInput
                name="password"
                secureTextEntry={true}
                style={Commonstyles.TextInput}
                placeholder="Post Something"
                placeholderTextColor={Font.TextGrey}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 15,
            marginRight: 15,
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => {
              navigation.navigate('GroupAddPost', {
                groupArray: GroupArray,
              });
            }}>
            <Feather name={'image'} size={23} color={Font.white} />
            <Text style={styles.TextWhite}>Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => {
              navigation.navigate('GroupAddPost', {
                groupArray: GroupArray,
              });
            }}>
            <FontAwesome name={'video-camera'} size={23} color={Font.green} />
            <Text style={styles.TextWhite}>Video</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => {
              navigation.navigate('GroupAddPost', {
                groupArray: GroupArray,
              });
            }}>
            <MaterialCommunityIcons
              name={'file-gif-box'}
              size={23}
              color={Font.green}
            />
            <Text style={styles.TextWhite}>GIF</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Flatlist of individual group */}
      <FlatListForFeed FeedArray={feedArray} navigation={Nav} />
    </ScrollView>
  );
};

export default IndividualGroup;

const styles = StyleSheet.create({
  TextWhite: {
    fontFamily: 'Lexend-Regular',
    fontSize: 14,
    fontWeight: '400',
    color: '#FFFFFF',
    marginLeft: 6,
  },
});
