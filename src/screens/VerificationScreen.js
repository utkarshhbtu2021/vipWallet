import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import Toast from 'react-native-toast-message';

import {LoginScreenImg} from '../assets/images/image';
import FullFooterButton from '../components/fullFooterButton';
import {getToken} from '../keyChain/keychain';
import Loader from '../components/loader';
import config from '../config';
import URL from '../api/url';

const VerificationScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');

  const showToast = (type, text1, position = 'bottom') => {
    Toast.show({
      type, // options: 'success', 'error', 'info'
      text1,
      position, // options: 'top', 'bottom'
      visibilityTime: 3000, // duration in milliseconds
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
      props: {
        backgroundColor: type === 'success' ? '#28a745' : '#dc3545',
        textColor: '#000',
      },
    });
  };

  const verifyCode = async () => {
    setLoading(true);
    try {
      const authToken = await getToken();
      const response = await axios.get(
        `${URL[config.env].BASE_URL}auth/verify-code/${verificationCode}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            Accept: '*/*',
          },
        },
      );

      setLoading(false);

      if (response.status === 201) {
        showToast('success', 'Verification successful!', 'bottom');
        setTimeout(() => {
          // navigation.navigate('Home');
          navigation.navigate('PinCodeScreen');
        }, 2000);
      } else {
        showToast(
          'error',
          'Failed to verify the code. Please try again.',
          'bottom',
        );
      }
    } catch (error) {
      setLoading(false);
      showToast(
        'error',
        'Failed to verify the code. Please try again.',
        'bottom',
      );
      console.error('Verification failed:', error);
    }
  };

  const moveToScanner = () => {
    navigation.navigate('ScannerScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Loader loading={loading} />
      <Toast ref={ref => Toast.setRef(ref)} />
      <View style={styles.imgView}>
        <Image source={LoginScreenImg?.verification} style={styles.img} />
      </View>
      <View style={styles.textView}>
        <Text style={styles.textItem}>We have sent a verification code</Text>
        <Text style={styles.textItem}>to your email, enter it here</Text>
      </View>
      <View style={styles.inputView}>
        <Text style={styles.label}>Enter Verification Code</Text>
        <View style={styles.inputContainer}>
          <Image source={LoginScreenImg?.email} style={styles.icon} />
          <TextInput
            style={{width: '90%'}}
            placeholder="Verification Code"
            value={verificationCode}
            onChangeText={value => setVerificationCode(value)}
          />
          <TouchableOpacity
            onPress={moveToScanner}
            style={{
              width: 45,
              borderWidth: 1,
              marginLeft: 20,
              height: 45,
            }}></TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomView}>
        <View>
          <Text style={styles.btn1}>Didn't receive email?</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.btn2}>Send Code</Text>
        </TouchableOpacity>
      </View>
      <FullFooterButton
        height={56}
        BtnText={'Submit'}
        onBtnPress={() => verifyCode()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btn2: {
    color: '#0066FF',
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Poppins',
  },
  btn1: {
    color: '#7E848D',
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Poppins',
  },
  bottomView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 32,
    marginBottom: 30,
  },
  inputView: {
    marginHorizontal: 32,
    marginTop: 45,
  },
  textView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    resizeMode: 'contain',
    width: 292,
    height: 302,
  },
  imgView: {
    marginHorizontal: 44,
    marginTop: 30,
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderColor: '#F4F4F4',
    borderBottomWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    width: '80%',
  },
  icon: {
    marginRight: 10,
    height: 22,
    width: 22,
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    fontSize: 16,
    fontWeight: '400',
    color: '#A2A2A7',
  },
  textItem: {
    fontFamily: 'Poppins',
    color: '#7E848D',
    fontSize: 14,
    fontWeight: '400',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default VerificationScreen;