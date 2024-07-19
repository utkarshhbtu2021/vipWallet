import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import {DashboardScreenImg, DrawerImages} from '../asserts/images/image';

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView style={{backgroundColor: '#0F1621'}} {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <Image source={DrawerImages.Avatar} style={styles.avatar} />
            <View style={{marginLeft: 15, flexDirection: 'column'}}>
              <Text style={styles.title}>Ashfak Sayem</Text>
              <Text style={styles.caption}>ashfaksayem@gmail.com</Text>
            </View>
          </View>
        </View>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    paddingBottom: 32,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Poppins',
    marginTop: 8,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  caption: {
    marginTop: 3,
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});

export default CustomDrawerContent;
