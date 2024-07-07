import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import { DashboardScreenImg } from '../../asserts/images/image';


export default function BottomNav() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Image source={DashboardScreenImg.HomeButton} style={styles.icon} />
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={DashboardScreenImg.StackingButton} style={styles.icon} />
        <Text style={styles.buttonText}>Block Matching</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={DashboardScreenImg.StackingButton} style={styles.icon} />
        <Text style={styles.buttonText}>Stacking</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 74,
    backgroundColor: '#F4F4F4',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: 'Montserrat',
    color: '#0C0C0C',
    fontWeight: '500',
  },
});
