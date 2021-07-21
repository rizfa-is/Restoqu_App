import React from 'react';
import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';
import Gap from '../Gap';

const TextInput = ({title, placeholder}) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <Gap height={6} />
      <TextInputRN placeholder={placeholder} style={styles.box} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
  },
  box: {
    borderColor: '#020202',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
});
