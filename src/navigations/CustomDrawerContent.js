import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import {DrawerImages} from '../assets/images/image';
import DrawerModule from '../modules/drawer';

const deviceHeight = Dimensions.get('screen').height;

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
      </View>
      <DrawerItemList {...props} />
      <View
        style={{
          height: deviceHeight,
        }}>
        <DrawerModule {...props}  />
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
    paddingTop: 12,
    paddingBottom: 22,
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