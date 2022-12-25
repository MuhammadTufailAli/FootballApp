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
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const TrainingReport = ({navigation}) => {
  const [MentalCond, setMentalCond] = useState(false);
  const [PersonalCond, setPersonalCond] = useState(false);
  const [PhysicalCond, setPhysicalCond] = useState(false);
  const [FitnessCond, setFitnessCond] = useState(false);
  const [TacticalCond, setTacticalCond] = useState(false);
  const [TechnicalCond, setTechnicalCond] = useState(false);
  const [todayReport, setTodayReport] = useState('false');
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
  const [AttendanceArray, setAttendanceArray] = useState([
    {
      Date: 20,
      day: 'Tuesday',
      MonthYear: 'Jan,2022',
      status: 4.6,
    },
    {
      Date: 21,
      day: 'Wednesday',
      MonthYear: 'Jan,2022',
      status: 4.1,
    },
    {
      Date: 22,
      day: 'Thursday',
      MonthYear: 'Jan,2022',
      status: 4.3,
    },
    {
      Date: 23,
      day: 'Friday',
      MonthYear: 'Jan,2022',
      status: 4.7,
    },
    {
      Date: 24,
      day: 'Saturday',
      MonthYear: 'Jan,2022',
      status: 4.9,
    },
    {
      Date: 25,
      day: 'Sunday',
      MonthYear: 'Jan,2022',
      status: 4.3,
    },
    {
      Date: 26,
      day: 'Monday',
      MonthYear: 'Jan,2022',
      status: 4.6,
    },
  ]);
  return (
    <View>
      {todayReport === true ? (
        <View>
          <View
            style={{
              margin: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
              zIndex: 100,
            }}>
            <Text style={Commonstyles.TextWhiteFeatured}>Today's Report</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <FontAwesome
                name={'calendar'}
                size={20}
                color={Font.green}
                style={{marginRight: 8, marginLeft: 15}}
              />
              <Text style={Commonstyles?.TextWhiteFeed}>Aug 25,2022</Text>
            </View>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => {
                setMentalCond(!MentalCond);
              }}
              style={{
                marginLeft: 15,
                marginRight: 15,
                borderRadius: 5,
                height: 55,
                backgroundColor: MentalCond === true ? Font.green : Font.white,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontFamily: 'Lexend-Regular',
                  fontSize: 16,
                  fontWeight: '500',
                  color: MentalCond === true ? Font.white : Font.black,
                  marginLeft: 10,
                }}>
                Mental Skills
              </Text>
              <AntDesign
                name={MentalCond === true ? 'caretup' : 'caretdown'}
                size={16}
                color={MentalCond === true ? Font.white : Font.black}
                style={{marginRight: 10}}
              />
            </TouchableOpacity>
            {MentalCond ? (
              <View>
                <View
                  style={{
                    marginLeft: 15,
                    marginRight: 15,
                    marginTop: 10,
                    borderRadius: 5,
                    height: 55,
                    backgroundColor: Font.darkGrey,

                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Lexend-Regular',
                      fontSize: 16,
                      fontWeight: '500',
                      color: Font.white,
                      marginLeft: 10,
                    }}>
                    Confidence
                  </Text>
                  <View style={{marginRight: 10}}>
                    <Text style={Commonstyles.TextGreen24}>5.0</Text>
                  </View>
                </View>
                <View
                  style={{
                    marginLeft: 15,
                    marginRight: 15,
                    marginTop: 10,
                    borderRadius: 5,
                    height: 55,
                    backgroundColor: Font.darkGrey,

                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Lexend-Regular',
                      fontSize: 16,
                      fontWeight: '500',
                      color: Font.white,
                      marginLeft: 10,
                    }}>
                    Commitment
                  </Text>
                  <View style={{marginRight: 10}}>
                    <Text style={Commonstyles.TextGreen24}>4.0</Text>
                  </View>
                </View>
                <View
                  style={{
                    marginLeft: 15,
                    marginRight: 15,
                    marginTop: 10,
                    borderRadius: 5,
                    height: 55,
                    backgroundColor: Font.darkGrey,

                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Lexend-Regular',
                      fontSize: 16,
                      fontWeight: '500',
                      color: Font.white,
                      marginLeft: 10,
                    }}>
                    Concentration
                  </Text>
                  <View style={{marginRight: 10}}>
                    <Text style={Commonstyles.TextGreen24}>4.2</Text>
                  </View>
                </View>
                <View
                  style={{
                    marginLeft: 15,
                    marginRight: 15,
                    marginTop: 10,
                    borderRadius: 5,
                    height: 55,
                    backgroundColor: Font.darkGrey,

                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Lexend-Regular',
                      fontSize: 16,
                      fontWeight: '500',
                      color: Font.white,
                      marginLeft: 10,
                    }}>
                    Communication
                  </Text>
                  <View style={{marginRight: 10}}>
                    <Text style={Commonstyles.TextGreen24}>4.5</Text>
                  </View>
                </View>
              </View>
            ) : null}

            <TouchableOpacity
              onPress={() => {
                setPersonalCond(!PersonalCond);
              }}
              style={{
                marginLeft: 15,
                marginRight: 15,
                marginTop: 15,
                borderRadius: 5,
                height: 55,
                backgroundColor:
                  PersonalCond === true ? Font.green : Font.white,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontFamily: 'Lexend-Regular',
                  fontSize: 16,
                  fontWeight: '500',
                  color: PersonalCond === true ? Font.white : Font.black,
                  marginLeft: 10,
                }}>
                Personal traits
              </Text>
              <AntDesign
                name={PersonalCond === true ? 'caretup' : 'caretdown'}
                size={16}
                color={PersonalCond === true ? Font.white : Font.black}
                style={{marginRight: 10}}
              />
            </TouchableOpacity>
            {PersonalCond ? (
              <View>
                <View
                  style={{
                    marginLeft: 15,
                    marginRight: 15,
                    marginTop: 10,
                    borderRadius: 5,
                    height: 55,
                    backgroundColor: Font.darkGrey,

                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Lexend-Regular',
                      fontSize: 16,
                      fontWeight: '500',
                      color: Font.white,
                      marginLeft: 10,
                    }}>
                    Confidence
                  </Text>
                  <View style={{marginRight: 10}}>
                    <Text style={Commonstyles.TextGreen24}>5.0</Text>
                  </View>
                </View>
                <View
                  style={{
                    marginLeft: 15,
                    marginRight: 15,
                    marginTop: 10,
                    borderRadius: 5,
                    height: 55,
                    backgroundColor: Font.darkGrey,

                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Lexend-Regular',
                      fontSize: 16,
                      fontWeight: '500',
                      color: Font.white,
                      marginLeft: 10,
                    }}>
                    Commitment
                  </Text>
                  <View style={{marginRight: 10}}>
                    <Text style={Commonstyles.TextGreen24}>4.0</Text>
                  </View>
                </View>
                <View
                  style={{
                    marginLeft: 15,
                    marginRight: 15,
                    marginTop: 10,
                    borderRadius: 5,
                    height: 55,
                    backgroundColor: Font.darkGrey,

                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Lexend-Regular',
                      fontSize: 16,
                      fontWeight: '500',
                      color: Font.white,
                      marginLeft: 10,
                    }}>
                    Concentration
                  </Text>
                  <View style={{marginRight: 10}}>
                    <Text style={Commonstyles.TextGreen24}>4.2</Text>
                  </View>
                </View>
                <View
                  style={{
                    marginLeft: 15,
                    marginRight: 15,
                    marginTop: 10,
                    borderRadius: 5,
                    height: 55,
                    backgroundColor: Font.darkGrey,

                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Lexend-Regular',
                      fontSize: 16,
                      fontWeight: '500',
                      color: Font.white,
                      marginLeft: 10,
                    }}>
                    Communication
                  </Text>
                  <View style={{marginRight: 10}}>
                    <Text style={Commonstyles.TextGreen24}>4.5</Text>
                  </View>
                </View>
              </View>
            ) : null}

            <TouchableOpacity
              onPress={() => {
                setPersonalCond(!PhysicalCond);
              }}
              style={{
                marginLeft: 15,
                marginRight: 15,
                marginTop: 15,
                borderRadius: 5,
                height: 55,
                backgroundColor:
                  PhysicalCond === true ? Font.green : Font.white,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontFamily: 'Lexend-Regular',
                  fontSize: 16,
                  fontWeight: '500',
                  color: PhysicalCond === true ? Font.white : Font.black,
                  marginLeft: 10,
                }}>
                Physical apptitude
              </Text>
              <AntDesign
                name={PhysicalCond === true ? 'caretup' : 'caretdown'}
                size={16}
                color={PhysicalCond === true ? Font.white : Font.black}
                style={{marginRight: 10}}
              />
            </TouchableOpacity>
            {PhysicalCond ? (
              <View>
                <View
                  style={{
                    marginLeft: 15,
                    marginRight: 15,
                    marginTop: 10,
                    borderRadius: 5,
                    height: 55,
                    backgroundColor: Font.darkGrey,

                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Lexend-Regular',
                      fontSize: 16,
                      fontWeight: '500',
                      color: Font.white,
                      marginLeft: 10,
                    }}>
                    Confidence
                  </Text>
                  <View style={{marginRight: 10}}>
                    <Text style={Commonstyles.TextGreen24}>5.0</Text>
                  </View>
                </View>
                <View
                  style={{
                    marginLeft: 15,
                    marginRight: 15,
                    marginTop: 10,
                    borderRadius: 5,
                    height: 55,
                    backgroundColor: Font.darkGrey,

                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Lexend-Regular',
                      fontSize: 16,
                      fontWeight: '500',
                      color: Font.white,
                      marginLeft: 10,
                    }}>
                    Commitment
                  </Text>
                  <View style={{marginRight: 10}}>
                    <Text style={Commonstyles.TextGreen24}>4.0</Text>
                  </View>
                </View>
                <View
                  style={{
                    marginLeft: 15,
                    marginRight: 15,
                    marginTop: 10,
                    borderRadius: 5,
                    height: 55,
                    backgroundColor: Font.darkGrey,

                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Lexend-Regular',
                      fontSize: 16,
                      fontWeight: '500',
                      color: Font.white,
                      marginLeft: 10,
                    }}>
                    Concentration
                  </Text>
                  <View style={{marginRight: 10}}>
                    <Text style={Commonstyles.TextGreen24}>4.2</Text>
                  </View>
                </View>
                <View
                  style={{
                    marginLeft: 15,
                    marginRight: 15,
                    marginTop: 10,
                    borderRadius: 5,
                    height: 55,
                    backgroundColor: Font.darkGrey,

                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Lexend-Regular',
                      fontSize: 16,
                      fontWeight: '500',
                      color: Font.white,
                      marginLeft: 10,
                    }}>
                    Communication
                  </Text>
                  <View style={{marginRight: 10}}>
                    <Text style={Commonstyles.TextGreen24}>4.5</Text>
                  </View>
                </View>
              </View>
            ) : null}

            <TouchableOpacity
              onPress={() => {
                setFitnessCond(!FitnessCond);
              }}
              style={{
                marginLeft: 15,
                marginRight: 15,
                marginTop: 15,
                borderRadius: 5,
                height: 55,
                backgroundColor: FitnessCond === true ? Font.green : Font.white,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontFamily: 'Lexend-Regular',
                  fontSize: 16,
                  fontWeight: '500',
                  color: FitnessCond === true ? Font.white : Font.black,
                  marginLeft: 10,
                }}>
                Physical fitness
              </Text>
              <AntDesign
                name={FitnessCond === true ? 'caretup' : 'caretdown'}
                size={16}
                color={FitnessCond === true ? Font.white : Font.black}
                style={{marginRight: 10}}
              />
            </TouchableOpacity>
            {FitnessCond ? (
              <View>
                <View
                  style={{
                    marginLeft: 15,
                    marginRight: 15,
                    marginTop: 10,
                    borderRadius: 5,
                    height: 55,
                    backgroundColor: Font.darkGrey,

                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Lexend-Regular',
                      fontSize: 16,
                      fontWeight: '500',
                      color: Font.white,
                      marginLeft: 10,
                    }}>
                    Confidence
                  </Text>
                  <View style={{marginRight: 10}}>
                    <Text style={Commonstyles.TextGreen24}>5.0</Text>
                  </View>
                </View>
                <View
                  style={{
                    marginLeft: 15,
                    marginRight: 15,
                    marginTop: 10,
                    borderRadius: 5,
                    height: 55,
                    backgroundColor: Font.darkGrey,

                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Lexend-Regular',
                      fontSize: 16,
                      fontWeight: '500',
                      color: Font.white,
                      marginLeft: 10,
                    }}>
                    Commitment
                  </Text>
                  <View style={{marginRight: 10}}>
                    <Text style={Commonstyles.TextGreen24}>4.0</Text>
                  </View>
                </View>
                <View
                  style={{
                    marginLeft: 15,
                    marginRight: 15,
                    marginTop: 10,
                    borderRadius: 5,
                    height: 55,
                    backgroundColor: Font.darkGrey,

                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Lexend-Regular',
                      fontSize: 16,
                      fontWeight: '500',
                      color: Font.white,
                      marginLeft: 10,
                    }}>
                    Concentration
                  </Text>
                  <View style={{marginRight: 10}}>
                    <Text style={Commonstyles.TextGreen24}>4.2</Text>
                  </View>
                </View>
                <View
                  style={{
                    marginLeft: 15,
                    marginRight: 15,
                    marginTop: 10,
                    borderRadius: 5,
                    height: 55,
                    backgroundColor: Font.darkGrey,

                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Lexend-Regular',
                      fontSize: 16,
                      fontWeight: '500',
                      color: Font.white,
                      marginLeft: 10,
                    }}>
                    Communication
                  </Text>
                  <View style={{marginRight: 10}}>
                    <Text style={Commonstyles.TextGreen24}>4.5</Text>
                  </View>
                </View>
              </View>
            ) : null}

            <TouchableOpacity
              onPress={() => {
                setTacticalCond(!TacticalCond);
              }}
              style={{
                marginLeft: 15,
                marginRight: 15,
                marginTop: 15,
                borderRadius: 5,
                height: 55,
                backgroundColor:
                  TacticalCond === true ? Font.green : Font.white,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontFamily: 'Lexend-Regular',
                  fontSize: 16,
                  fontWeight: '500',
                  color: TacticalCond === true ? Font.white : Font.black,
                  marginLeft: 10,
                }}>
                Tactical Skills
              </Text>
              <AntDesign
                name={TacticalCond === true ? 'caretup' : 'caretdown'}
                size={16}
                color={TacticalCond === true ? Font.white : Font.black}
                style={{marginRight: 10}}
              />
            </TouchableOpacity>
            {TacticalCond ? (
              <View>
                <View
                  style={{
                    marginLeft: 15,
                    marginRight: 15,
                    marginTop: 10,
                    borderRadius: 5,
                    height: 55,
                    backgroundColor: Font.darkGrey,

                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Lexend-Regular',
                      fontSize: 16,
                      fontWeight: '500',
                      color: Font.white,
                      marginLeft: 10,
                    }}>
                    Confidence
                  </Text>
                  <View style={{marginRight: 10}}>
                    <Text style={Commonstyles.TextGreen24}>5.0</Text>
                  </View>
                </View>
                <View
                  style={{
                    marginLeft: 15,
                    marginRight: 15,
                    marginTop: 10,
                    borderRadius: 5,
                    height: 55,
                    backgroundColor: Font.darkGrey,

                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Lexend-Regular',
                      fontSize: 16,
                      fontWeight: '500',
                      color: Font.white,
                      marginLeft: 10,
                    }}>
                    Commitment
                  </Text>
                  <View style={{marginRight: 10}}>
                    <Text style={Commonstyles.TextGreen24}>4.0</Text>
                  </View>
                </View>
                <View
                  style={{
                    marginLeft: 15,
                    marginRight: 15,
                    marginTop: 10,
                    borderRadius: 5,
                    height: 55,
                    backgroundColor: Font.darkGrey,

                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Lexend-Regular',
                      fontSize: 16,
                      fontWeight: '500',
                      color: Font.white,
                      marginLeft: 10,
                    }}>
                    Concentration
                  </Text>
                  <View style={{marginRight: 10}}>
                    <Text style={Commonstyles.TextGreen24}>4.2</Text>
                  </View>
                </View>
                <View
                  style={{
                    marginLeft: 15,
                    marginRight: 15,
                    marginTop: 10,
                    borderRadius: 5,
                    height: 55,
                    backgroundColor: Font.darkGrey,

                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Lexend-Regular',
                      fontSize: 16,
                      fontWeight: '500',
                      color: Font.white,
                      marginLeft: 10,
                    }}>
                    Communication
                  </Text>
                  <View style={{marginRight: 10}}>
                    <Text style={Commonstyles.TextGreen24}>4.5</Text>
                  </View>
                </View>
              </View>
            ) : null}

            <TouchableOpacity
              onPress={() => {
                setTechnicalCond(!TechnicalCond);
              }}
              style={{
                marginLeft: 15,
                marginRight: 15,
                marginTop: 15,
                borderRadius: 5,
                height: 55,
                backgroundColor:
                  TechnicalCond === true ? Font.green : Font.white,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontFamily: 'Lexend-Regular',
                  fontSize: 16,
                  fontWeight: '500',
                  color: TechnicalCond === true ? Font.white : Font.black,
                  marginLeft: 10,
                }}>
                Technical Skills
              </Text>
              <AntDesign
                name={TechnicalCond === true ? 'caretup' : 'caretdown'}
                size={16}
                color={TechnicalCond === true ? Font.white : Font.black}
                style={{marginRight: 10}}
              />
            </TouchableOpacity>
            {TechnicalCond ? (
              <View>
                <View
                  style={{
                    marginLeft: 15,
                    marginRight: 15,
                    marginTop: 10,
                    borderRadius: 5,
                    height: 55,
                    backgroundColor: Font.darkGrey,

                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Lexend-Regular',
                      fontSize: 16,
                      fontWeight: '500',
                      color: Font.white,
                      marginLeft: 10,
                    }}>
                    Confidence
                  </Text>
                  <View style={{marginRight: 10}}>
                    <Text style={Commonstyles.TextGreen24}>5.0</Text>
                  </View>
                </View>
                <View
                  style={{
                    marginLeft: 15,
                    marginRight: 15,
                    marginTop: 10,
                    borderRadius: 5,
                    height: 55,
                    backgroundColor: Font.darkGrey,

                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Lexend-Regular',
                      fontSize: 16,
                      fontWeight: '500',
                      color: Font.white,
                      marginLeft: 10,
                    }}>
                    Commitment
                  </Text>
                  <View style={{marginRight: 10}}>
                    <Text style={Commonstyles.TextGreen24}>4.0</Text>
                  </View>
                </View>
                <View
                  style={{
                    marginLeft: 15,
                    marginRight: 15,
                    marginTop: 10,
                    borderRadius: 5,
                    height: 55,
                    backgroundColor: Font.darkGrey,

                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Lexend-Regular',
                      fontSize: 16,
                      fontWeight: '500',
                      color: Font.white,
                      marginLeft: 10,
                    }}>
                    Concentration
                  </Text>
                  <View style={{marginRight: 10}}>
                    <Text style={Commonstyles.TextGreen24}>4.2</Text>
                  </View>
                </View>
                <View
                  style={{
                    marginLeft: 15,
                    marginRight: 15,
                    marginTop: 10,
                    borderRadius: 5,
                    height: 55,
                    backgroundColor: Font.darkGrey,

                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Lexend-Regular',
                      fontSize: 16,
                      fontWeight: '500',
                      color: Font.white,
                      marginLeft: 10,
                    }}>
                    Communication
                  </Text>
                  <View style={{marginRight: 10}}>
                    <Text style={Commonstyles.TextGreen24}>4.5</Text>
                  </View>
                </View>
              </View>
            ) : null}
          </View>
        </View>
      ) : (
        <View>
          {/* Avg and Highest Score */}
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
                <Text style={Commonstyles.TextGreen24}>4.5</Text>

                <Text style={Commonstyles.TextgreyFeed15}>Avg Score</Text>
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
                <Text style={Commonstyles.TextGreen24}>4.9</Text>

                <Text style={Commonstyles.TextgreyFeed15}>Highest Score</Text>
              </View>
            </View>
          </View>

          {/* Today report */}
          <TouchableOpacity
            onPress={() => {
              setTodayReport(true);
            }}
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
              You today's Training Report is here!
            </Text>
          </TouchableOpacity>

          {/* Monthly Attendence */}
          <View>
            <View
              style={{
                margin: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
                zIndex: 100,
              }}>
              <Text style={Commonstyles.TextWhiteFeatured}>Reports</Text>
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

                          <View
                            style={{
                              alignItems: 'center',
                              justifyContent: 'center',

                              alignSelf: 'center',
                            }}>
                            <Text style={Commonstyles.TextGreen24}>
                              {item?.status}
                            </Text>
                          </View>
                        </View>
                      </View>
                    );
                  }}
                />
                <TouchableOpacity
                  style={{marginTop: 15, alignItems: 'center'}}
                  onPress={() => {
                    navigation.navigate('TrainingReportList', {
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

            {/* Statistics */}
            <View>
              <View style={{margin: 15}}>
                <Text style={Commonstyles.TextWhiteFeatured}>Statistics</Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default TrainingReport;

const styles = StyleSheet.create({});
