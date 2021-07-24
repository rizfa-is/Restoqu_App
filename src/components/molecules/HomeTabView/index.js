import React from 'react';
import {Text, View, Dimensions, StyleSheet, ScrollView} from 'react-native';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import {FoodCard1, FoodCard2, FoodCard3, FoodCard4} from '../../../assets';
import ItemListfood from '../ItemListFood';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
      width: 0.2,
      marginStart: 0,
    }}
    style={{backgroundColor: 'white'}}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8d92a3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const NewTaste = () => {
  return (
    <ScrollView
      style={{backgroundColor: 'white'}}
      showsVerticalScrollIndicator={false}>
      <ItemListfood
        image={FoodCard2}
        menu={'Soup Bumil'}
        price={'IDR 289.000'}
        star={4.9}
      />
      <ItemListfood
        image={FoodCard1}
        menu={'Soup Bumil'}
        price={'IDR 109.000'}
        star={4.3}
      />
      <ItemListfood
        image={FoodCard3}
        menu={'Soup Bumil'}
        price={'IDR 134.000'}
        star={4.2}
      />
      <ItemListfood
        image={FoodCard4}
        menu={'Soup Bumil'}
        price={'IDR 199.000'}
        star={4.1}
      />
    </ScrollView>
  );
};

const Popular = () => {
  return (
    <ScrollView
      style={{backgroundColor: 'white'}}
      showsVerticalScrollIndicator={false}>
      <ItemListfood
        image={FoodCard1}
        menu={'Soup Bumil'}
        price={'IDR 109.000'}
        star={4.3}
      />
      <ItemListfood
        image={FoodCard3}
        menu={'Soup Bumil'}
        price={'IDR 289.000'}
        star={4.9}
      />
      <ItemListfood
        image={FoodCard4}
        menu={'Soup Bumil'}
        price={'IDR 199.000'}
        star={4.1}
      />
      <ItemListfood
        image={FoodCard2}
        menu={'Soup Bumil'}
        price={'IDR 134.000'}
        star={4.2}
      />
    </ScrollView>
  );
};

const Recommended = () => {
  return (
    <ScrollView
      style={{backgroundColor: 'white'}}
      showsVerticalScrollIndicator={false}>
      <ItemListfood
        image={FoodCard3}
        menu={'Soup Bumil'}
        price={'IDR 289.000'}
        star={4.9}
      />
      <ItemListfood
        image={FoodCard2}
        menu={'Soup Bumil'}
        price={'IDR 134.000'}
        star={4.2}
      />
      <ItemListfood
        image={FoodCard4}
        menu={'Soup Bumil'}
        price={'IDR 199.000'}
        star={4.1}
      />
      <ItemListfood
        image={FoodCard1}
        menu={'Soup Bumil'}
        price={'IDR 109.000'}
        star={4.3}
      />
    </ScrollView>
  );
};

const HomeTabView = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
  ]);

  const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recommended,
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: Dimensions.get('window').width}}
    />
  );
};

export default HomeTabView;

const styles = StyleSheet.create({});
