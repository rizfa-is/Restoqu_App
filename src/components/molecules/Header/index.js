import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from '../../atoms';

const Header = ({title, subtitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingStart: 24,
    paddingBottom: 24,
    paddingTop: 30,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#020202',
  },
});
