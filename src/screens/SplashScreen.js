import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {SplashScreenImg} from '../asserts/images/image';
const {width, height} = Dimensions.get('window');

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.upperLeftCircle}></View>
      <View style={styles.bottomRightCircle}></View>
      <Image source={SplashScreenImg?.wallet} style={styles.logo} />
      <Text style={styles.title}>VIP WALLET</Text>
      <Text style={styles.subtitle}>
        VIP Wallet Powered by WhiteBitcoin Organization
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Adjust background color if needed
  },
  logo: {
    width: 100,
    height: 100, // Adjust dimensions as needed
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000', // Adjust text color if needed
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666', // Adjust text color if needed
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  upperLeftCircle: {
    position: 'absolute',
    top: -width * 0.18,
    left: -width * 0.15,
    width: width * 0.5,
    height: width * 0.5,
    borderRadius: width * 0.28,
    borderWidth: 36,
    borderColor: '#E0F7FA',
  },
  bottomRightCircle: {
    position: 'absolute',
    bottom: -width * 0.18,
    right: -width * 0.15,
    width: width * 0.5,
    height: width * 0.5,
    borderRadius: width * 0.28,
    borderWidth: 36,
    borderColor: '#E0F7FA',
    // Adjust color as needed
  },
});
export default SplashScreen;
