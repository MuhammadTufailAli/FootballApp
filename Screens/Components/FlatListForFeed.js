import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

//importing icons
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//import font and design
import {Font, Commonstyles} from '../Font/Font';

const FlatListForFeed = ({navigation, FeedArray}) => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        contentContainerStyle={{paddingBottom: 70}}
        showsVerticalScrollIndicator={false}
        data={FeedArray}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('IndividualPost', {
                  PostDetails: item,
                });
              }}
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
                      uri: item?.UserImage,
                    }}
                    style={{
                      width: 34,
                      height: 34,

                      borderRadius: 90 / 2,
                    }}
                  />
                  <View style={{marginLeft: 10}}>
                    <Text style={Commonstyles.TextGreysmallEmail}>
                      {item?.Email}
                      {'  '}

                      {'\n'}
                      <Text style={Commonstyles.TextWhite}>
                        {item.UserName}
                      </Text>
                    </Text>
                  </View>
                  {item.Role ? (
                    <Text
                      style={{
                        fontFamily: 'Lexend-Light',
                        fontSize: 10,
                        fontWeight: '300',
                        color: '#FFFFFF',
                        backgroundColor:
                          item?.Role === 'Admin' ? Font.green : Font.greyText,
                        borderRadius: 5,
                        width: 45,
                        height: 19,
                        textAlign: 'center',
                      }}>
                      {item?.Role}
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
              {item.Status ? (
                <View style={styles.allViewStyle}>
                  <Text style={Commonstyles.TextWhiteFeed}>{item?.Status}</Text>
                </View>
              ) : null}

              {/* Image Area */}
              {item.Image ? (
                <View style={styles.allViewStyle}>
                  <Image
                    source={{
                      uri: item?.Image,
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
                  <Text style={Commonstyles.TextWhite}>{item?.Likes}</Text>

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
                  <Text style={Commonstyles.TextWhite}>{item?.Comment}</Text>
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
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default FlatListForFeed;

const styles = StyleSheet.create({
  allViewStyle: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
  },
});
