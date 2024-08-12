import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Header from '../components/header';

const TotalAffiliateScreen = ({navigation}) => (
  <View style={styles.container}>
    <Header
      title={'Total Affiliate'}
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

export default TotalAffiliateScreen;
