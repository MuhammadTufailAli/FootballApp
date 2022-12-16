import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}>
        <Text>HomeScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
