import React, {useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  Dimensions,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

import Header from '../../../components/header';
import FullFooterButton from '../../../components/FullFooterButton';
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

  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
};

export default StackingInitiate;

const styles = StyleSheet.create({
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
