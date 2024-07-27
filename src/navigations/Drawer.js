import {View, Text, Linking, Alert, Share} from 'react-native';
import React from 'react';

import FietCurrencyScreen from '../screens/FietCurrency';
import ProfileScreen from '../screens/ProfileScreen';

import {getToken} from '../keyChain/keychain';

import config from '../config';
import URL from '../api/url';
import axios from 'axios';

const DrawerModule = () => {
  const onShare = async () => {
    try {
      const {action, activityType} = await Share.share({
        message: 'https://proctur.com', // Replace with your content
        // You can also include title or URL if needed
      });

      switch (action) {
        case Share.sharedAction:
          if (activityType) {
            console.log('Shared with activity type:', activityType);
          } else {
            console.log('Content shared successfully');
          }
          break;
        case Share.dismissedAction:
          console.log('Share action dismissed');
          break;
        default:
          console.log('Unhandled action:', action);
      }
    } catch (error) {}
  };

  const handleLogout = async () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: async () => {
            try {
              const authToken = await getToken();
              const response = await axios.post(
                URL[config.env].BASE_URL + 'auth/logout',
                '', // Body is empty
                {
                  headers: {
                    Authorization: `Bearer ${authToken}`, // Include the token in the Authorization header
                    accept: '*/*', // Match the curl request headers
                  },
                },
              );
              if (response.status === 201) {
                navigation.navigate('Login');
              } else {
                Alert.alert('Error', 'Failed to logout. Please try again.');
              }
            } catch (error) {
              Alert.alert('Error', 'Failed to logout. Please try again.');
            }
          },
        },
      ],
      {cancelable: false},
    );
  };
  return (
    <View>
      <Text>DrawerModule</Text>
    </View>
  );
};

export default DrawerModule;

{
  /* 
      
      <Drawer.Screen
        name="Settings"
        component={HomeScreen}
        options={{
          drawerIcon: () => (
            <Image source={DrawerImages.setting} style={styles.image} />
          ),
        }}
      />
      <Drawer.Screen
        name="Fiat Currencies"
        component={FietCurrencyScreen}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <Image source={DrawerImages.fiet} style={styles.image} />
          ),
        }}
      />
      <Drawer.Screen
        name="Block Matching Dividend"
        component={HomeScreen}
        options={{
          drawerIcon: () => (
            <Image source={DrawerImages.dividend} style={styles.image} />
          ),
        }}
      />
      <Drawer.Screen
        name="Staking Referral Dividends"
        component={HomeScreen}
        options={{
          drawerIcon: () => (
            <Image source={DrawerImages.refferal} style={styles.image} />
          ),
        }}
      />
      <Drawer.Screen
        name="My Referral Code"
        component={HomeScreen}
        options={{
          drawerIcon: () => (
            <Image source={DrawerImages.refCode} style={styles.image} />
          ),
        }}
      />
      <Drawer.Screen
        name="Security"
        component={ProfileScreen}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <Image source={DrawerImages.security} style={styles.image} />
          ),
        }}
      />
      <Drawer.Screen
        name="Currency Calculator"
        component={HomeScreen}
        options={{
          drawerIcon: () => (
            <Image source={DrawerImages.calculator} style={styles.image} />
          ),
        }}
      />
      <Drawer.Screen
        name="Common Function For Vip"
        component={HomeScreen}
        options={{
          drawerIcon: () => (
            <Image source={DrawerImages.commanFunction} style={styles.image} />
          ),
        }}
      />
      <Drawer.Screen
        name="Help And Support"
        component={HomeScreen}
        options={{
          drawerIcon: () => (
            <Image source={DrawerImages.shareApp} style={styles.image} />
          ),
        }}
      />
      <Drawer.Screen
        name="Terms and Conditions"
        component={HomeScreen}
        options={{
          drawerIcon: () => (
            <Image source={DrawerImages.terms} style={styles.image} />
          ),
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={DashboardScreen}
        options={{
          drawerIcon: () => (
            <Image source={DrawerImages.logout} style={styles.image} />
          ),
          // Call the handleLogout function when the item is pressed
          drawerLabel: () => (
            <Text onPress={handleLogout} style={styles.drawerLabel}>
              Logout
            </Text>
          ),
        }}
      />
      <Drawer.Screen
        name="Share App"
        component={HomeScreen}
        options={{
          drawerIcon: () => (
            <Image source={DrawerImages.shareApp} style={styles.image} />
          ),
          drawerLabel: () => (
            <Text onPress={onShare} style={styles.drawerLabel}>
              Share App
            </Text>
          ),
        }}
      /> */
}
