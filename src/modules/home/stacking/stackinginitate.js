import {StyleSheet, View} from 'react-native';
import React from 'react';
import Header from '../../../components/header';
import FullFooterButton from '../../../components/FullFooterButton';

const Stackinginitate = ({navigation}) => {
  return (
    <View>
      <Header title={'Stacking'} navigation={navigation} />
      <FullFooterButton BtnText={'Confirm Staking'} />
    </View>
  );
};

export default Stackinginitate;

const styles = StyleSheet.create({});
