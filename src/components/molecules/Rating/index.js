import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICStarOff, ICStarOn} from '../../../assets';

const Rating = ({star}) => {
  return (
    <View style={styles.ratingContainer}>
      <View style={styles.starContainer}>
        <ICStarOn />
        <ICStarOn />
        <ICStarOn />
        <ICStarOn />
        <ICStarOff />
      </View>
      <Text>{star}</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
  },
  starContainer: {
    flexDirection: 'row',
  },
});
