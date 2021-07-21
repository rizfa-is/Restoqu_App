import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Gap from '../Gap';

const Select = ({label}) => {
  return (
    <View>
      <Text style={styles.text}>{label}</Text>
      <Gap height={6} />
      <View style={styles.box}>
        <Picker
        // selectedValue={selectedLanguage}
        // onValueChange={(itemValue, itemIndex) =>
        //   setSelectedLanguage(itemValue)
        // }
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    </View>
  );
};

export default Select;

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
  },
});
