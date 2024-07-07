import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => (
  <View style={styles.container}>
    <Text>Home Screen</Text>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Details')}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
