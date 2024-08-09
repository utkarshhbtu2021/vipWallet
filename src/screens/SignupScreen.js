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
} from 'react-native';
import Toast from 'react-native-toast-message';
import PhoneInput from 'react-native-phone-number-input';
import CountryPicker from 'react-native-country-picker-modal';

import config from '../config';
import URL from '../api/url';
import Header from '../components/header';
import Loader from '../components/loader';
import FullFooterButton from '../components/fullFooterButton';
import {LoginScreenImg} from '../asserts/images/image';

const {width, height} = Dimensions.get('window');

const SignupScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const phoneInput = useRef(null);
  const [walletName, setWalletName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const onSelect = country => {
    setCountryCode(country.cca2);
    setSelectedCountry(country.name);
  };

  const showToast = (type, text1, position = 'bottom') => {
    Toast.show({
      type,
      text1,
      position,
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 100,
      bottomOffset: 100,
      props: {
        backgroundColor: type === 'success' ? '#28a745' : '#dc3545',
        textColor: '#000',
      },
    });
  };

  const validateInputs = () => {
    if (!walletName || !firstName || !lastName || !email || !phoneNumber || !password || !confirmPassword) {
      showToast('error', 'Please fill all input fields.');
      return false;
    }
    if (password !== confirmPassword) {
      showToast('error', 'Passwords do not match.');
      return false;
    }
    return true;
  };

  const onSave = async () => {
    if (!validateInputs()) return;
    const createPayload = {
      walletName,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      countryCode,
      country: selectedCountry,
      phone: phoneNumber,
      affiliateCode: '1',
      affiliateName: 'a',
      block: '1',
    };
    setLoading(true);
    try {
      const response = await fetch(`${URL[config.env].BASE_URL}auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(createPayload),
      });
      if (!response.ok) {
        showToast('error', 'Please Enter Required Information', 'bottom');
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      showToast('success', 'User Register Successful', 'bottom');
      setTimeout(() => navigation.navigate('Login'), 2000);
    } catch (error) {
      showToast(
        'error',
        'Registration failed. Please try again later.',
        'bottom',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Toast ref={ref => Toast.setRef(ref)} />
      <Loader loading={loading} />
      <Header
        title="Create Wallet"
        navigation={navigation}
        addStyle={styles.titleStyle}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image source={LoginScreenImg?.profile} style={styles.profileImage} />
        </View>
        <View style={styles.container}>
          <TextInputField
            label="Create Wallet Name"
            value={walletName}
            onChangeText={setWalletName}
            placeholder="Wallet Name"
          />
          <TextInputField
            label="First Name"
            value={firstName}
            onChangeText={setFirstName}
            placeholder="First Name"
          />
          <TextInputField
            label="Last Name"
            value={lastName}
            onChangeText={setLastName}
            placeholder="Last Name"
          />
          <TextInputField
            label="Email Address"
            value={email}
            onChangeText={setEmail}
            placeholder="Email Address"
            keyboardType="email-address"
          />
          <Text style={styles.label}>Phone Number</Text>
          <PhoneInput
            ref={phoneInput}
            defaultValue={phoneNumber}
            defaultCode={countryCode}
            layout="first"
            onChangeText={setPhoneNumber}
            containerStyle={styles.phoneInputContainer}
            textContainerStyle={styles.phoneInputTextContainer}
          />
          <PasswordInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            hidePassword={hidePassword}
            onHidePasswordToggle={() => setHidePassword(!hidePassword)}
          />
          <PasswordInput
            label="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            hidePassword={hidePassword}
            onHidePasswordToggle={() => setHidePassword(!hidePassword)}
          />
          <Text style={styles.label}>Select Country</Text>
          <View style={styles.countryPicker}>
            <CountryPicker
              countryCode={countryCode}
              withCallingCode
              onSelect={onSelect}
              withFilter={true} // Enables search functionality
              containerButtonStyle={styles.countryPickerButton}
            />
            {selectedCountry && (
              <Text style={[styles.input, {marginTop: 4}]}>
                {selectedCountry}
              </Text>
            )}
          </View>

          <FullFooterButton
            height={56}
            BtnText="Register"
            onBtnPress={onSave}
          />
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const TextInputField = ({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
}) => (
  <>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.inputContainer}>
      <Image source={LoginScreenImg?.email} style={styles.icon} />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    </View>
  </>
);

const PasswordInput = ({
  label,
  value,
  onChangeText,
  hidePassword,
  onHidePasswordToggle,
}) => (
  <>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.inputContainer}>
      <Image source={LoginScreenImg?.lock} style={styles.icon} />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={label}
        secureTextEntry={hidePassword}
      />
      <TouchableOpacity onPress={onHidePasswordToggle}>
        <Image source={LoginScreenImg?.eye} style={styles.icon} />
      </TouchableOpacity>
    </View>
  </>
);

const styles = StyleSheet.create({
  countryPicker: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  safeArea: {
    backgroundColor: '#FFF',
    flex: 1,  // Ensures SafeAreaView takes full height
  },
  scrollContainer: {
    paddingBottom: 150,
  },
  imageContainer: {
    marginTop: 25,
  },
  profileImage: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: width * 0.125,
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
    marginBottom: 5,
    fontSize: 14,
    fontWeight: '500',
    color: '#A2A2A7',
    fontFamily: 'Poppins',
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderRadius: 5,
    borderColor: '#dcdcdc',
    marginBottom: 20,
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 45,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  phoneInputContainer: {
    width: '100%',
    height: 45,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
  phoneInputTextContainer: {
    paddingVertical: 0,
    backgroundColor: '#FFF',
  },
  countryPickerButton: {
    padding: 5,
  },
  titleStyle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    fontWeight: '500',
    marginLeft:100
  },
  cancelText: {
    marginTop: 20,
    fontSize: 16,
    color: '#007bff',
    textAlign: 'center',
  },
});

export default SignupScreen;