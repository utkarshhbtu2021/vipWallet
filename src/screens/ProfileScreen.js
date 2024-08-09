import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Toast from 'react-native-toast-message';
import axios from 'axios';

import Header from '../components/header';
import PasswordInput from '../components/passwordInput';
import FullFooterButton from '../components/fullFooterButton';
import Loader from '../components/loader';
import {getToken} from '../keyChain/keychain';
import config from '../config';
import URL from '../api/url';

const ProfileScreen = ({navigation}) => {
  const initialErrorState = {
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  };
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(initialErrorState);
  const [loading, setLoading] = useState(false);

  const showToast = (type, text1, position = 'bottom') => {
    Toast.show({
      type,
      text1,
      position,
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 100,
      props: {
        backgroundColor: type === 'success' ? '#28a745' : '#dc3545',
        textColor: '#000',
      },
    });
  };

  const handleChangePassword = async () => {
    const valid = await validatePassword(
      newPassword,
      confirmPassword,
      currentPassword,
    );
    if (valid) {
      onPasswordChange(newPassword, confirmPassword);
    }
  };

  const onPasswordChange = async (newPassword, confirmPassword) => {
    setLoading(true);
  
    const showErrorToast = (message) => {
      showToast('error', message, 'top');
    };
  
    const showSuccessToast = (message) => {
      showToast('success', message, 'top');
    };
  
    try {
      const payload = {
        password: newPassword,
        confirmPassword: confirmPassword,
      };
  
      const authToken = await getToken();
      const response = await axios.put(
        `${URL[config.env].BASE_URL}auth/change-password`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            Accept: '*/*',
          },
        }
      );
  
      setLoading(false);
  
      if (response.status === 201) {
        showSuccessToast('Password changed successfully');
        setConfirmPassword('');
        setCurrentPassword('');
        setNewPassword('');
      } else if (response.status === 404) {
        showErrorToast('User not found. Please check the verification code.');
      } else if (response.status === 500) {
        showErrorToast('Server error. Please try again later.');
      } else {
        showErrorToast('Failed to verify the code. Please try again.');
      }
    } catch (error) {
      setLoading(false);
  
      if (error.response) {
        const { status } = error.response;
        if (status === 404) {
          showErrorToast('User not found. Please check the verification code.');
        } else if (status === 500) {
          showErrorToast('Server error. Please try again later.');
        } else {
          showErrorToast('Failed to verify the code. Please try again.');
        }
      } else {
        showErrorToast('Network error. Please check your connection.');
      }
      console.error('Verification failed:', error);
    }
  };
  

  const validatePassword = async (newPass, confirmPass, currPass) => {
    const MIN_PASSWORD_LENGTH = 8;
    let errorState = {...initialErrorState};

    if (currPass.length < MIN_PASSWORD_LENGTH) {
      showToast('error', 'Wrong Current Password', 'top');
      errorState = {...errorState, newPassword: true};
      setError(errorState);
      return false;
    }

    if (newPass.length < MIN_PASSWORD_LENGTH) {
      showToast('error', 'New password must be at least 8 characters.', 'top');
      errorState = {...errorState, newPassword: true};
      setError(errorState);
      return false;
    }

    if (newPass !== confirmPass) {
      showToast(
        'error',
        'New password and confirm password do not match.',
        'top',
      );
      errorState = {...errorState, confirmPassword: true};
      setError(errorState);
      return false;
    }
    return true;
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Loader loading={loading} />
      <Header
        addStyle={styles.header}
        navigation={navigation}
        title={'Update Profile'}
      />
      <Toast ref={ref => Toast.setRef(ref)} />
      <View style={styles.formContainer}>
        <PasswordInput
          value={currentPassword}
          onChangeText={text => setCurrentPassword(text.trim())}
          label={'Current Password'}
          placeholder={'Enter current password'}
          isInvalid={error.currentPassword}
          color={'#A2A2A7'}
        />
        <PasswordInput
          value={newPassword}
          onChangeText={text => setNewPassword(text.trim())}
          label={'New Password'}
          placeholder={'Enter new password'}
          isInvalid={error.newPassword}
          color={'#A2A2A7'}
        />
        <PasswordInput
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text.trim())}
          label={'Confirm Password'}
          placeholder={'Confirm new password'}
          isInvalid={error.confirmPassword}
          color={'#A2A2A7'}
        />
      </View>
      <View style={{marginTop: 39}}>
        <FullFooterButton
          height={56}
          BtnText={'Change Password'}
          onBtnPress={handleChangePassword}
        />
      </View>
      <View style={{marginTop: 20}}>
        <FullFooterButton
          height={56}
          BtnText={'Cancel'}
          btnColor={'#01C0EF'}
          onBtnPress={handleCancel}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    paddingLeft: 55,
    fontSize: 18,
    fontWeight: '500',
  },
  formContainer: {
    paddingTop: 31,
    paddingHorizontal: 20,
  },
  passwordInput: {
    marginTop: 20,
  },
});

export default ProfileScreen;