import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Header from '../components/header';
import PasswordInput from '../components/passwordInput';
import FullFooterButton from '../components/fullFooterButton';

const ProfileScreen = ({navigation}) => {
  const initial = {
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  };
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState({...initial});

  return (
    <SafeAreaView style={styles.container}>
      <Header
        addStyle={{paddingLeft: 55, fontSize: 18, fontWeight: '500'}}
        navigation={navigation}
        title={'Update Profile'}
      />
      <View style={{paddingTop: 31, paddingHorizontal: 20}}>
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
          style={{marginTop: 20}}
        />
        <PasswordInput
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text.trim())}
          label={'Confirm Password'}
          placeholder={'Confirm new password'}
          isInvalid={error.confirmPassword}
          color={'#A2A2A7'}
          style={{marginTop: 20}}
        />
      </View>
      <FullFooterButton BtnText={'Change Password'} />
      <FullFooterButton BtnText={'Cancel'} btnColor={'#01C0EF'} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default ProfileScreen;
