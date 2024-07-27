import React from 'react';
import {
  View,
  Text,
  Alert,
  Share,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import axios from 'axios';

import { getToken } from '../../keyChain/keychain';
import config from '../../config';
import URL from '../../api/url';
import { DrawerImages } from '../../asserts/images/image';

const MenuItem = React.memo(({ source, text, onPress }) => (
  <TouchableOpacity style={styles.row} onPress={onPress}>
    <Image source={source} style={styles.image} />
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
));

const DrawerModule = () => {
  const onShare = async () => {
    try {
      const { action, activityType } = await Share.share({
        message: 'https://play.google.com/store/apps/details?id=com.whitebitcoin&hl=en_IN',
      });

      if (action === Share.sharedAction && activityType) {
        console.log('Shared with activity type:', activityType);
      } else if (action === Share.dismissedAction) {
        console.log('Share action dismissed');
      } else {
        console.log('Content shared successfully');
      }
    } catch (error) {
      console.error('Error sharing content:', error);
    }
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
                `${URL[config.env].BASE_URL}auth/logout`,
                {},
                {
                  headers: {
                    Authorization: `Bearer ${authToken}`,
                    Accept: '*/*',
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
      { cancelable: false },
    );
  };

  return (
    <View style={styles.container}>
      <MenuItem source={DrawerImages.fiet} text="Fiet Currencies" />
      <MenuItem source={DrawerImages.setting} text="Settings" />
      <MenuItem source={DrawerImages.dividend} text="Block Matching Dividend" />
      <MenuItem source={DrawerImages.refferal} text="Staking Referral Dividends" />
      <MenuItem source={DrawerImages.refCode} text="My Referral Code" />
      <MenuItem source={DrawerImages.security} text="Profile Setting" />
      <MenuItem source={DrawerImages.security} text="Security" />
      <MenuItem source={DrawerImages.calculator} text="Currency Calculator" />
      <MenuItem source={DrawerImages.commanFunction} text="Common Function For VIP" />
      <MenuItem source={DrawerImages.shareApp} text="Help And Support" />

      <View style={styles.separator} />

      <MenuItem source={DrawerImages.terms} text="Terms & Conditions" />
      <MenuItem source={DrawerImages.logout} text="Logout" onPress={handleLogout} />
      <MenuItem source={DrawerImages.shareApp} text="Share App" onPress={onShare} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: 12,
    padding: 5,
    paddingVertical: 14,
  },
  text: {
    color: '#D1D3D4',
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 30,
  },
  image: {
    height: 24,
    width: 24,
    marginRight: -15,
  },
  separator: {
    height: .5,
    backgroundColor: '#D1D3D4',
    marginVertical: 20,
    marginHorizontal: 12,
  },
});

export default DrawerModule;
