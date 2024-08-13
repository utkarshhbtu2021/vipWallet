import React from 'react';
import {Image, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {DrawerImages, DashboardScreenImg} from '../assets/images/image';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import DashboardScreen from '../screens/DashboardScreen';
import StackingScreen from '../screens/StackingScreen';
import CustomDrawerContent from './CustomDrawerContent';
import VerificationScreen from '../screens/VerificationScreen';
import Scanner from '../screens/ScannerScreen';
import PinCodeScreen from '../screens/PinCodeScreen';
import TermsConditionScreen from '../screens/TermsConditionScreen';
import HelpSupportScreen from '../screens/HelpSupportScreen';
import SupportCentreScreen from '../screens/SupportCentre';
import FiatCurrencyScreen from '../screens/FietCurrency';
import ProfileScreen from '../screens/ProfileScreen';

import ContactManagerScreen from '../screens/ContactManager';
import DirectAffiliateScreen from '../screens/DirectAffiliate';
import EarnMoreDividendScreen from '../screens/EarnMoreDiv';
import RegisterAffiliateScreen from '../screens/RegisterAffiliate';
import StackingAffiliateScreen from '../screens/StackingAffiliate';
import TotalAffiliateScreen from '../screens/TotalAffiliate';
import ChangeEmailScreen from '../screens/ChangeEmail';
import ChangeProfileScreen from '../screens/ChangeProfile';
import CurrencyCalculatorScreen from '../screens/CurrencyCalculator';
import TransactionPinScreen from '../screens/TransactionPin';
import DeactivateAccountScreen from '../screens/DeactivateAccount';
import BlockMatchingDividendScreen from '../screens/BlockMatchingDividend';
import StackingReferralDividendScreen from '../screens/StackingReferralDividend';

import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabIcon = ({source}) => <Image source={source} style={styles.icon} />;

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle: styles.tabBarLabelStyle,
      tabBarIconStyle: styles.tabBarIconStyle,
      tabBarStyle: styles.tabBarStyle,
    }}>
    <Tab.Screen
      name="Home"
      component={DashboardScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <TabIcon source={DashboardScreenImg.HomeButton} />
        ),
      }}
    />
    <Tab.Screen
      name="Block Matching"
      component={DashboardScreen}
      options={{
        headerShown: false,
        tabBarIcon: () => (
          <TabIcon source={DashboardScreenImg.StackingButton} />
        ),
      }}
    />
    <Tab.Screen
      name="Staking"
      component={DashboardScreen}
      options={{
        headerShown: false,
        tabBarIcon: () => (
          <TabIcon source={DashboardScreenImg.StackingButton} />
        ),
      }}
    />
  </Tab.Navigator>
);

const DrawerNavigator = ({navigation}) => {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerLabelStyle: styles.drawerLabelStyle,
        drawerStyle: {
          width: 320,
        },
      }}>
      <Drawer.Screen
        name="Dashboard"
        component={BottomTabNavigator}
        options={{
          drawerIcon: () => (
            <Image source={DrawerImages.dashIcon} style={styles.image} />
          ),
          headerTitle: 'My Dashboard',
        }}
      />
    </Drawer.Navigator>
  );
};

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VerificationScreen"
        component={VerificationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ScannerScreen"
        component={Scanner}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PinCodeScreen"
        component={PinCodeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Stacking"
        component={StackingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TermsConditionScreen"
        component={TermsConditionScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HelpSupportScreen"
        component={HelpSupportScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SupportCentreScreen"
        component={SupportCentreScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FiatCurrencyScreen"
        component={FiatCurrencyScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ContactManagerScreen"
        component={ContactManagerScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DirectAffiliateScreen"
        component={DirectAffiliateScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EarnMoreDividendScreen"
        component={EarnMoreDividendScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterAffiliateScreen"
        component={RegisterAffiliateScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StackingAffiliateScreen"
        component={StackingAffiliateScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TotalAffiliateScreen"
        component={TotalAffiliateScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChangeEmailScreen"
        component={ChangeEmailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChangeProfileScreen"
        component={ChangeProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CurrencyCalculatorScreen"
        component={CurrencyCalculatorScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DeactivateAccountScreen"
        component={DeactivateAccountScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TransactionPinScreen"
        component={TransactionPinScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BlockMatchingDividendScreen"
        component={BlockMatchingDividendScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StackingReferralDividendScreen"
        component={StackingReferralDividendScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  tabBarLabelStyle: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Montserrat',
    paddingBottom: 5,
    marginBottom: 8,
  },
  tabBarStyle: {
    backgroundColor: '#F4F4F4',
    height: 70,
  },
  tabBarIconStyle: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  icon: {
    width: 24,
    height: 24,
  },
  image: {
    height: 24,
    width: 24,
    marginRight: -15,
  },
  drawerLabelStyle: {
    color: 'white',
  },
  drawerLabel: {
    color: 'white',
  },
});

export default AppNavigator;
