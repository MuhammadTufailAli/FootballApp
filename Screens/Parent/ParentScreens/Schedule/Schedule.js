import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
Ionicons;
//importing calender
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

//importing Flat list
import FlatListForSchedule from '../../../Components/FlatListForSchedule';

//import font and design
import {Font, Commonstyles} from '../../../Font/Font';

//importing icons
import Ionicons from 'react-native-vector-icons/Ionicons';
const Schedule = ({navigation}) => {
  const [Schedule, SetSchedule] = useState('Upcoming');
  const [UpcomingArray, SetUpcomingArray] = useState([
    {
      Title: 'PreSeason training',
      Info: 'This is information given to you',
      Date: 'Sep 25, 2022',
    },
    {
      Title: 'PreSeason training',
      Info: 'This is information given to you',
      Date: 'Sep 25, 2022',
    },
    {
      Title: 'PreSeason training',
      Info: 'This is information given to you',
      Date: 'Sep 25, 2022',
    },
    {
      Title: 'PreSeason training',
      Info: 'This is information given to youThis is information given to youThis is information given to youThis is information given to youThis is information given to youThis is information given to youThis is information given to youThis is information given to youThis is information given to youThis is information given to youThis is information given to youThis is information given to youThis is information given to youThis is information given to youThis is information given to youThis is information given to youThis is information given to youThis is information given to you',
      Date: 'Sep 25, 2022',
    },
    {
      Title: 'PreSeason training',
      Info: 'This is information given to you',
      Date: 'Sep 25, 2022',
    },
    {
      Title: 'PreSeason training',
      Info: 'This is information given to you',
      Date: 'Sep 25, 2022',
    },
  ]);

  const [scheduleDays, SetscheduleDays] = useState([
    {date: '2022-12-16', schedule: 'yes'},
    {date: '2022-12-15', schedule: 'no'},
    {date: '2022-12-17', schedule: 'yes'},
    {date: '2022-12-18', schedule: 'yes'},
    {date: '2022-12-19', schedule: 'yes'},
    {date: '2022-12-20', schedule: 'no'},
    {date: '2022-12-24', schedule: 'no'},
    {date: '2022-12-26', schedule: 'no'},
  ]);

  let markedDay = {};

  scheduleDays.map(item => {
    if (item.schedule === 'yes') {
      markedDay[item.date] = {
        selected: true,

        selectedColor: Font.green,
      };
    } else {
      markedDay[item.date] = {
        selected: true,
        selectedColor: 'red',
      };
    }
  });

  //Getting today date in yyy-mmm-ddd format
  let yourDate = new Date();
  yourDate.toISOString().split('T')[0];
  const offset = yourDate.getTimezoneOffset();
  yourDate = new Date(yourDate.getTime() - offset * 60 * 1000);
  yourDate = yourDate.toISOString().split('T')[0];
  console.log(yourDate);
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
              size={34}
              color={Font.green}
            />
          </TouchableOpacity>
          <Text style={Commonstyles.LogoWhite}>Schedule</Text>
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
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: Font.grey,
          height: 52,
          width: '90%',
          alignItems: 'center',
          borderRadius: 26,
        }}>
        <TouchableOpacity
          onPress={() => {
            SetSchedule('Upcoming');
          }}
          style={{
            backgroundColor: Schedule === 'Upcoming' ? Font.green : null,
            borderRadius: 25,
            height: 39,
            width: '34%',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 5,
          }}>
          <Text style={Commonstyles.TextWhiteFeed}>Upcoming</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            SetSchedule('Calendar');
          }}
          style={{
            backgroundColor: Schedule === 'Calendar' ? Font.green : null,
            borderRadius: 25,
            height: 39,
            width: '32%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={Commonstyles.TextWhiteFeed}>Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            SetSchedule('History');
          }}
          style={{
            backgroundColor: Schedule === 'History' ? Font.green : null,
            borderRadius: 25,
            height: 39,
            width: '34%',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 5,
          }}>
          <Text style={Commonstyles.TextWhiteFeed}>History</Text>
        </TouchableOpacity>
      </View>

      {/* Showing Schedule */}
      <View style={{margin: 15}}>
        {Schedule === 'Upcoming' ? (
          <View>
            <FlatListForSchedule dataArray={UpcomingArray} />
          </View>
        ) : Schedule === 'Calendar' ? (
          <View>
            <Calendar
              markedDates={markedDay}
              enableSwipeMonths={true}
              hideExtraDays={true}
              initialDate={yourDate}
              style={{
                backgroundColor: Font.grey,
                color: 'white',
              }}
              theme={{
                calendarBackground: Font.grey,

                textSectionTitleColor: Font.white,
                // textSectionTitleDisabledColor: '#d9e1e8',

                selectedDayTextColor: '#ffffff',

                dayTextColor: Font.white,

                arrowColor: Font.white,

                monthTextColor: Font.white,

                textDayFontFamily: Font.fontfamily,
                textMonthFontFamily: Font.fontfamily,
                textDayHeaderFontFamily: Font.fontfamily,
                textDayFontWeight: '400',
                textMonthFontWeight: 'bold',
                textDayHeaderFontWeight: '300',
                textDayFontSize: 15,
                textMonthFontSize: 20,
                textDayHeaderFontSize: 12,
              }}
            />
            {/* Telling about calender */}
            <View style={{margin: 15}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: 90 / 2,
                    backgroundColor: 'red',
                    marginRight: 10,
                  }}></View>
                <Text style={Commonstyles.TextWhiteCalender}>
                  No Schedule/ Off Day
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <View
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: 90 / 2,
                    backgroundColor: Font.green,
                    marginRight: 10,
                  }}></View>
                <Text style={Commonstyles.TextWhiteCalender}>
                  Something Scheduled
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <View
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: 90 / 2,
                    backgroundColor: '#00adf5',
                    marginRight: 10,
                  }}></View>
                <Text style={Commonstyles.TextWhiteCalender}>Today date</Text>
              </View>
            </View>
          </View>
        ) : (
          <View>
            <FlatListForSchedule dataArray={UpcomingArray} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Schedule;

const styles = StyleSheet.create({});
