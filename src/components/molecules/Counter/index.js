import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICButtonMin, ICButtonPlus} from '../../../assets';

const Counter = () => {
  return (
    <View style={styles.conteiner}>
      <TouchableOpacity>
        <ICButtonMin />
      </TouchableOpacity>
      <Text style={styles.value}>14</Text>
      <TouchableOpacity>
        <ICButtonPlus />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  conteiner: {flexDirection: 'row', alignItems: 'center'},
  value: {
    marginHorizontal: 10,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: 'black',
  },
});
