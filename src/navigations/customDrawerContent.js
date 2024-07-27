import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {DashboardScreenImg, DrawerImages} from '../asserts/images/image';

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView  style={{backgroundColor: '#0F1621'}} {...props}>
      <View style={styles.drawerHeader}>
        <Image source={DrawerImages.userIcon} style={styles.userIcon} />
        <Text style={styles.userName}>John Doe</Text>
      </View>
      <DrawerItemList {...props} />
      <View
        style={{
          backgroundColor: 'red',
          flex: 1,
          borderWidth: 1,
          height: '100%',
        }}>
        <TouchableOpacity style={{borderWidth: 1}}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    padding: 20,
    alignItems: 'center',
  },
  userIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  userName: {
    marginTop: 10,
    color:'#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutButton: {
    marginTop: 20,
    marginLeft: 10,
  },
  logoutText: {
    fontSize: 16,
    color: 'red',
  },
});

export default CustomDrawerContent;
