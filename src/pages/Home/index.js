import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {FoodCard1, FoodCard2, FoodCard3, FoodCard4} from '../../assets';
import {FoodCard, HomeProfile, HomeTabView} from '../../components';

const Home = () => {
  return (
    <View style={styles.page}>
      <HomeProfile />
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.foodCardContainer}>
            <FoodCard image={FoodCard1} star={4.5} />
            <FoodCard image={FoodCard2} star={4.8} />
            <FoodCard image={FoodCard3} star={3.5} />
            <FoodCard image={FoodCard4} star={5} />
          </View>
        </ScrollView>
      </View>
      <View style={styles.tabContainer}>
        <HomeTabView />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  foodCardContainer: {
    padding: 24,
    flexDirection: 'row',
  },
  tabContainer: {
    flex: 1,
  },
});
