import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Select, TextInput} from '../../components';

const SignUpAddress = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Address"
        subtitle="Make sure it’s valid"
        onBack={() => navigation.replace('SignUp')}
      />
      <Gap height={24} backgroundColor={'#e2e2e2'} />
      <ScrollView>
        <View style={styles.container}>
          <TextInput title="Phone No." placeholder="Type your phone number" />
          <Gap height={16} />
          <TextInput title="Address" placeholder="Type your address" />
          <Gap height={16} />
          <TextInput title="House No." placeholder="Type your house number" />
          <Gap height={16} />
          <Select />
          <Gap height={24} />
          <Button text="Sign Up Now" />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginBottom: 45,
    flex: 1,
  },
});
