import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Rating} from '../../molecules';

const ItemListfood = ({image, menu, price, star}) => {
  return (
    <View style={{paddingTop: 8}}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          paddingHorizontal: 24,
          paddingVertical: 8,
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 8,
            overflow: 'hidden',
            marginRight: 12,
          }}
          source={image}
        />
        <View style={{flex: 1}}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 16,
              color: '#020202',
            }}>
            {menu}
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 13,
              color: '#8d92a3',
            }}>
            {price}
          </Text>
        </View>
        <Rating star={star} />
      </View>
    </View>
  );
};

export default ItemListfood;

const styles = StyleSheet.create({});
