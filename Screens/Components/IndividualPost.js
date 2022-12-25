import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

//import font and design
import {Font, Commonstyles} from '../Font/Font';

//importing icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

const IndividualPost = ({navigation, route}) => {
  console.log(route?.params?.PostDetails);
  const PostDetails = route?.params?.PostDetails;
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
              navigation.goBack();
            }}>
            <AntDesign name={'left'} size={20} color={Font.white} />
          </TouchableOpacity>
          <Text style={Commonstyles.TextWhiteCalender}>
            {PostDetails?.UserName}
            {'\n'}
            <Text style={Commonstyles.TextGrey}>Post</Text>
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

      <View
        style={{
          marginBottom: 13,
          backgroundColor: Font.grey,
          paddingBottom: 5,
        }}>
        {/* Top Part */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 15,
            marginRight: 15,
            marginTop: 15,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Image
              source={{
                uri: PostDetails?.UserImage,
              }}
              style={{
                width: 34,
                height: 34,

                borderRadius: 90 / 2,
              }}
            />
            <View style={{marginLeft: 10}}>
              <Text style={Commonstyles.TextGreysmallEmail}>
                {PostDetails?.Email}
                {'  '}

                {'\n'}
                <Text style={Commonstyles.TextWhite}>
                  {PostDetails.UserName}
                </Text>
              </Text>
            </View>
            {PostDetails.Role ? (
              <Text
                style={{
                  fontFamily: 'Lexend-Light',
                  fontSize: 10,
                  fontWeight: '300',
                  color: '#FFFFFF',
                  backgroundColor:
                    PostDetails?.Role === 'Admin' ? Font.green : Font.greyText,
                  borderRadius: 5,
                  width: 45,
                  height: 19,
                  textAlign: 'center',
                }}>
                {PostDetails?.Role}
              </Text>
            ) : null}
          </View>

          <View style={{justifyContent: 'center'}}>
            <TouchableOpacity>
              <Entypo
                name={'dots-three-horizontal'}
                size={28}
                color={Font.white}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Status area */}
        {PostDetails.Status ? (
          <View style={styles.allViewStyle}>
            <Text style={Commonstyles.TextWhiteFeed}>
              {PostDetails?.Status}
            </Text>
          </View>
        ) : null}

        {/* Image Area */}
        {PostDetails.Image ? (
          <View style={styles.allViewStyle}>
            <Image
              source={{
                uri: PostDetails?.Image,
              }}
              style={{
                width: '100%',
                height: 207,

                borderRadius: 8,
              }}
            />
          </View>
        ) : null}

        {/* Like comment area */}
        <View
          style={{
            marginLeft: 15,
            marginRight: 15,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 8,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <TouchableOpacity>
              <AntDesign
                name={'heart'}
                size={22}
                color={'#BE1931'}
                style={{marginRight: 8}}
              />
            </TouchableOpacity>
            <Text style={Commonstyles.TextWhite}>{PostDetails?.Likes}</Text>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Comments');
              }}>
              <FontAwesome
                name={'commenting'}
                size={22}
                color={Font.white}
                style={{marginRight: 8, marginLeft: 15}}
              />
            </TouchableOpacity>
            <Text style={Commonstyles.TextWhite}>{PostDetails?.Comment}</Text>
          </View>
          <View>
            <TouchableOpacity>
              <FontAwesome
                name={'share'}
                size={18}
                color={Font.white}
                style={{marginRight: 8, marginLeft: 15}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default IndividualPost;

const styles = StyleSheet.create({
  allViewStyle: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
  },
});
