import React from 'react';
import {View, StyleSheet} from 'react-native';
import Stackinginitate from '../modules/home/stacking/stackinginitate';

const StackingScreen = ({navigation}) => (
  <View style={styles.container}>
    <Stackinginitate navigation={navigation} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default StackingScreen;