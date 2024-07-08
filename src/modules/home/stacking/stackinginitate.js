import {StyleSheet, View, Text} from 'react-native';
import React, { useRef } from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import Header from '../../../components/header';
import FullFooterButton from '../../../components/FullFooterButton';

const Stackinginitate = ({navigation}) => {
  const refRBSheet = useRef();
  const renderCircles = () => {
    return Array(5)
      .fill(null)
      .map((_, index) => (
        <View key={index} style={styles.circle}>
          <Text style={styles.circleTxt}>{index + 1}</Text>
        </View>
      ));
  };
  return (
    <View>
      <Header title={'Stacking'} navigation={navigation} />
      <View style={styles.headerView}>
        <Text style={styles.heading}>Lock BTC</Text>
      </View>
      <View style={styles.middleView}>
        <Text style={styles.duration}>Duration</Text>
        <Text style={styles.year}>(Year)</Text>
      </View>
      <View style={styles.circleContainer}>{renderCircles()}</View>
      <FullFooterButton BtnText={'Confirm Staking'} height={56} />
    </View>
  );
};

export default Stackinginitate;

const styles = StyleSheet.create({
  headerView: {
    paddingTop: 42,
    flexDirection: 'row',
    marginHorizontal: 22.25,
  },
  heading: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 29,
    textAlign: 'center',
    color: '#0066FF',
  },
  circleTxt: {
    position: 'absolute',
    alignSelf: 'center',
    fontSize: 27,
    color: '#0066FF',
    fontWeight: '600',
    fontFamily: 'Poppins',
    marginTop: 7.5,
  },
  circle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#F6FAF9',
    marginTop: 15,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: '#7968EE',
    position: 'relative',
  },
  circleContainer: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 13.61,
    marginHorizontal: 22.25,
  },
  middleView: {
    marginTop: 27,
    flexDirection: 'row',
    marginHorizontal: 22.25,
  },
  duration: {
    fontSize: 28,
    color: '#1E1E2D',
    fontWeight: '600',
    fontFamily: 'Poppins',
  },
  year: {
    fontSize: 17,
    color: '#1E1E2D',
    fontWeight: '400',
    fontFamily: 'Poppins',
    marginLeft: 14,
    alignSelf: 'center',
  },
});
