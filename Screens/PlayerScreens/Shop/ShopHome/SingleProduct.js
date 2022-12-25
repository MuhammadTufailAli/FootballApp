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

const SingleProduct = ({navigation, route}) => {
  const Product = route?.params?.product;
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(42);
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
          <Text style={Commonstyles.LogoWhite}>Product</Text>
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

      <ScrollView
        contentContainerStyle={{paddingBottom: 70}}
        showsVerticalScrollIndicator={false}>
        {/* Product Image */}
        <View>
          <ImageBackground
            source={{
              uri: Product?.ProductImage,
            }}
            resizeMode="cover"
            style={{
              width: '100%',
              height: 358,
              justifyContent: 'space-between',
            }}>
            <View style={{margin: 15}}>
              <Text style={Commonstyles?.TextWhite24}>{Product?.Title}</Text>
              <Text style={Commonstyles?.TextGreen14}>{Product?.size}</Text>
            </View>
            <View style={{alignItems: 'center', marginBottom: 15}}>
              <View style={{flexDirection: 'row'}}>
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
                  style={{marginLeft: 12, marginRight: 12, color: Font.white}}>
                  {quantity}
                </Text>

                <TouchableOpacity
                  style={styles.quantity}
                  onPress={() => {
                    if (quantity >= Product.Quantity) {
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
          </ImageBackground>
        </View>
        {/* Product details */}
        <View style={{borderTopLeftRadius: 10, borderTopRightRadius: 10}}>
          <View
            style={{
              margin: 15,
              marginTop: 25,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={Commonstyles?.TextWhite24400}>
                ${Product?.Price}
              </Text>
              {Product?.Quantity > 0 ? (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View
                    style={{
                      width: 6,
                      height: 6,
                      backgroundColor: Font.green,
                      borderRadius: 90 / 2,
                      marginRight: 5,
                    }}></View>
                  <Text style={Commonstyles?.TextGreysmallmini}>In Stock</Text>
                </View>
              ) : (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View
                    style={{
                      width: 6,
                      height: 6,
                      backgroundColor: 'red',
                      borderRadius: 90 / 2,
                      marginRight: 5,
                    }}></View>
                  <Text style={Commonstyles?.TextGreysmallmini}>
                    Out of stock
                  </Text>
                </View>
              )}
            </View>
            <TouchableOpacity
              style={{
                width: 36,
                height: 38,
                borderRadius: 5,
                backgroundColor: Font.greyNew,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <MaterialCommunityIcons
                name={'shopping-outline'}
                size={18}
                color={Font.green}
              />
            </TouchableOpacity>
          </View>
          {/* description */}
          <View style={{margin: 15}}>
            <Text style={Commonstyles?.TextWhiteCalender}>
              {Product?.description}
            </Text>
          </View>
          <View style={{margin: 15, marginRight: 0}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <TouchableOpacity
                onPress={() => {
                  setSize(40);
                }}
                style={{
                  height: 38,
                  width: 77,
                  borderRadius: 5,
                  marginRight: 5,

                  alignItems: 'center',
                  justifyContent: 'center',

                  borderWidth: 1,
                  borderColor: size === 40 ? Font.green : Font.greyText,
                }}>
                <Text style={Commonstyles?.TextWhite}>40</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 38,
                  width: 77,
                  borderRadius: 5,
                  marginRight: 5,

                  alignItems: 'center',
                  justifyContent: 'center',

                  borderWidth: 1,
                  borderColor: size === 41 ? Font.green : Font.greyText,
                }}
                onPress={() => {
                  setSize(41);
                }}>
                <Text style={Commonstyles?.TextWhite}>41</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 38,
                  width: 77,
                  borderRadius: 5,
                  marginRight: 5,

                  alignItems: 'center',
                  justifyContent: 'center',

                  borderWidth: 1,
                  borderColor: size === 42 ? Font.green : Font.greyText,
                }}
                onPress={() => {
                  setSize(42);
                }}>
                <Text style={Commonstyles?.TextWhite}>42</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 38,
                  width: 77,
                  borderRadius: 5,
                  marginRight: 5,

                  alignItems: 'center',
                  justifyContent: 'center',

                  borderWidth: 1,
                  borderColor: size === 43 ? Font.green : Font.greyText,
                }}
                onPress={() => {
                  setSize(43);
                }}>
                <Text style={Commonstyles?.TextWhite}>43</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  height: 38,
                  width: 77,
                  borderRadius: 5,
                  marginRight: 5,

                  alignItems: 'center',
                  justifyContent: 'center',

                  borderWidth: 1,
                  borderColor: size === 44 ? Font.green : Font.greyText,
                }}
                onPress={() => {
                  setSize(44);
                }}>
                <Text style={Commonstyles?.TextWhite}>44</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 38,
                  width: 77,
                  borderRadius: 5,
                  marginRight: 5,

                  alignItems: 'center',
                  justifyContent: 'center',

                  borderWidth: 1,
                  borderColor: size === 45 ? Font.green : Font.greyText,
                }}
                onPress={() => {
                  setSize(45);
                }}>
                <Text style={Commonstyles?.TextWhite}>45</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 38,
                  width: 77,
                  borderRadius: 5,
                  marginRight: 5,

                  alignItems: 'center',
                  justifyContent: 'center',

                  borderWidth: 1,
                  borderColor: size === 46 ? Font.green : Font.greyText,
                }}
                onPress={() => {
                  setSize(46);
                }}>
                <Text style={Commonstyles?.TextWhite}>46</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 38,
                  width: 77,
                  borderRadius: 5,
                  marginRight: 5,

                  alignItems: 'center',
                  justifyContent: 'center',

                  borderWidth: 1,
                  borderColor: size === 47 ? Font.green : Font.greyText,
                }}
                onPress={() => {
                  setSize(47);
                }}>
                <Text style={Commonstyles?.TextWhite}>47</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 38,
                  width: 77,
                  borderRadius: 5,
                  marginRight: 5,

                  alignItems: 'center',
                  justifyContent: 'center',

                  borderWidth: 1,
                  borderColor: size === 48 ? Font.green : Font.greyText,
                }}
                onPress={() => {
                  setSize(48);
                }}>
                <Text style={Commonstyles?.TextWhite}>48</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 38,
                  width: 77,
                  borderRadius: 5,
                  marginRight: 5,

                  alignItems: 'center',
                  justifyContent: 'center',

                  borderWidth: 1,
                  borderColor: size === 49 ? Font.green : Font.greyText,
                }}
                onPress={() => {
                  setSize(49);
                }}>
                <Text style={Commonstyles?.TextWhite}>49</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 38,
                  width: 77,
                  borderRadius: 5,
                  marginRight: 5,

                  alignItems: 'center',
                  justifyContent: 'center',

                  borderWidth: 1,
                  borderColor: size === 50 ? Font.green : Font.greyText,
                }}
                onPress={() => {
                  setSize(50);
                }}>
                <Text style={Commonstyles?.TextWhite}>50</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={{margin: 15}}>
            <TouchableOpacity
              style={Commonstyles.ButtonGreen}
              onPress={() => {
                navigation.navigate('Checkout', {
                  product: Product,
                  quantity: quantity,
                });
              }}>
              <Text style={Commonstyles.TextWhite}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SingleProduct;

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
