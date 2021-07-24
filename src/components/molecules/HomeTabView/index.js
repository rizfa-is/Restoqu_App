import React from 'react';
import {Text, Dimensions, StyleSheet, ScrollView} from 'react-native';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import {FoodCard1, FoodCard2, FoodCard3, FoodCard4} from '../../../assets';
import {ItemListfood} from '../../molecules';
import {useNavigation} from '@react-navigation/native';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicator}
    style={styles.tabContainer}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text style={styles.tabText(focused)}>{route.title}</Text>
    )}
  />
);

const NewTaste = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
      <ItemListfood
        image={FoodCard2}
        menu={'Soup Bumil'}
        price={'IDR 289.000'}
        star={4.9}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListfood
        image={FoodCard1}
        menu={'Soup Bumil'}
        price={'IDR 109.000'}
        star={4.3}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListfood
        image={FoodCard3}
        menu={'Soup Bumil'}
        price={'IDR 134.000'}
        star={4.2}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListfood
        image={FoodCard4}
        menu={'Soup Bumil'}
        price={'IDR 199.000'}
        star={4.1}
        onPress={() => navigation.navigate('FoodDetail')}
      />
    </ScrollView>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
      <ItemListfood
        image={FoodCard1}
        menu={'Soup Bumil'}
        price={'IDR 109.000'}
        star={4.3}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListfood
        image={FoodCard3}
        menu={'Soup Bumil'}
        price={'IDR 289.000'}
        star={4.9}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListfood
        image={FoodCard4}
        menu={'Soup Bumil'}
        price={'IDR 199.000'}
        star={4.1}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListfood
        image={FoodCard2}
        menu={'Soup Bumil'}
        price={'IDR 134.000'}
        star={4.2}
        onPress={() => navigation.navigate('FoodDetail')}
      />
    </ScrollView>
  );
};

const Recommended = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
      <ItemListfood
        image={FoodCard3}
        menu={'Soup Bumil'}
        price={'IDR 289.000'}
        star={4.9}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListfood
        image={FoodCard2}
        menu={'Soup Bumil'}
        price={'IDR 134.000'}
        star={4.2}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListfood
        image={FoodCard4}
        menu={'Soup Bumil'}
        price={'IDR 199.000'}
        star={4.1}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListfood
        image={FoodCard1}
        menu={'Soup Bumil'}
        price={'IDR 109.000'}
        star={4.3}
        onPress={() => navigation.navigate('FoodDetail')}
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
      style={{backgroundColor: 'white'}}
    />
  );
};

export default HomeTabView;

const styles = StyleSheet.create({
  indicator: {
    backgroundColor: '#020202',
    height: 3,
    width: 0.2,
    marginStart: 0,
  },
  tabContainer: {
    backgroundColor: 'white',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomColor: 'white',
    borderBottomWidth: 0,
  },
  tabText: focused => ({
    fontFamily: 'Poppins-Medium',
    color: focused ? '#020202' : '#8d92a3',
  }),
  page: {paddingTop: 8},
});
