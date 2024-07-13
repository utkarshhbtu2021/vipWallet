import React, {useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  ScrollView,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

import Header from '../../../components/header';
import FullFooterButton from '../../../components/fullFooterButton';
import ConfirmPopup from './confirmPopup';

const {width, height} = Dimensions.get('window');

const StackingInitiate = ({navigation}) => {
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

  const InfoRow = ({label, value}) => (
    <View style={styles.innerView}>
      <Text
        style={{
          fontFamily: 'Poppins',
          color: '#0066FF',
          fontWeight: '500',
          fontSize: 17,
          paddingBottom: 8,
        }}>
        {label}
      </Text>
      <Text
        style={{
          fontFamily: 'Poppins',
          color: '#000000',
          fontWeight: '600',
          fontSize: 17,
        }}>
        {value}
      </Text>
    </View>
  );

  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 30}}
      style={styles.container}>
      <Header title="Stacking" navigation={navigation} />
      <View style={styles.headerView}>
        <Text style={styles.heading}>Lock BTC</Text>
      </View>
      <View style={styles.middleView}>
        <Text style={styles.duration}>Duration</Text>
        <Text style={styles.year}>(Year)</Text>
      </View>
      <View style={styles.circleContainer}>{renderCircles()}</View>
      <View style={styles.footerView}>
        <Text style={styles.availableAmount}>
          Available amount o.oooooo BTC
        </Text>
      </View>
      <View style={styles.footerView}>
        <Text style={styles.enterAmount}>Please enter the amount</Text>
      </View>
      <View style={styles.footerView}>
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="USD/MAX"
          placeholderTextColor="grey"
          numberOfLines={1}
        />
      </View>
      <View style={styles.outerView}>
        <InfoRow label="Locked Amount" value="0.0000000000 BTC" />
        <InfoRow label="Redemption Period" value="2 Year" />
        <InfoRow label="Est.TPY" value="3.75%" />
        <InfoRow label="Reward WBTC (in 2 Years)" value="0.000000000" />
      </View>
      <View style={styles.terms}>
        <Text style={styles.enterAmount}>I have read and i agree to</Text>
        <Text
          style={{
            color: '#0066FF',
            fontFamily: 'Poppins',
            fontWeight: '600',
            fontSize: 13,
            paddingTop: 5,
          }}>
          VIP Staking Service Agremente
        </Text>
      </View>
      <FullFooterButton
        BtnText="Confirm Staking"
        onBtnPress={() => refRBSheet.current.open()}
        height={56}
      />
      <RBSheet
        ref={refRBSheet}
        customModalProps={{
          animationType: 'slide',
          statusBarTranslucent: true,
        }}
        customStyles={styles.customStyle}>
        <ConfirmPopup refRBSheet={refRBSheet} />
      </RBSheet>
    </ScrollView>
  );
};

export default StackingInitiate;

const styles = StyleSheet.create({
  outerView: {
    marginHorizontal: 22.25,
  },
  innerView: {
    flexDirection: 'column',
    paddingVertical: 13,
  },
  customStyle: {
    container: {
      height: height * 0.35,
      width: width * 0.9,
      marginVertical: 20,
      marginHorizontal: 20,
      borderRadius: 30,
      marginBottom: height / 2.5,
    },
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
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
    marginVertical: 15,
    marginLeft: 13.61,
    marginHorizontal: 22.25,
  },
  middleView: {
    marginTop: 27,
    flexDirection: 'row',
    marginHorizontal: 22.25,
  },
  footerView: {
    marginHorizontal: 22.25,
  },
  terms: {
    marginHorizontal: 22.25,
    marginBottom: 49,
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
  availableAmount: {
    color: '#1D60E9',
    fontFamily: 'Poppins',
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 17,
  },
  enterAmount: {
    color: '#A2A2A7',
    fontFamily: 'Poppins',
    fontSize: 15,
    fontWeight: '500',
  },
});
