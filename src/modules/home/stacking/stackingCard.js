import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FullFooterButton from '../../../components/FullFooterButton';
import {DashboardScreenImg} from '../../../asserts/images/image';

const StackingCard = ({navigation}) => {
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
    <View style={styles.container}>
      <View style={styles.headView}>
        <Image source={DashboardScreenImg.roundedBitcoin} style={styles.img} />
        <Text style={styles.heading}>BTC</Text>
      </View>
      <View style={styles.middleView}>
        <Text style={styles.duration}>Duration</Text>
        <Text style={styles.year}>(Year)</Text>
      </View>
      <View style={styles.circleContainer}>{renderCircles()}</View>
      <FullFooterButton
        BtnText={'Stack Now'}
        onBtnPress={() => navigation.navigate('Stacking')}
        backgroundColor="#F6FAF9"
      />
    </View>
  );
};

export default StackingCard;

const styles = StyleSheet.create({
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
    marginHorizontal: 3.75,
    borderWidth: 1,
    borderColor: '#7968EE',
    position: 'relative',
  },
  circleContainer: {
    flexDirection: 'row',
    marginVertical: 12,
    marginLeft: 13.61,
  },
  middleView: {
    marginTop: 27,
    flexDirection: 'row',
  },
  duration: {
    fontSize: 28,
    color: '#1E1E2D',
    fontWeight: '600',
    fontFamily: 'Poppins',
    marginLeft: 14,
  },
  year: {
    fontSize: 17,
    color: '#1E1E2D',
    fontWeight: '400',
    fontFamily: 'Poppins',
    marginLeft: 14,
    alignSelf: 'center',
  },
  heading: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 29,
    textAlign: 'center',
    color: '#0066FF',
    padding: 16,
  },
  img: {
    height: 82,
    width: 82,
    resizeMode: 'contain',
  },
  headView: {
    height: 82,
    marginHorizontal: 12.5,
    marginTop: 17.5,
    flexDirection: 'row',
  },
  container: {
    marginHorizontal: 22.25,
    marginBottom: 50,
    top: 40,
    borderRadius: 3,
    height: 305,
    borderWidth: 1,
    borderColor: '#F6F6F6',
    backgroundColor: '#F6FAF9',
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {width: 0, height: 2}, // Shadow offset
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 3.84, // Shadow radius
    elevation: 5, // Elevation for Android
  },
});
