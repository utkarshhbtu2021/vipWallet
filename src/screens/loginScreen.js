import React, {useState, useReducer} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';

import {LoginScreenImg} from '../asserts/images/image';
import Loader from '../components/loader';
import Header from '../components/header';
import FullFooterButton from '../components/fullFooterButton';

import {initialState, reducer} from '../allReducers/loginReducer';
import api from '../api';
import {saveToken} from '../keyChain/keychain';

const LoginScreen = ({navigation}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [hidePassword, setHidePassword] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    dispatch({type: 'SET_FIELD', field, value});
  };

  const validateFields = () => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!state.walletName) {
      dispatch({type: 'SET_ERROR', error: 'Wallet name is required.'});
      return false;
    }
    if (!state.email) {
      dispatch({type: 'SET_ERROR', error: 'Email is required.'});
      return false;
    }
    if (state.email && !re.test(String(state.email).toLowerCase())) {
      dispatch({type: 'SET_ERROR', error: 'Invalid Email'});
      return false;
    }

    if (!state.password) {
      dispatch({type: 'SET_ERROR', error: 'Password is required.'});
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateFields()) return;

    dispatch({type: 'SET_LOADING', loading: true});
    dispatch({type: 'SET_ERROR', error: ''});
    setLoading(true);

    try {
      const request = {
        url: 'auth/login',
        data: {
          walletName: state.walletName,
          email: state.email,
          password: state.password,
        },
      };

      const response = await api.post(request);
      setLoading(false);

      // Save the token
      await saveToken(response.data.result.token);

      dispatch({type: 'SET_SUCCESS'});
      setTimeout(() => {
        navigation.navigate('Home');
      }, 2000);
    } catch (error) {
      setLoading(false);
      dispatch({type: 'SET_ERROR', error: error.message});
    } finally {
      dispatch({type: 'SET_LOADING', loading: false});
      dispatch({type: 'SET_ERROR', error: ''});
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <Header title={'Add Wallet'} navigation={navigation} />
      <View style={styles.container}>
        <Loader loading={loading} />
        <Image source={LoginScreenImg?.profile} style={styles.profileImage} />

        <Text style={styles.label}>Wallet Name</Text>
        <View style={styles.inputContainer}>
          <Image source={LoginScreenImg?.email} style={styles.icon} />
          <TextInput
            style={styles.input}
            value={state.walletName}
            onChangeText={value => handleChange('walletName', value)}
            placeholder="Wallet Name"
          />
        </View>
        <Text style={styles.label}>Email Address</Text>
        <View style={styles.inputContainer}>
          <Image source={LoginScreenImg?.email} style={styles.icon} />

          <TextInput
            style={styles.input}
            value={state.email}
            onChangeText={value => handleChange('email', value)}
            placeholder="Email Address"
            keyboardType="email-address"
          />
        </View>
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputContainer}>
          <Image source={LoginScreenImg?.lock} style={styles.icon} />

          <TextInput
            style={styles.input}
            value={state.password}
            onChangeText={value => handleChange('password', value)}
            placeholder="Password"
            secureTextEntry={hidePassword}
          />
          <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
            <Image source={LoginScreenImg?.eye} style={styles.icon} />
          </TouchableOpacity>
        </View>
        {state.loading ? (
          <ActivityIndicator />
        ) : (
          <FullFooterButton BtnText={'Login'} onBtnPress={handleSubmit} />
        )}
        {state.error && <Text style={styles.error}>{state.error}</Text>}
        {state.success && (
          <Text style={styles.success}>User Logged in successfully!</Text>
        )}

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
              navigation.navigate('Signup');
            }}>
            <Text style={styles.forgotPasswordText}>New User?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
  error: {
    color: 'red',
  },
  success: {
    color: 'green',
  },
});

export default LoginScreen;
