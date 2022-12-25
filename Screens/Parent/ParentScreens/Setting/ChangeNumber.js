import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import React, {useState} from 'react';

//import font and design
import {Font, Commonstyles} from '../../../Font/Font';

//importing icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const ChangeNumber = ({navigation}) => {
  const [cartmodalVisible, setcartModalVisible] = useState(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Font.black}}>
      {/* Model to ask for review */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={cartmodalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setcartModalVisible(!cartmodalVisible);
        }}>
        <View style={styles.centeredView2}>
          <View style={styles.modalView3}>
            <TouchableOpacity
              onPress={() => {
                setcartModalVisible(false);
              }}
              style={{
                alignItems: 'flex-end',
                margin: 10,
              }}>
              <Entypo name={'cross'} size={20} color={Font.white} />
            </TouchableOpacity>
            <View
              style={{
                marginTop: 15,
                alignItems: 'center',
              }}>
              <MaterialCommunityIcons
                name={'email'}
                size={38}
                color={'white'}
              />
            </View>
            <View
              style={{
                margin: 20,
                marginBottom: 15,
                alignItems: 'center',
              }}>
              <Text style={Commonstyles.TextWhiteMembers}>
                A confirmation email has been sent on your email. Check email to
                confirm the change
              </Text>
            </View>

            {/* Buttons */}
            <View style={{margin: 15, alignItems: 'center'}}>
              <TouchableOpacity
                style={styles.ButtonGreen}
                onPress={() => {
                  setcartModalVisible(false);
                }}>
                <Text style={Commonstyles.TextWhite}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
          <Text style={Commonstyles.LogoWhite}>Settings</Text>
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

      {/* Change password*/}
      <View style={styles.headingStyle}>
        <Text style={Commonstyles?.TextWhiteFeatured}>Change Phone No</Text>
      </View>

      <View
        style={{
          justifyContent: 'center',
          margin: 15,
        }}>
        <TextInput
          name="email"
          style={Commonstyles.inputText}
          placeholder="Enter Phone No"
          placeholderTextColor={Font.greyText}
          // value={values.email}
          // onChangeText={handleChange('email')}
          keyboardType="email-address"
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

      {/* Buttons */}
      <View style={{margin: 15}}>
        <TouchableOpacity
          style={Commonstyles.ButtonGreen}
          onPress={() => {
            setcartModalVisible(true);
          }}>
          <Text style={Commonstyles.TextWhite}>Send Confirmation Email</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChangeNumber;

const styles = StyleSheet.create({
  headingStyle: {
    paddingLeft: 15,
    paddingBottom: 5,
    marginTop: 15,
    borderBottomWidth: 0.5,
    borderColor: Font.greyText,
  },

  centeredView2: {
    alignItems: 'center',
  },
  centeredView: {},

  modalView3: {
    marginTop: '50%',
    marginBottom: 10,
    backgroundColor: '#333333',
    borderRadius: 26,
    height: 300,
    width: '90%',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalText3: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  TextColor: {
    color: Font.TextBackground,
  },
  ButtonGreen: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 122,
    height: 37.22,
    backgroundColor: '#1DB954',
    borderRadius: 10,
  },
});
