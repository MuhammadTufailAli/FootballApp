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
} from 'react-native';
import React, {useState} from 'react';

//import font and design
import {Font, Commonstyles} from '../../../Font/Font';

//importing icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const MyCart = ({navigation}) => {
  const [quantity, setQuantity] = useState(1);
  const [ProductArray, SetProductArray] = useState([
    {
      ProductImage: 'https://wallpaperaccess.com/full/1597754.jpg',
      Title: 'Nike Mercurial',
      Quantity: 5,
      Price: 250.63,
      description:
        'This is the best product in our shop it is top selling shoes. It is very comfortable and relaxing. you will love to buy it',
      category: 'Shoes',
      size: 'P3-4354',
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
    },
  ]);

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
          <Text style={Commonstyles.LogoWhite}>My Cart</Text>
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
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        {/* List of products in cart */}
        <View style={{flex: 2}}>
          <View style={{margin: 15}}>
            <Text style={Commonstyles?.TextWhiteFeatured}>Products</Text>
          </View>
          {/* FlatList */}
          <FlatList
            showsVerticalScrollIndicator={false}
            data={ProductArray}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    borderRadius: 10,
                    margin: 15,
                    marginTop: 0,
                    flexDirection: 'row',
                    flex: 1,
                  }}>
                  <Image
                    source={{
                      uri: item?.ProductImage,
                    }}
                    style={{
                      width: 113,
                      height: 113,
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
                        <Text style={Commonstyles?.TextGreysmallmini}>
                          {item?.Quantity > 0 ? 'In Stock' : 'Out of stock'}
                        </Text>

                        <Text style={Commonstyles?.TextWhite}>
                          ${item?.Price}
                        </Text>
                      </View>
                      <View style={{flexDirection: 'row', marginBottom: 5}}>
                        <TouchableOpacity
                          style={styles.quantity}
                          onPress={() => {
                            if (quantity <= 1) {
                              alert('There must be atleast 1 product');
                            } else {
                              setQuantity(quantity - 1);
                            }
                          }}>
                          <Text
                            style={{
                              alignSelf: 'center',
                              color: '#181F2A',
                            }}>
                            -
                          </Text>
                        </TouchableOpacity>
                        <Text
                          style={{
                            marginLeft: 12,
                            marginRight: 12,
                            color: Font.white,
                          }}>
                          {quantity}
                        </Text>

                        <TouchableOpacity
                          style={styles.quantity}
                          onPress={() => {
                            if (quantity >= item.Quantity) {
                              alert('Product limit reached');
                            } else {
                              setQuantity(quantity + 1);
                            }
                          }}>
                          <Text
                            style={{
                              alignSelf: 'center',
                              color: '#181F2A',
                            }}>
                            +
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>

                    <TouchableOpacity
                      style={{alignSelf: 'flex-end', margin: 5}}>
                      <Entypo
                        name={'dots-three-horizontal'}
                        size={23}
                        color={Font.white}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
        </View>

        {/* Pay Now */}
        <View
          style={{
            marginTop: 15,
            borderTopWidth: 0.5,
            borderColor: Font.greyText,
            flex: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 15,
            }}>
            <Text style={Commonstyles?.TextWGreyMembersName}>Total</Text>
            <Text style={Commonstyles?.TextWGreyMembersName}>
              $ <Text style={Commonstyles?.LogoWhite20500}>1100</Text>
            </Text>
          </View>
          <View style={{margin: 15, marginTop: 8}}>
            <TouchableOpacity
              style={Commonstyles.ButtonGreen}
              onPress={() => {}}>
              <Text style={Commonstyles.TextWhite}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyCart;

const styles = StyleSheet.create({
  quantity: {
    width: 22,
    height: 22,
    borderRadius: 6,
    justifyContent: 'center',

    alignItems: 'center',
    backgroundColor: Font.white,
  },
});
