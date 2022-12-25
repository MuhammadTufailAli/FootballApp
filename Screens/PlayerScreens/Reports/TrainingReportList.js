import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
//import font and design
import {Font, Commonstyles} from '../../Font/Font';

//Importing DropDown
import DropDownPicker from 'react-native-dropdown-picker';

//importing icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const TrainingReportList = ({navigation, route}) => {
  const AttendanceArray = route?.params?.attendence;
  const [selectedMonth, SetSelectedMonth] = useState('Jan');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Jan', value: 'Jan'},
    {label: 'Feb', value: 'Feb'},
    {label: 'Mar', value: 'March'},
    {label: 'Apr', value: 'April'},
    {label: 'May', value: 'May'},
    {label: 'Jun', value: 'June'},
    {label: 'July', value: 'July'},
    {label: 'Aug', value: 'August'},
    {label: 'Sep', value: 'Sept'},
    {label: 'Oct', value: 'Oct'},
    {label: 'Nov', value: 'Nov'},
    {label: 'Dec', value: 'Dec'},
  ]);
  return (
    <View style={{flex: 1, backgroundColor: Font.black}}>
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
          <Text style={Commonstyles.LogoWhite}>Training Report</Text>
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

      {/* Monthly attendence */}
      <View
        style={{
          margin: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          zIndex: 100,
        }}>
        <Text style={Commonstyles.TextWhiteFeatured}>Monthly Attendance</Text>
        <View>
          <DropDownPicker
            style={{
              backgroundColor: Font.blue2,
            }}
            placeholderStyle={Commonstyles?.TextWhite12300}
            labelStyle={Commonstyles?.TextWhite12300}
            textStyle={Commonstyles?.TextWhite12300}
            dropDownContainerStyle={{
              backgroundColor: Font.blue2,
            }}
            containerProps={{
              style: {
                height: open ? 20 * (items.length + 1) : 50,
                width: 81,
                borderRadius: 5,
              },
            }}
            placeholder={selectedMonth}
            // disableBorderRadius={true}
            autoScroll={true}
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

      <View style={{margin: 15}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={AttendanceArray}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  height: 53,

                  marginTop: 10,
                  backgroundColor: Font.grey,
                  borderRadius: 10,
                  borderLeftWidth: 3,
                  borderColor: Font.blue2,
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: 10,
                    marginRight: 10,
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={Commonstyles.TextWhite24}>{item?.Date}</Text>
                    <View style={{marginLeft: 15}}>
                      <Text style={Commonstyles.TextGreysmall300}>
                        {item?.day}
                        {'\n'}
                        {item?.MonthYear}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',

                      alignSelf: 'center',
                    }}>
                    <Text style={Commonstyles.TextGreen24}>{item?.status}</Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default TrainingReportList;

const styles = StyleSheet.create({});
