import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import Header from '../components/header';
import FooterButtons from '../components/footerBtn';

const ChangeEmailScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        title={'Update Email'}
        navigation={navigation}
        addStyle={styles.titleStyle}
      />
      <View style={{flex: 1, marginTop: 15}}>
        <TextInput
          style={{
            borderWidth: 0.8,
            marginHorizontal: 20,
            height: 120,
            borderRadius: 5,
            borderColor: 'grey',
          }}
          multiline
        />
      </View>
      <FooterButtons
        leftBtnText={'Submit'}
        rightBtnText={'Cancel'}
        onRightBtnPress={() => navigation.pop()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  titleStyle: {
    color: '#1E1E2D',
    fontWeight: '600',
    marginLeft: 85,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#007BFF', // You can choose any color
    marginRight: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default ChangeEmailScreen;
