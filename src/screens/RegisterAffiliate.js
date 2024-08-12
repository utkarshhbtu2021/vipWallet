import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Header from '../components/header';

const RegisterAffiliateScreen = ({navigation}) => (
  <View style={styles.container}>
    <Header
      title={'Register Affiliate'}
      addStyle={{paddingLeft: 35, fontSize: 18, fontWeight: '500'}}
      navigation={navigation}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RegisterAffiliateScreen;
