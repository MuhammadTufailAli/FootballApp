import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

//importing icons
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//import font and design
import {Font, Commonstyles} from '../Font/Font';
import {TouchableOpacity} from 'react-native-gesture-handler';
const FlatListForSchedule = ({dataArray}) => {
  console.log(dataArray);
  return (
    <View>
      <FlatList
        contentContainerStyle={{paddingBottom: 165}}
        showsVerticalScrollIndicator={false}
        data={dataArray}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                borderRadius: 10,
                backgroundColor: Font.grey,
                borderRadius: 10,
                borderTopWidth: 2,
                borderRightWidth: 1.5,
                borderLeftWidth: 5,
                borderBottomWidth: 1,

                borderTopColor: Font.greyText,
                borderRightColor: Font.greyText,
                borderLeftColor: Font.green,
                marginBottom: 15,
              }}>
              <View style={styles.ViewStyle}>
                <Text style={Commonstyles.TextWhiteMembersName}>
                  {item?.Title}
                </Text>
              </View>
              <View style={styles.ViewStyle}>
                <Text numberOfLines={3} style={Commonstyles.TextWhite}>
                  {item?.Info}
                </Text>
              </View>
              <View
                style={{
                  marginTop: 20,
                  marginBottom: 20,
                  marginLeft: 15,
                  marginRight: 15,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <FontAwesome
                    name={'calendar'}
                    size={20}
                    color={Font.green}
                    style={{marginRight: 8, marginLeft: 15}}
                  />
                  <Text style={Commonstyles.TextWhiteFeed}>{item?.Date}</Text>
                </View>
                <TouchableOpacity>
                  <Entypo
                    name={'dots-three-horizontal'}
                    size={23}
                    color={Font.white}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default FlatListForSchedule;

const styles = StyleSheet.create({
  ViewStyle: {
    marginLeft: 15,
    marginTop: 8,
    marginRight: 15,
  },
});
