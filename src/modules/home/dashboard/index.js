import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {digitCommaSeperation} from '../../../utils/commaSeparater';
import {DashboardScreenImg} from '../../../assets/images/image';

const DashBoard = () => {
  const renderItem = ({item, index}) => {
    const backgroundColor =
      index % 2 === 0 ? 'rgba(1, 136, 248, 0.2)' : 'rgba(1, 192, 239, 0.19)';
    return (
      <View style={[styles.item, {backgroundColor}]}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={DashboardScreenImg.bitCoin}
            style={{height: 42, width: 42, resizeMode: 'contain'}}
          />
          <View style={{marginLeft: 14}}>
            <Text style={styles.coinName}>Bitcoin</Text>
            <Text style={styles.coinValue}>0,0000000 BTC</Text>
          </View>
        </View>

        <View style={{alignSelf: 'center'}}>
          <Text style={styles.coinName}>o.oo USD</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headContainer}>
        <View style={styles.headerView}>
          <Text style={styles.heading}>My Net Worth</Text>
        </View>
        <View style={styles.dateTimeView}>
          <Text style={styles.dateTimeText}>On Jun 25, 2024</Text>
          <Text style={[styles.dateTimeText, {marginLeft: 8}]}>04 : 26</Text>
        </View>
      </View>
      <View style={styles.circleContainer}>
        <View style={styles.dottedCircle} />
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={['#01C0EF', '#0188F8']}
          style={styles.circle}>
          <Text style={styles.circleText}>Total USD</Text>
          <Text style={[styles.circleText, {fontSize: 24}]}>
            {digitCommaSeperation(7264)}
          </Text>
        </LinearGradient>
      </View>
      <FlatList
        data={[
          {key: '1'},
          {key: '2'},
          {key: '4'},
          {key: '5'},
          {key: '6'},
          {key: '7'},
        ]}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  coinName: {
    fontSize: 14,
    fontFamily: 'Poppins',
    color: '#1E1E2D',
    fontWeight: '500',
  },
  coinValue: {
    fontSize: 14,
    fontFamily: 'Poppins',
    color: '#0066FF',
    fontWeight: '500',
  },
  dateTimeView: {
    marginTop: 16.5,
    flexDirection: 'row',
    marginLeft: 22.25,
  },
  headerView: {
    marginTop: 22,
    flexDirection: 'row',
    marginLeft: 22.25,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  circleContainer: {
    marginTop: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dottedCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#0066FF',
    borderStyle: 'dotted',
    position: 'absolute',
  },
  circle: {
    width: 184,
    height: 184,
    borderRadius: 92,
    backgroundColor: '#01C0EF',
    position: 'relative',
  },
  heading: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 29,
    textAlign: 'center',
    color: '#0066FF',
  },
  dateTimeText: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 12,
    textAlign: 'center',
    color: '#1E1E2D',
  },
  circleText: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 28,
    textAlign: 'center',
    color: '#FFF',
    position: 'relative',
    top: '38%',
  },
  item: {
    height: 56,
    borderRadius: 16,
    marginHorizontal: 7,
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 7,
  },
  headContainer: {},
});

export default DashBoard;
