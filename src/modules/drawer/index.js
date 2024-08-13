import React, {useState} from 'react';
import {
  View,
  Text,
  Alert,
  Share,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import axios from 'axios';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {getToken} from '../../keyChain/keychain';
import config from '../../config';
import URL from '../../api/url';
import {DrawerImages} from '../../assets/images/image';

const MenuItem = React.memo(
  ({source, text, onPress, toggle, isOpen, onToggle}) => (
    <TouchableOpacity
      style={styles.row}
      onPress={() => (toggle ? onToggle() : onPress())}>
      <Image source={source} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
      {toggle && (
        <Animated.View style={{marginLeft: 'auto', marginRight: 3}}>
          <MaterialCommunityIcons
            name={isOpen ? 'chevron-up' : 'chevron-down'}
            size={24}
            color={'#FFF'}
          />
        </Animated.View>
      )}
    </TouchableOpacity>
  ),
);

const DrawerModule = props => {
  const [openItems, setOpenItems] = useState({});
  const [openSubItems, setOpenSubItems] = useState({});

  // Define auth variable based on your app's logic
  const auth = true; // or some condition based on your app's logic
  const sendCurr = true; // or some condition based on your app's logic

  const handleToggle = item => {
    setOpenItems(prev => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const handleSubToggle = (parentItem, subItem) => {
    setOpenSubItems(prev => ({
      ...prev,
      [`${parentItem}_${subItem}`]: !prev[`${parentItem}_${subItem}`],
    }));
  };

  const onShare = async () => {
    try {
      const {action, activityType} = await Share.share({
        message:
          'https://play.google.com/store/apps/details?id=com.whitebitcoin&hl=en_IN',
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

  const handlePrivateKeyGenerate = async () => {
    Alert.alert(
      'Are you sure ?',
      'You want to regenerate your private key',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Ok',
          onPress: async () => {
            console.log('abc');
          },
        },
      ],
      {cancelable: false},
    );
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
                props.navigation.navigate('Login');
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

  const menuItems = [
    {
      source: DrawerImages.fiet,
      text: 'Fiet Currencies',
      onPress: () => props.navigation.navigate('FiatCurrencyScreen'),
    },
    {source: DrawerImages.setting, text: 'Settings', toggle: true},
    {
      source: DrawerImages.dividend,
      text: 'Block Matching Dividend',
      onPress: () => props.navigation.navigate('BlockMatchingDividendScreen'),
    },
    {
      source: DrawerImages.refferal,
      text: 'Staking Referral Dividends',
      onPress: () =>
        props.navigation.navigate('StackingReferralDividendScreen'),
    },
    {
      source: DrawerImages.refCode,
      text: 'My Referral Code',
      onPress: () => console.log('PLease Hold WBTC'),
    },
    {source: DrawerImages.security, text: 'Profile Setting', toggle: true},
    {source: DrawerImages.security, text: 'Security', toggle: true},
    {
      source: DrawerImages.calculator,
      text: 'Currency Calculator',
      onPress: () => props.navigation.navigate('CurrencyCalculatorScreen'),
    },
    {
      source: DrawerImages.commanFunction,
      text: 'Common Function For VIP',
      toggle: true,
    },
    {
      source: DrawerImages.shareApp,
      text: 'Help And Support',
      onPress: () => props.navigation.navigate('HelpSupportScreen'),
    },
    {
      source: DrawerImages.terms,
      text: 'Terms & Conditions',
      onPress: () => props.navigation.navigate('TermsConditionScreen'),
    },
    {source: DrawerImages.logout, text: 'Logout', onPress: handleLogout},
    {source: DrawerImages.shareApp, text: 'Share App', onPress: onShare},
  ];

  const submenuItems = {
    'Common Function For VIP': [
      {
        text: 'Direct Affiliate',
        onPress: () => props.navigation.navigate('DirectAffiliateScreen'),
      },
      {
        text: 'Register Affiliate',
        onPress: () => props.navigation.navigate('RegisterAffiliateScreen'),
      },
      {
        text: 'Staking Affiliate',
        onPress: () => props.navigation.navigate('StackingAffiliateScreen'),
      },
      {
        text: 'Total Affiliate',
        onPress: () => props.navigation.navigate('TotalAffiliateScreen'),
      },
      {
        text: 'Contact Manager',
        onPress: () => props.navigation.navigate('ContactManagerScreen'),
      },
      {
        text: 'Earn More Dividend (Upgrade)',
        onPress: () => props.navigation.navigate('EarnMoreDividendScreen'),
      },
    ],
    'Profile Setting': [
      {
        text: 'Change Email',
        onPress: () => props.navigation.navigate('ChangeEmailScreen'),
      },
      {
        text: 'Change Password',
        onPress: () => props.navigation.navigate('ChangeProfileScreen'),
      },
    ],
    Security: [
      {
        text: 'C2 Authentication',
        onPress: () => console.log('C2 Authentication'),
        subItems: [
          {
            text: 'Email Authentication',
            auth,
            onPress: () => console.log('Sub Item 1'),
          },
          {
            text: 'Security Key Authentication',
            auth,
            onPress: () => console.log('Sub Item 2'),
          },
        ],
      },
      {
        text: 'Change Password',
        onPress: () => props.navigation.navigate('ProfileScreen'),
      },
      {
        text: 'Change Pin',
        onPress: () => props.navigation.navigate('PinCodeScreen'),
      },
      {
        text: 'Private Key Regenerate',
        onPress: handlePrivateKeyGenerate,
      },
      {
        text: 'Disable Account',
        onPress: () => props.navigation.navigate('DeactivateAccountScreen'),
      },
      {
        text: 'Create transaction Pin',
        onPress: () => props.navigation.navigate('TransactionPinScreen'),
      },
    ],
    Settings: [
      {
        text: 'Limit and Feature',
        onPress: () => console.log('Limit and Feature'),
        subItems: [
          {
            text: 'Send Currency',
            sendCurr,
            onPress: () => console.log('Sub Item 1'),
          },
        ],
      },
    ],
  };

  return (
    <View style={styles.container}>
      {menuItems.map((item, index) => (
        <View key={index}>
          <MenuItem
            source={item.source}
            text={item.text}
            onPress={item.onPress}
            toggle={item.toggle}
            isOpen={openItems[item.text]}
            onToggle={() => handleToggle(item.text)}
          />
          {item.toggle && openItems[item.text] && (
            <View style={styles.submenu}>
              {submenuItems[item.text]?.map((subItem, subIndex) => (
                <View key={subIndex}>
                  <TouchableOpacity
                    style={styles.submenuItem}
                    onPress={subItem.onPress}>
                    <Text style={styles.submenuText}>{subItem.text}</Text>
                    {subItem.subItems && (
                      <TouchableOpacity
                        style={{marginLeft: 'auto', marginRight: 20}}
                        onPress={() =>
                          handleSubToggle(item.text, subItem.text)
                        }>
                        <MaterialCommunityIcons
                          name={
                            openSubItems[`${item.text}_${subItem.text}`]
                              ? 'chevron-up'
                              : 'chevron-down'
                          }
                          size={24}
                          color={'#FFF'}
                        />
                      </TouchableOpacity>
                    )}
                  </TouchableOpacity>
                  {subItem.subItems &&
                    openSubItems[`${item.text}_${subItem.text}`] && (
                      <View style={styles.subsubmenu}>
                        {subItem.subItems.map((subSubItem, subSubIndex) => (
                          <View
                            style={{flexDirection: 'row'}}
                            key={subSubIndex}
                            onPress={subSubItem.onPress}>
                            <Text style={styles.subsubmenuText}>
                              {subSubItem.text}
                            </Text>
                            {subSubItem.auth && auth && (
                              <AntDesign
                                name={'checkcircle'}
                                size={10}
                                color={'green'}
                                style={{marginLeft: 8, paddingTop: 8}}
                              />
                            )}
                            {subSubItem.sendCurr && sendCurr && <></>}
                          </View>
                        ))}
                      </View>
                    )}
                </View>
              ))}
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
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
    height: 20,
    width: 20,
    marginRight: -10,
  },
  separator: {
    height: 0.5,
    backgroundColor: '#D1D3D4',
    marginVertical: 20,
    marginHorizontal: 12,
  },
  submenu: {
    marginLeft: 60,
    marginVertical: 8,
  },
  submenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  submenuText: {
    color: '#D1D3D4',
    fontSize: 14,
    fontWeight: '400',
    paddingVertical: 5,
  },
  subsubmenu: {
    marginLeft: 30,
    marginVertical: 8,
  },
  subsubmenuText: {
    color: '#D1D3D4',
    fontSize: 13,
    fontWeight: '300',
    paddingVertical: 4,
  },
});

export default DrawerModule;
