import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Header from '../components/header';
import SearchBox from '../components/searchBox';

const FietCurrencyScreen = ({navigation}) => (
  <SafeAreaView style={styles.container}>
    <Header
      title={'Flat Currencies'}
      addStyle={{paddingLeft: 55, fontSize: 18, fontweight: '500'}}
      navigation={navigation}
    />
    <SearchBox/>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default FietCurrencyScreen;
