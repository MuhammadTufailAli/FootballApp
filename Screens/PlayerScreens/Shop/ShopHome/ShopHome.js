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

const ShopHome = ({navigation}) => {
  const [Category, setCategory] = useState('All');
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

  const Products = ({products}) => {
    return (
      <View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={products}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{marginRight: 8, borderRadius: 10}}
                onPress={() => {
                  navigation.navigate('SingleProduct', {
                    product: item,
                  });
                }}>
                <ImageBackground
                  source={{
                    uri: item?.ProductImage,
                  }}
                  resizeMode="cover"
                  imageStyle={{borderRadius: 10}}
                  style={{
                    width: 158,
                    height: 158,
                    justifyContent: 'space-between',
                  }}>
                  <View style={{margin: 8}}>
                    <Text style={Commonstyles?.TextGreen}>{item?.Title}</Text>
                    <Text style={Commonstyles?.TextGreysmallmini}>
                      {item?.Quantity > 0 ? 'In Stock' : 'Out of stock'}
                    </Text>
                  </View>
                  <View style={{margin: 8, alignItems: 'flex-end'}}>
                    <Text style={Commonstyles?.TextWhite}>${item?.Price}</Text>
                  </View>
                </ImageBackground>
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
          <Text style={Commonstyles.LogoWhite}>Store</Text>
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
              alert('My Cart under development');
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
      <View style={{margin: 15, marginRight: 0}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            onPress={() => {
              setCategory('All');
            }}
            style={{
              height: 38,
              width: 77,
              borderRadius: 5,
              marginRight: 8,

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
              width: 101,
              borderRadius: 5,
              marginRight: 8,

              alignItems: 'center',
              justifyContent: 'center',

              borderWidth: 1,
              borderColor: Category === 'Shoes' ? Font.green : Font.greyText,
            }}
            onPress={() => {
              setCategory('Shoes');
            }}>
            <Text style={Commonstyles?.TextWhite}>Shoes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 38,
              width: 100,
              borderRadius: 5,
              marginRight: 8,

              alignItems: 'center',
              justifyContent: 'center',

              borderWidth: 1,
              borderColor: Category === 'Shirts' ? Font.green : Font.greyText,
            }}
            onPress={() => {
              setCategory('Shirts');
            }}>
            <Text style={Commonstyles?.TextWhite}>Shirts</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 38,
              width: 77,
              borderRadius: 5,
              marginRight: 8,

              alignItems: 'center',
              justifyContent: 'center',

              borderWidth: 1,
              borderColor: Category === 'Gloves' ? Font.green : Font.greyText,
            }}
            onPress={() => {
              setCategory('Gloves');
            }}>
            <Text style={Commonstyles?.TextWhite}>Gloves</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Showing Selected category */}
      {Category === 'All' ? (
        <View style={{margin: 15, marginRight: 0}}>
          <Products products={ProductArray} />
        </View>
      ) : Category === 'Shoes' ? (
        <View style={{margin: 15, marginRight: 0}}>
          <Products products={ProductArray} />
        </View>
      ) : Category === 'Shirts' ? (
        <View style={{margin: 15, marginRight: 0}}>
          <Products products={ProductArray} />
        </View>
      ) : (
        <View style={{margin: 15, marginRight: 0}}>
          <Products products={ProductArray} />
        </View>
      )}

      {/* Featured Products */}
      <View style={{margin: 15}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={Commonstyles?.TextWhiteFeatured}>Featured Proucts</Text>
          <TouchableOpacity
            style={{
              width: 89,
              height: 35,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: Font.greyText,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={Commonstyles?.TextGrey12300}>More</Text>
          </TouchableOpacity>
        </View>

        {/* Product array */}
        <View style={{marginTop: 15}}>
          <FlatList
            columnWrapperStyle={{
              flex: 1,
              justifyContent: 'space-around',
            }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 475}}
            numColumns={2}
            data={ProductArray}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{borderRadius: 10, margin: 5}}
                  onPress={() => {
                    navigation.navigate('SingleProduct', {
                      product: item,
                    });
                  }}>
                  <ImageBackground
                    source={{
                      uri: item?.ProductImage,
                    }}
                    resizeMode="cover"
                    imageStyle={{borderRadius: 10}}
                    style={{
                      width: 158,
                      height: 213,
                      justifyContent: 'space-between',
                    }}>
                    <View style={{margin: 12}}>
                      <Text style={Commonstyles?.TextWhitesmallmini300}>
                        {item?.Quantity > 0 ? 'In Stock' : 'Out of stock'}
                      </Text>
                    </View>
                    <View style={{margin: 8}}>
                      <Text style={Commonstyles?.TextWhite500}>
                        {item?.Title}
                      </Text>
                      <Text style={Commonstyles?.TextGreensmallmini}>
                        {item?.size}
                      </Text>
                      <Text style={Commonstyles?.TextWhite}>
                        ${item?.Price}
                      </Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ShopHome;

const styles = StyleSheet.create({});
