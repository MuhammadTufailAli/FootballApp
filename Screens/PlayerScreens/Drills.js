import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
//import font and design
import {Font, Commonstyles} from '../Font/Font';

//importing icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
const Drills = ({navigation}) => {
  const [Category, setCategory] = useState('Passing');
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
          <Text style={Commonstyles.LogoWhite}>Drills</Text>
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

      {/* Search bar */}
      <View
        style={{
          justifyContent: 'center',
          margin: 15,
        }}>
        <TextInput
          name="email"
          style={Commonstyles.inputText}
          placeholder="Search drill"
          placeholderTextColor={Font.greyText}
          // onChangeText={text => {
          //   text = text.toLowerCase();
          //   setuserToShow(
          //     GroupArray?.UserImageUrl.filter(data => {
          //       var user = data.Name.toLowerCase();
          //       if (user.includes(text)) {
          //         return data;
          //       }
          //     }),
          //   );
          // }}
          // keyboardType="email-address"
        />
        <AntDesign
          name={'search1'}
          size={22}
          color={Font.greyText}
          style={{
            position: 'absolute',
            right: 10,
          }}
        />
      </View>

      {/* Categories */}
      <View style={{margin: 15, marginRight: 0, marginTop: 5}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            onPress={() => {
              setCategory('Passing');
            }}
            style={{
              height: 27,
              width: 76,
              borderRadius: 5,
              marginRight: 8,

              alignItems: 'center',
              justifyContent: 'center',

              borderWidth: 1,
              backgroundColor: Category === 'Passing' ? Font.green : Font.grey,
            }}>
            <Text style={Commonstyles?.TextWhite12300}>Passing</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 27,
              width: 109,
              borderRadius: 5,
              marginRight: 8,

              alignItems: 'center',
              justifyContent: 'center',

              borderWidth: 1,
              backgroundColor:
                Category === 'Goal Keeping' ? Font.green : Font.grey,
            }}
            onPress={() => {
              setCategory('Goal Keeping');
            }}>
            <Text style={Commonstyles?.TextWhite12300}>Goal Keeping</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 27,
              width: 91,
              borderRadius: 5,
              marginRight: 8,

              alignItems: 'center',
              justifyContent: 'center',

              borderWidth: 1,
              backgroundColor:
                Category === 'Defending' ? Font.green : Font.grey,
            }}
            onPress={() => {
              setCategory('Defending');
            }}>
            <Text style={Commonstyles?.TextWhite12300}>Defending</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 27,
              width: 88,
              borderRadius: 5,
              marginRight: 8,

              alignItems: 'center',
              justifyContent: 'center',

              borderWidth: 1,
              backgroundColor: Category === 'Shooting' ? Font.green : Font.grey,
            }}
            onPress={() => {
              setCategory('Shooting');
            }}>
            <Text style={Commonstyles?.TextWhite12300}>Shooting</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Drills;

const styles = StyleSheet.create({});
