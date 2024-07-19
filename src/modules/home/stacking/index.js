import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, FlatList} from 'react-native';
import StackingCard from './stackingCard';

const data = [
  {id: '1', title: 'Card 1'},
  {id: '2', title: 'Card 2'},
  {id: '3', title: 'Card 3'},
  // Add more items as needed
];

const Stacking = ({navigation}) => {
  const renderItem = ({item}) => <StackingCard title={item.title} navigation={navigation} />;

  return (
    <SafeAreaView style={{flex: 1, position: 'relative'}}>
      <View style={styles.headContainer}>
        <View style={styles.headerView}>
          <Text style={styles.heading}>Locked Staking</Text>
        </View>
        <View style={styles.subtitleView}>
          <Text style={styles.headerSubtitle}>
            Whenever you stake any currency or assets, you will get rewarded or
            earn WBTC
          </Text>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingBottom: 200}}
      />
    </SafeAreaView>
  );
};

export default Stacking;

const styles = StyleSheet.create({
  subtitleView: {
    marginTop: 16.5,
    flexDirection: 'row',
    marginLeft: 22.25,
    marginRight: 10,
  },
  headerView: {
    marginTop: 22,
    flexDirection: 'row',
    marginHorizontal: 22.25,
  },
  container: {
    flex: 1,
  },
  heading: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 29,
    textAlign: 'center',
    color: '#0066FF',
  },
  headerSubtitle: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 12,
    color: '#1E1E2D',
  },
  headContainer: {},
  flatListContent: {
    // paddingHorizontal: 22.25,
    // paddingTop: 16.5,
  },
});
