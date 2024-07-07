import React from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {DashboardScreenImg} from '../../asserts/images/image';

const HeaderNav = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={DashboardScreenImg?.DashBoardNav} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.headText}>{'Dashboard'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headText: {
    marginLeft: 12,
    fontSize: 18,
    fontStyle: 'Poppins',
    fontWeight: '600',
    color: '#000',
  },
  container: {
    marginTop: 25,
    marginHorizontal: 22.25,
    flexDirection: 'row',
  },
  image: {
    height: 23,
    width: 23,
  },
});

export default HeaderNav;
