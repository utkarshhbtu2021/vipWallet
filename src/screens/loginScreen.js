import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {LoginScreenImg} from '../asserts/images/image';
// profile, eye, email
const LoginScreen = ({navigation}) => {
  const [walletName, setWalletName] = useState('utkarsh');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.backButton}>
        <Icon name="arrow-left" size={24} />
        <Text>Go TO Back</Text>
      </TouchableOpacity> */}

      <Image source={LoginScreenImg?.profile} style={styles.profileImage} />
      <Text style={styles.title}>Add Wallet</Text>

      <Text style={styles.label}>Wallet Name</Text>
      <View style={styles.inputContainer}>
        <Image source={LoginScreenImg?.email} style={styles.icon} />
        {/* <Icon name="account" size={20} style={styles.icon} /> */}
        <TextInput
          style={styles.input}
          value={walletName}
          onChangeText={setWalletName}
          placeholder="Wallet Name"
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

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('signup');
          }}>
          <Text style={styles.forgotPasswordText}>New User?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#fff',
    // backgroundColor: 'red',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',

    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
    height: 22,
    width: 22,
  },
  input: {
    flex: 1,
    padding: 4,
  },
  loginButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  forgotPasswordText: {
    color: '#1E90FF',
    marginTop: 10,
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default LoginScreen;
