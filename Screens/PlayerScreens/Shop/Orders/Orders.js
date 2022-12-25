import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ImageBackground,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

//import font and design
import {Font, Commonstyles} from '../../../Font/Font';

//importing icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const Orders = ({navigation}) => {
  const [Category, setCategory] = useState('All');
  const [ProductArrayToShow, SetProductArrayToShow] = useState([
    {
      ProductImage: 'https://wallpaperaccess.com/full/1597754.jpg',
      Title: 'Nike Mercurial',
      Quantity: 5,
      Price: 250.63,
      description:
        'This is the best product in our shop it is top selling shoes. It is very comfortable and relaxing. you will love to buy it',
      category: 'Shoes',
      size: 'P3-4354',
      date: '19_Aug-2022',
      status: 'Pending',
    },
    {
      ProductImage: 'https://wallpaperaccess.com/full/1597754.jpg',
      Title: 'Nike Mercurial',
      Quantity: 5,
      Price: 250.63,
      description:
        'This is the best product in our shop it is top selling shoes. It is very comfortable and relaxing. you will love to buy it',

      category: 'Shoes',
      size: 'P3-4354',
      date: '19_Aug-2022',
      status: 'Pending',
    },
    {
      ProductImage: 'https://wallpaperaccess.com/full/1597754.jpg',
      Title: 'Service',
      Quantity: 5,
      Price: 250.63,
      description:
        'This is the best product in our shop it is top selling shoes. It is very comfortable and relaxing. you will love to buy it',

      category: 'Shoes',
      size: 'P3-4354',
      date: '19_Aug-2022',
      status: 'Pending',
    },
  ]);
  const ProductList = ({products}) => {
    return (
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 60}}
          data={products}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{
                  borderRadius: 10,
                  margin: 15,
                  marginTop: 10,
                  flexDirection: 'row',
                  flex: 1,
                  backgroundColor: Font.grey,
                  padding: 10,
                }}>
                <Image
                  source={{
                    uri: item?.ProductImage,
                  }}
                  style={{
                    width: 63,
                    height: 63,
                    borderRadius: 10,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',

                    flex: 1,
                  }}>
                  <View
                    style={{marginLeft: 10, justifyContent: 'space-between'}}>
                    <View>
                      <Text style={Commonstyles?.TextGreen14500}>
                        {item?.Title}
                      </Text>
                      <Text style={Commonstyles?.TextGreen14}>
                        {item?.size}
                      </Text>

                      <Text style={Commonstyles?.TextWhite}>
                        ${item?.Price}
                      </Text>
                    </View>
                    <View
                      style={{flexDirection: 'row', marginBottom: 5}}></View>
                  </View>
                  <View style={{justifyContent: 'space-between'}}>
                    <View
                      style={{
                        alignSelf: 'flex-end',
                        margin: 5,
                        width: 63,
                        height: 18,
                        borderRadius: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: Font?.blue,
                      }}>
                      <Text style={Commonstyles?.TextWhitesmallEmail}>
                        {item?.status}
                      </Text>
                    </View>
                    <Text style={Commonstyles.TextGreysmallmini}>
                      {item?.date}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  };
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
            marginLeft: 15,
            alignItems: 'center',
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
          <Text style={Commonstyles.LogoWhite}>Orders</Text>
        </View>
        {/* Notification icon */}
        <View
          style={{
            justifyContent: 'center',
            marginRight: 15,
            flexDirection: 'row',

            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{marginRight: 10}}
            onPress={() => {
              alert('Notification under development');
            }}>
            <AntDesign name={'search1'} size={20} color={Font.white} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              alert('Notification under development');
            }}>
            <MaterialCommunityIcons
              name={'shopping-outline'}
              size={22}
              color={Font.white}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories */}
      <View style={{margin: 15}}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <TouchableOpacity
            onPress={() => {
              setCategory('All');
            }}
            style={{
              height: 38,

              borderRadius: 5,
              marginRight: 8,
              flex: 1,

              alignItems: 'center',
              justifyContent: 'center',

              borderWidth: 1,
              borderColor: Category === 'All' ? Font.green : Font.greyText,
            }}>
            <Text style={Commonstyles?.TextWhite}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 38,

              borderRadius: 5,
              marginRight: 8,

              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,

              borderWidth: 1,
              borderColor: Category === 'Pending' ? Font.green : Font.greyText,
            }}
            onPress={() => {
              setCategory('Pending');
            }}>
            <Text style={Commonstyles?.TextWhite}>Pending</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 38,

              borderRadius: 5,
              marginRight: 8,
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',

              borderWidth: 1,
              borderColor:
                Category === 'Delivered' ? Font.green : Font.greyText,
            }}
            onPress={() => {
              setCategory('Delivered');
            }}>
            <Text style={Commonstyles?.TextWhite}>Delivered</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Products list */}
      <View style={{marginTop: 40}}>
        {Category === 'All' ? (
          <View>
            <ProductList products={ProductArrayToShow} />
          </View>
        ) : Category === 'Pending' ? (
          <View>
            <ProductList products={ProductArrayToShow} />
          </View>
        ) : (
          <View>
            <ProductList products={ProductArrayToShow} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Orders;

const styles = StyleSheet.create({});
