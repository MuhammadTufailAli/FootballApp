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

import AntDesign from 'react-native-vector-icons/AntDesign';

//import font and design
import Entypo from 'react-native-vector-icons/Entypo';
import {Font, Commonstyles} from '../Font/Font';

const FlatListForGroups = ({GroupArray, navigation}) => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        contentContainerStyle={{paddingBottom: 70}}
        showsVerticalScrollIndicator={false}
        data={GroupArray}
        renderItem={({item, index}) => {
          if (item.UserImageUrl.length > 4) {
            var UserImages = item.UserImageUrl.slice(1, 5);
          } else {
            var UserImages = item.UserImageUrl;
          }
          return (
            <View>
              <TouchableOpacity
                onPress={() => {
                  console.log('I am pressed');
                  navigation.navigate('IndividualGroup', {
                    grouparray: item,
                  });
                }}
                style={{
                  marginLeft: 15,
                  marginRight: 15,
                  marginTop: 15,
                  backgroundColor: Font.grey,
                  paddingBottom: 5,
                  borderRadius: 5,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                {/* Left Side */}
                <View style={{margin: 10, flexDirection: 'row'}}>
                  {/* Image */}
                  <View>
                    <Image
                      source={{
                        uri: item?.GroupImage,
                      }}
                      style={{
                        width: 97,
                        height: 97,

                        borderRadius: 7,
                      }}
                    />
                  </View>
                  {/* Group Info */}
                  <View style={{marginLeft: 13}}>
                    <Text style={Commonstyles.TextWhiteGroupName}>
                      {item?.GroupName}
                    </Text>
                    <Text style={Commonstyles.TextWhitesmall}>
                      {item?.Members} Members
                    </Text>
                    <View style={{flexDirection: 'row', marginTop: 15}}>
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
                      {item.UserImageUrl.length > 4 ? (
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
                </View>
                {/* Right Side with only 3 dot notification */}
                <View style={{marginRight: 15, alignSelf: 'flex-end'}}>
                  <TouchableOpacity>
                    <Entypo
                      name={'dots-three-horizontal'}
                      size={23}
                      color={Font.white}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default FlatListForGroups;

const styles = StyleSheet.create({});
