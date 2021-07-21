import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ArrowBack} from '../../../assets';
import {TextInput} from '../../atoms';

const Header = ({title, subtitle, onBack}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
          <View style={styles.back}>
            <ArrowBack />
          </View>
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
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
    flexDirection: 'row',
    alignItems: 'center',
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
  back: {
    padding: 16,
    marginEnd: 16,
    marginStart: -10,
  },
});
