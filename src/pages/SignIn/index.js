import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Sign In" subtitle="Find your best ever meal" />
      <View style={styles.container}>
        <TextInput title="Email" placeholder="Type your email address" />
        <Gap height={16} />
        <TextInput title="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button text="Sign In" />
        <Gap height={12} />
        <Button
          text="Create New Account"
          textColor="white"
          color="#8D92A3"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
