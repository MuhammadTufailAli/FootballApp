import {StyleSheet, Text, View} from 'react-native';

const Commonstyles = StyleSheet.create({
  LogoWhite: {
    fontFamily: 'Lexend',
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  HeadingWhite: {
    fontFamily: 'Lexend',
    fontSize: 28,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  HeadingGrey: {
    fontFamily: 'Lexend',
    fontSize: 28,
    fontWeight: '600',
    color: '#212121',
  },
  TextWhite: {
    fontFamily: 'Lexend',
    fontSize: 14,
    fontWeight: '400',
    color: '#FFFFFF',
  },
  TextGrey: {
    fontFamily: 'Lexend',
    fontSize: 14,
    fontWeight: '400',
    color: '#7E7E7E',
  },
  TextGreysmall: {
    fontFamily: 'Lexend',
    fontSize: 13,
    fontWeight: '400',
    color: '#7E7E7E',
  },
  inputText: {
    padding: 18,
    backgroundColor: '#212121',
    borderRadius: 10,
    color: '#FFFFFF',
  },
  ButtonGreen: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 23,
    backgroundColor: '#1DB954',
    borderRadius: 10,
  },
  ButtonGrey: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 23,
    backgroundColor: '#7E7E7E',
    borderRadius: 10,
  },
  otherButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
    borderWidth: 2,
    borderColor: '#212A39',
    borderRadius: 10,
  },
});

const Font = {
  green: '#1DB954',
  grey: '#212121',
  greyText: '#7E7E7E',
  black: '#121212',
  white: '#FFFFFF',
  fontfamily: 'Lexend',
  LogoWeight: '800',
  LogoSize: 20,

  HeadingWeight: '600',
  HeadingSize: 28,

  TextWeight: '400',
  TextSize: 14,
};
export {Font, Commonstyles};
