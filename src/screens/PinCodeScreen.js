import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PinCode from '@haskkor/react-native-pincode';

const PinCodeScreen = ({ navigation }) => {
  const [pinCode, setPinCode] = useState('');

  const handleSetPin = (code) => {
    setPinCode(code);
    // Do something with the PIN code (e.g., save it, send it to a server, etc.)
    navigation.navigate('NextScreen'); // Navigate to the next screen after setting the PIN
  };

  const handleConfirmPin = (code) => {
    if (code === pinCode) {
      // PIN code is correct
      navigation.navigate('NextScreen'); // Navigate to the next screen after confirming the PIN
    } else {
      // PIN code is incorrect
      alert('Incorrect PIN code');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set your PIN code</Text>
      <PinCode
        status="choose"
        touchIDDisabled={true}
        storePin={() => {}}
        finishProcess={handleSetPin}
      />
      {/* <Text style={styles.title}>Confirm your PIN code</Text>
      <PinCode
        status="enter"
        touchIDDisabled={true}
        finishProcess={handleConfirmPin}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor:'#FFF'
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
  },
});

export default PinCodeScreen;
