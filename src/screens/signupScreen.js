import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import Header from '../components/header';
import FullFooterButton from '../components/FullFooterButton';

const {width, height} = Dimensions.get('window');

const SignupScreen = ({navigation}) => {
  const [walletName, setWalletName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const countries = [
    {label: 'United States', value: 'us'},
    {label: 'Canada', value: 'ca'},
    {label: 'United Kingdom', value: 'uk'},
    {label: 'Australia', value: 'au'},
    // Add more countries as needed
  ];

  return (
    <ScrollView style={{backgroundColor: '#FFF'}}>
      <Header title={'Create Wallet'} navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.label}>Create Wallet Name</Text>
        <TextInput
          style={styles.input}
          value={walletName}
          onChangeText={setWalletName}
          placeholder="Wallet Name"
          placeholderTextColor="#aaa"
        />

        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
          placeholder="First Name"
          placeholderTextColor="#aaa"
        />

        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
          placeholder="Last Name"
          placeholderTextColor="#aaa"
        />

        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email Address"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Phone Number"
          placeholderTextColor="#aaa"
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            placeholderTextColor="#aaa"
            secureTextEntry
          />
          <TouchableOpacity>
            <Text style={styles.showPassword}>👁️</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Confirm Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirm Password"
            placeholderTextColor="#aaa"
            secureTextEntry
          />
          <TouchableOpacity>
            <Text style={styles.showPassword}>👁️</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Select Country</Text>

        {/* <RNPickerSelect
        onValueChange={value => setCountry(value)}
        items={countries}
        placeholder={{label: 'Select a country...', value: null}}
        style={{
          inputIOS: styles.input,
          inputAndroid: styles.input,
          placeholder: {color: '#aaa'},
        }}
        value={country}
      /> */}
        <FullFooterButton
          BtnText={'Register'}
          onBtnPress={() => navigation.navigate('Dashboard')}
        />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: width * 0.05,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  profileImage: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: (width * 0.25) / 2,
    alignSelf: 'center',
    marginBottom: height * 0.03,
  },
  title: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: height * 0.03,
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    fontSize: 16,
    fontWeight: '600',
  },
  input: {
    width: '100%',
    height: height * 0.06,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: width * 0.03,
    marginBottom: height * 0.02,
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
