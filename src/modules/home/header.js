import React from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {DashboardScreenImg} from '../../assets/images/image';

const HeaderNav = ({heading, toggleDrawer}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Image source={DashboardScreenImg?.DashBoardNav} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.headText}>{heading}</Text>
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
