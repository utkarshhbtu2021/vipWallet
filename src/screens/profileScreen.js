import React from 'react';
import {View, Text, Button, StyleSheet, SafeAreaView} from 'react-native';
import Header from '../components/header';

const ProfileScreen = ({navigation}) => (
  <SafeAreaView style={styles.container}>
    <Header
      addStyle={{paddingLeft: 55, fontSize: 18, fontWeight: '500'}}
      navigation={navigation}
      title={'Update Profile'}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default ProfileScreen;
