import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  FoodCard1,
  FoodCard2,
  FoodCard3,
  FoodCard4,
  ImgProfile,
} from '../../assets';
import {FoodCard} from '../../components';

const Home = () => {
  return (
    <View>
      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.appName}>Food Market</Text>
          <Text style={styles.desc}>Let’s get some foods</Text>
        </View>
        <Image style={styles.profile} source={ImgProfile} />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.foodCardContainer}>
          <FoodCard image={FoodCard1} />
          <FoodCard image={FoodCard2} />
          <FoodCard image={FoodCard3} />
          <FoodCard image={FoodCard4} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  appName: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8d92a3',
  },
  foodCardContainer: {
    padding: 24,
    flexDirection: 'row',
  },
});
