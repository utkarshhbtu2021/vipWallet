import React, {useRef, useState} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Header from '../components/header';
import PasswordInput from '../components/passwordInput';
import FullFooterButton from '../components/fullFooterButton';
import {toast} from '../components/toast';

const ProfileScreen = ({navigation}) => {
  const initialErrorState = {
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  };

  const toastRef = useRef('bottom');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(initialErrorState);

  const handleChangePassword = async () => {
    const valid = await validatePassword(newPassword, confirmPassword);
    if (valid) {
      onPasswordChange(newPassword, confirmPassword);
    }
  };

  const onPasswordChange = async (newPassword, confirmPassword) => {
    try {
      console.log('Password changed successfully');
      message('Password changed successfully', 'success');
      // Add actual password change logic here
    } catch (error) {
      console.error(error);
      message('Failed to change password', 'error');
    }
  };

  const validatePassword = async (newPass, confirmPass) => {
    if (newPass.length < 8) {
      message('New Password must be at least 8 characters.');
      setError({...initialErrorState, newPassword: true});
      return false;
    } else if (newPass !== confirmPass) {
      message('New password and confirm password do not match.');
      setError({...initialErrorState, confirmPassword: true});
      return false;
    }
    return true;
  };

  const message = (textMessage, status) => {
    const color = status === 'success' ? '#4CAF50' : '#FF0000';
    toast.bottom(toastRef, textMessage, 3000, color);
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        addStyle={styles.header}
        navigation={navigation}
        title={'Update Profile'}
      />
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
          // style={styles.passwordInput}
        />
        <PasswordInput
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text.trim())}
          label={'Confirm Password'}
          placeholder={'Confirm new password'}
          isInvalid={error.confirmPassword}
          color={'#A2A2A7'}
          // style={styles.passwordInput}
        />
      </View>
      <FullFooterButton
        BtnText={'Change Password'}
        onBtnPress={handleChangePassword}
      />
      <FullFooterButton
        BtnText={'Cancel'}
        btnColor={'#01C0EF'}
        onBtnPress={handleCancel}
      />
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
