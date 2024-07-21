import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  SafeAreaView,
  Button,
  Alert,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Header from '../components/header';
import FullFooterButton from '../components/fullFooterButton';
import {LoginScreenImg} from '../asserts/images/image';
import {viewMessage} from '../utils/toastUtils';
import {colors} from '../components/colors';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import config from '../config';
import URL from '../api/url';
import Loader from '../components/loader';
import PhoneInput from 'react-native-phone-number-input';

const {width, height} = Dimensions.get('window');

const SignupScreen = ({navigation}) => {
  const toastRef = useRef(null);
  const [walletName, setWalletName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [loading, setLoading] = useState(false);
  const phoneInput = useRef(null);
  const [formattedValue, setFormattedValue] = useState('');

  const countries = [
    {label: 'United States', value: 'us'},
    {label: 'Canada', value: 'ca'},
    {label: 'United Kingdom', value: 'uk'},
    {label: 'Australia', value: 'au'},
  ];

  const showToast = () => {
    Toast.show({
      type: 'success', // options: 'success', 'error', 'info'
      text1: 'Hello',
      text2: 'This is some something 👋',
    });
  };

  const onSave = async () => {
    setLoading(true);

    // Define the payload
    const payload = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      countryCode: '+91',
      phone: phoneNumber,
      country: selectedCountry,
      affiliateCode: '001',
      affiliateName: 'abc',
      walletName: walletName,
      block: '002',
    };

    // Basic validation (this can be expanded as needed)
    if (!email || !password || password !== confirmPassword) {
      Alert('Please check your input fields.');
      setLoading(false);
      return;
    }

    try {
      // Make the API request to save the user data
      const response = await fetch(`${URL[config.env].BASE_URL}auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        Alert('Please Enter Required Information');
        throw new Error('Network response was not ok');
      }

      // Handle success
      const result = await response.json();
      Alert('User Register Successful');
      console.log('Success:', result);
    } catch (error) {
      // Handle error
      console.error('Error:', error);
      Alert('Registration failed. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: '#FFF'}}>
      <Loader loading={loading} />
      <Header
        title="Create Wallet"
        navigation={navigation}
        addStyle={styles.titleStyle}
      />
      <Toast ref={ref => Toast.setRef(ref)} />
      <ScrollView contentContainerStyle={{paddingBottom: 150}}>
        <View style={{marginTop: 25}}>
          <Image source={LoginScreenImg?.profile} style={styles.profileImage} />
        </View>
        <View style={styles.container}>
          <Text style={styles.label}>Create Wallet Name</Text>
          <View style={styles.inputContainer}>
            <Image source={LoginScreenImg?.email} style={styles.icon} />
            <TextInput
              style={styles.input}
              value={walletName}
              onChangeText={setWalletName}
              placeholder="Wallet Name"
            />
          </View>

          <Text style={styles.label}>First Name</Text>
          <View style={styles.inputContainer}>
            <Image source={LoginScreenImg?.regUser} style={styles.icon} />
            <TextInput
              style={styles.input}
              value={firstName}
              onChangeText={setFirstName}
              placeholder="First Name"
            />
          </View>

          <Text style={styles.label}>Last Name</Text>
          <View style={styles.inputContainer}>
            <Image source={LoginScreenImg?.regUser} style={styles.icon} />
            <TextInput
              style={styles.input}
              value={lastName}
              onChangeText={setLastName}
              placeholder="Last Name"
            />
          </View>

          <Text style={styles.label}>Email Address</Text>
          <View style={styles.inputContainer}>
            <Image source={LoginScreenImg?.email} style={styles.icon} />
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Email Address"
              keyboardType="email-address"
            />
          </View>

          <Text style={styles.label}>Phone Number</Text>
          <PhoneInput
            ref={phoneInput}
            defaultValue={phoneNumber}
            defaultCode="DM"
            layout="first"
            onChangeText={text => {
              setPhoneNumber(text);
            }}
            containerStyle={{
              width: '100%',
              height: 75,
              backgroundColor: '#FFF',
            }}
            textContainerStyle={{backgroundColor: '#FFF'}}
          />

          <Text style={styles.label}>Password</Text>
          <View style={styles.inputContainer}>
            <Image source={LoginScreenImg?.lock} style={styles.icon} />
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              secureTextEntry={hidePassword}
            />
            <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
              <Image source={LoginScreenImg?.eye} style={styles.icon} />
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Confirm Password</Text>
          <View style={styles.inputContainer}>
            <Image source={LoginScreenImg?.lock} style={styles.icon} />
            <TextInput
              style={styles.input}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirm Password"
              secureTextEntry={hidePassword}
            />
            <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
              <Image source={LoginScreenImg?.eye} style={styles.icon} />
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Select Country</Text>
          <View style={styles.inputContainer}>
            <Image source={LoginScreenImg?.countryIcon} style={styles.icon} />
            <TextInput
              style={styles.input}
              value={selectedCountry}
              onChangeText={setSelectedCountry}
              placeholder="Select a country"
            />
          </View>

          <FullFooterButton
            height={56}
            BtnText="Register"
            onBtnPress={() => onSave()}
          />

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    color: '#1E1E2D',
    fontWeight: '600',
    marginLeft: 85,
  },
  profileImage: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: (width * 0.25) / 2,
    alignSelf: 'center',
    marginBottom: height * 0.03,
  },
  icon: {
    marginRight: 10,
    height: 22,
    width: 22,
  },
  container: {
    flexGrow: 1,
    padding: width * 0.05,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    fontSize: 14,
    fontWeight: '500',
    color: '#A2A2A7',
    fontFamily: 'Poppins',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderColor: '#F4F4F4',
    borderBottomWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    padding: 4,
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  showPassword: {
    marginLeft: -width * 0.1,
  },
  registerButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.2,
    borderRadius: 5,
    marginTop: height * 0.02,
    alignSelf: 'center',
  },
  registerButtonText: {
    color: '#fff',
    fontSize: width * 0.045,
  },
  cancelText: {
    color: '#1E90FF',
    textAlign: 'center',
    marginTop: height * 0.01,
  },
});

export default SignupScreen;
