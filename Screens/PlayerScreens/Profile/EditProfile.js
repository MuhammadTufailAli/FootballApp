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
import {Font, Commonstyles} from '../../Font/Font';

//importing icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//Importing Image Picker
import ImagePicker from 'react-native-image-crop-picker';

//Importing DropDown
import DropDownPicker from 'react-native-dropdown-picker';

const EditProfile = ({navigation, route}) => {
  const userDetails = route?.params?.userDetails;
  var [UserNewPhoto, setUserNewPhoto] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'GoalKeeper', value: 'GoalKeeper'},
    {label: 'Stricker', value: 'Stricker'},
    {label: 'Full-back', value: 'Full-back'},
    {label: 'Midfilder', value: 'Midfilder'},
    {label: 'Winger', value: 'Winger'},
  ]);

  const [open2, setOpen2] = useState(false);
  const [Gender, setGender] = useState(null);
  const [items2, setItems2] = useState([
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
  ]);

  //Open Image Picker to select photo
  const openImagePicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };
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
            Editing Profile{'\n'}
            <Text style={Commonstyles.TextGrey}>Information</Text>
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

      {/* Profile Photo */}
      <View style={{width: '100%', height: 458, zIndex: 100}}>
        <ImageBackground
          source={{
            uri: 'https://c4.wallpaperflare.com/wallpaper/809/621/117/lionel-messi-wallpaper-preview.jpg',
          }}
          resizeMode="cover"
          style={{width: '100%', height: 358}}>
          <View style={{justifyContent: 'space-between', flex: 1}}>
            {/* Top Area */}
            <View
              style={{
                margin: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              {/* Name Area */}
              <View>
                <TouchableOpacity
                  onPress={openImagePicker}
                  style={{flexDirection: 'row', alignItems: 'center'}}>
                  <AntDesign
                    name={'camera'}
                    size={25}
                    color={Font.white}
                    style={{marginRight: 8}}
                  />
                  <Text style={Commonstyles.TextWhite12}>Upload Picture</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* Bottom Area */}
            <View style={{margin: 15, marginBottom: -30}}>
              {/* Carrier */}
              <View style={{flexDirection: 'row'}}>
                <Ionicons
                  name={'shirt-outline'}
                  size={25}
                  color={Font.green}
                  style={{marginTop: 8}}
                />
                <Ionicons
                  name={'football-outline'}
                  size={13}
                  color={Font.green}
                  style={{
                    marginLeft: -11,
                    marginRight: 10,
                    marginTop: 22,
                  }}
                />
                <View>
                  <DropDownPicker
                    style={{
                      backgroundColor: Font.grey,
                    }}
                    placeholderStyle={Commonstyles?.TextGreen12}
                    arrowIconStyle={{
                      color: 'white',
                    }}
                    labelStyle={Commonstyles?.TextGreen12}
                    textStyle={Commonstyles?.TextWhite12300}
                    dropDownContainerStyle={{
                      backgroundColor: Font.grey,
                    }}
                    containerStyle={{
                      width: 144,
                      height: 100,
                    }}
                    maxHeight={100}
                    placeholder={userDetails?.carrier}
                    disableBorderRadius={true}
                    showArrowIcon={true}
                    showTickIcon={true}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                  />
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>

      {/* OtherInfo */}
      <View
        style={{
          marginTop: -99,
          marginBottom: 100,

          borderRadius: 18,
          backgroundColor: Font.black,
        }}>
        {/* About Heading */}
        <View
          style={{
            padding: 6,
            paddingLeft: 15,
            borderBottomWidth: 1,
            borderColor: '#3E3E3E',
          }}>
          <Text style={Commonstyles?.TextWhitesmall}>Other</Text>
        </View>
        {/* Other Information Fields */}
        <View style={{marginTop: 20}}>
          <View
            style={{
              justifyContent: 'center',
              marginLeft: 15,
              marginRight: 15,
            }}>
            <TextInput
              name="email"
              style={Commonstyles.inputText}
              placeholder={userDetails?.FirstName + ' ' + userDetails?.LastName}
              placeholderTextColor={Font.greyText}
              // value={values.email}
              // onChangeText={handleChange('email')}
              keyboardType="email-address"
            />
            <FontAwesome
              name={'user-circle-o'}
              size={26}
              color={'white'}
              style={{
                position: 'absolute',
                right: 10,
              }}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              marginLeft: 15,
              marginRight: 15,
              marginTop: 10,
            }}>
            <TextInput
              name="phone"
              style={Commonstyles.inputText}
              placeholder={userDetails?.Phone}
              placeholderTextColor={Font.greyText}
              keyboardType={'phone-pad'}
              // value={values.email}
              // onChangeText={handleChange('email')}
            />
            <FontAwesome
              name={'phone-square'}
              size={26}
              color={'white'}
              style={{
                position: 'absolute',
                right: 10,
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              zIndex: 100,
              marginLeft: 15,
              marginRight: 15,
              marginTop: 10,
              marginBottom: -18,
            }}>
            <View style={{flex: 1}}>
              <DropDownPicker
                style={{
                  backgroundColor: Font.grey,
                  height: 63,
                }}
                placeholderStyle={Commonstyles?.TextWhite12300}
                arrowIconStyle={{
                  color: 'white',
                }}
                labelStyle={Commonstyles?.TextWhite12300}
                textStyle={Commonstyles?.TextWhite12300}
                dropDownContainerStyle={{
                  backgroundColor: Font.grey,
                }}
                containerStyle={{
                  width: 154,
                  height: 80,
                }}
                maxHeight={80}
                placeholder={userDetails?.gender}
                disableBorderRadius={true}
                showArrowIcon={true}
                showTickIcon={true}
                open={open2}
                value={Gender}
                items={items2}
                setOpen={setOpen2}
                setValue={setGender}
                setItems={setItems2}
              />
            </View>
            <View style={{flex: 1}}>
              <TextInput
                name="height"
                style={Commonstyles.inputText}
                placeholder={userDetails?.Height + 'ft'}
                placeholderTextColor={Font.greyText}
                // value={values.email}
                // onChangeText={handleChange('email')}
                keyboardType={'phone-pad'}
              />
            </View>
          </View>

          <View
            style={{
              justifyContent: 'center',
              marginLeft: 15,
              marginRight: 15,
              marginTop: 10,
            }}>
            <TextInput
              name="DOB"
              style={Commonstyles.inputText}
              placeholder={userDetails.DOB ? userDetails.DOB : 'Enter DOB'}
              placeholderTextColor={Font.greyText}
              // value={values.email}
              // onChangeText={handleChange('email')}
              keyboardType="email-address"
            />
            <FontAwesome
              name={'calendar'}
              size={26}
              color={'white'}
              style={{
                position: 'absolute',
                right: 10,
              }}
            />
          </View>
          {/* Update Button */}
          <View style={{marginTop: 20, marginLeft: 15, marginRight: 15}}>
            <TouchableOpacity style={Commonstyles.ButtonGreen}>
              <Text style={Commonstyles.TextWhite}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  inputStyle: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderColor: '#dadae8',
    borderRadius: 10,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 0,
    color: Font.TextColor,
  },
});
