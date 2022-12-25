import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
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

//Importing Training Screen
import TrainingReport from './TrainingReport';
import {ScrollView} from 'react-native-gesture-handler';

const Reports = ({navigation}) => {
  const Nav = navigation;
  const [Report, SetReport] = useState('Attendance');
  const [selectedMonth, SetSelectedMonth] = useState('Jan');
  const [AttendanceArray, setAttendanceArray] = useState([
    {
      Date: 20,
      day: 'Tuesday',
      MonthYear: 'Jan,2022',
      attendence: 'Present',
    },
    {
      Date: 21,
      day: 'Wednesday',
      MonthYear: 'Jan,2022',
      attendence: 'Present',
    },
    {
      Date: 22,
      day: 'Thursday',
      MonthYear: 'Jan,2022',
      attendence: 'Absent',
    },
    {
      Date: 23,
      day: 'Friday',
      MonthYear: 'Jan,2022',
      attendence: 'Present',
    },
    {
      Date: 24,
      day: 'Saturday',
      MonthYear: 'Jan,2022',
      attendence: 'Present',
    },
    {
      Date: 25,
      day: 'Sunday',
      MonthYear: 'Jan,2022',
      attendence: 'Present',
    },
    {
      Date: 26,
      day: 'Monday',
      MonthYear: 'Jan,2022',
      attendence: 'Present',
    },
  ]);

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
    <ScrollView
      nestedScrollEnabled={true}
      showsVerticalScrollIndicator={false}
      style={{flex: 1, backgroundColor: Font.black}}>
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
          <Text style={Commonstyles.LogoWhite}>Reports</Text>
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

      {/* Selecting schedule */}
      <View
        style={{
          margin: 20,
          marginLeft: 15,
          marginRight: 15,

          backgroundColor: Font.grey,
          height: 52,

          borderRadius: 26,
        }}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              SetReport('Attendance');
            }}
            style={{
              flex: 1,
              backgroundColor: Report === 'Attendance' ? Font.green : null,
              borderRadius: 25,
              height: 39,
              width: '34%',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 5,
            }}>
            <Text style={Commonstyles.TextWhiteFeed}>Attendance Report</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              SetReport('Training');
            }}
            style={{
              flex: 1,
              backgroundColor: Report === 'Training' ? Font.green : null,
              borderRadius: 25,
              height: 39,
              width: '32%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={Commonstyles.TextWhiteFeed}>Training Report</Text>
          </TouchableOpacity>
        </View>
      </View>
      {Report === 'Attendance' ? (
        <View>
          {/* Present and absent */}
          <View
            style={{
              margin: 15,
              marginTop: 0,

              height: 100,
            }}>
            <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
              <View
                style={{
                  flex: 1,
                  height: 93,
                  backgroundColor: Font.grey,
                  marginRight: 5,
                  borderRadius: 11,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={Commonstyles.TextGreen24}>55</Text>

                <Text style={Commonstyles.TextgreyFeed15}>Total Presents</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  height: 93,
                  backgroundColor: Font.grey,
                  marginLeft: 5,
                  borderRadius: 11,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={Commonstyles.TextRed24}>10</Text>

                <Text style={Commonstyles.TextgreyFeed15}>Total Absents</Text>
              </View>
            </View>
          </View>

          {/* Today presence */}
          <View
            style={{
              margin: 15,
              marginTop: 0,
              height: 52,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Font.grey,
              borderRadius: 10,
            }}>
            <Text style={Commonstyles.TextWhiteFeed}>
              You were present at training today!
            </Text>
          </View>

          {/* Monthly Attendence */}
          <View>
            <View
              style={{
                margin: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
                zIndex: 100,
              }}>
              <Text style={Commonstyles.TextWhiteFeatured}>
                Monthly Attendance
              </Text>
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
                  dropDownDirection="BOTTOM"
                  maxHeight={480}
                  containerProps={{
                    style: {
                      height: open ? 0 * (items.length + 1) : 10,
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
            {AttendanceArray.length > 6 ? (
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
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            <Text style={Commonstyles.TextWhite24}>
                              {item?.Date}
                            </Text>
                            <View style={{marginLeft: 15}}>
                              <Text style={Commonstyles.TextGreysmall300}>
                                {item?.day}
                                {'\n'}
                                {item?.MonthYear}
                              </Text>
                            </View>
                          </View>
                          {item.attendence === 'Present' ? (
                            <View
                              style={{
                                width: 84,
                                height: 22,
                                borderRadius: 5,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: Font.green,
                                alignSelf: 'center',
                              }}>
                              <Text style={Commonstyles.TextWhitesmall300}>
                                {item?.attendence}
                              </Text>
                            </View>
                          ) : (
                            <View
                              style={{
                                width: 84,
                                height: 22,
                                borderRadius: 5,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: Font.red,
                                alignSelf: 'center',
                              }}>
                              <Text style={Commonstyles.TextWhitesmall300}>
                                {item?.attendence}
                              </Text>
                            </View>
                          )}
                        </View>
                      </View>
                    );
                  }}
                />
                <TouchableOpacity
                  style={{marginTop: 15, alignItems: 'center'}}
                  onPress={() => {
                    navigation.navigate('MonthlyAttendance', {
                      attendence: AttendanceArray,
                    });
                  }}>
                  <Text style={Commonstyles.TextWhitesmall}>View More</Text>
                  <AntDesign name={'down'} size={16} color={Font.white} />
                </TouchableOpacity>
              </View>
            ) : (
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
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            <Text style={Commonstyles.TextWhite24}>
                              {item?.Date}
                            </Text>
                            <View style={{marginLeft: 15}}>
                              <Text style={Commonstyles.TextGreysmall300}>
                                {item?.day}
                                {'\n'}
                                {item?.MonthYear}
                              </Text>
                            </View>
                          </View>
                          {item.attendence === 'Present' ? (
                            <View
                              style={{
                                width: 84,
                                height: 22,
                                borderRadius: 5,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: Font.green,
                                alignSelf: 'center',
                              }}>
                              <Text style={Commonstyles.TextWhitesmall300}>
                                {item?.attendence}
                              </Text>
                            </View>
                          ) : (
                            <View
                              style={{
                                width: 84,
                                height: 22,
                                borderRadius: 5,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: Font.red,
                                alignSelf: 'center',
                              }}>
                              <Text style={Commonstyles.TextWhitesmall300}>
                                {item?.attendence}
                              </Text>
                            </View>
                          )}
                        </View>
                      </View>
                    );
                  }}
                />
              </View>
            )}
          </View>

          {/* Statistics */}
          <View>
            <View style={{margin: 15}}>
              <Text style={Commonstyles.TextWhiteFeatured}>Statistics</Text>
            </View>
          </View>
        </View>
      ) : (
        <View>
          <TrainingReport navigation={Nav} />
        </View>
      )}
    </ScrollView>
  );
};

export default Reports;

const styles = StyleSheet.create({});
