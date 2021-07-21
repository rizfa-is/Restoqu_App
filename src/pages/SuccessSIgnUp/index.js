import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SuccessSignUpImg} from '../../assets';
import {Button, Gap} from '../../components';

const SuccessSignUp = () => {
  return (
    <View style={styles.container}>
      <SuccessSignUpImg />
      <Gap height={30} />
      <Text style={styles.title}>Yeay! Completed</Text>
      <Gap height={6} />
      <Text style={styles.subtitle}>Now you are able to order</Text>
      <Text style={styles.subtitle}>some foods as a self-reward</Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button text="Find Foods" />
      </View>
    </View>
  );
};

export default SuccessSignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 100,
  },
});
