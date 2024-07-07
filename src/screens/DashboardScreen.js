import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import HeaderNav from '../modules/home/header';
import BottomNav from '../modules/home/bottomNav';

const DashboardScreen = ({navigation}) => (
  <View style={styles.container}>
    <HeaderNav heading={'Dashboard'} />
    <BottomNav />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DashboardScreen;
