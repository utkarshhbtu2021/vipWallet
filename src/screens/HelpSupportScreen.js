import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Header from '../components/header';

const HelpSupportScreen = ({navigation}) => {
  const headerRight = () => (
    <TouchableOpacity
      onPress={() => navigation.navigate('SupportCentreScreen')}
      style={styles.button}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header
        title={'Support'}
        navigation={navigation}
        addStyle={styles.titleStyle}
        headerRight={headerRight}
      />
      <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
        <Text>You have not added any support till now</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFF'
  },
  titleStyle: {
    color: '#1E1E2D',
    fontWeight: '600',
    marginLeft: 85,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'grey', // You can choose any color
    marginRight: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default HelpSupportScreen;
