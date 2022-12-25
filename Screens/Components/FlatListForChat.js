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

const FlatListForChat = ({ChatListArray, navigation}) => {
  return (
    <View style={{marginLeft: 15, marginRight: 15}}>
      <FlatList
        contentContainerStyle={{paddingBottom: 154}}
        showsVerticalScrollIndicator={false}
        data={ChatListArray}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('IndividualChat', {
                  userInfo: item,
                });
              }}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 13,
                paddingBottom: 17,
                borderBottomWidth: 1,
                borderColor: Font.grey,
              }}>
              {/* Left Side */}
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View>
                  <Image
                    source={{
                      uri: item?.ProfileUrl,
                    }}
                    style={{
                      width: 42,
                      height: 42,

                      borderRadius: 90 / 2,
                    }}
                  />
                </View>
                <View style={{marginLeft: 10}}>
                  <Text style={Commonstyles?.TextWhiteMembers}>
                    {item?.Username}
                  </Text>
                  <Text style={Commonstyles?.TextGreyLight}>
                    {item?.LastMessage}
                  </Text>
                </View>
              </View>

              {/* Right Side */}
              <View>
                <Text style={Commonstyles?.TextGrey12}>{item?.Time}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default FlatListForChat;

const styles = StyleSheet.create({});
