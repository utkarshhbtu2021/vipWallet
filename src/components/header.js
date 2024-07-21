import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {LoginScreenImg} from '../asserts/images/image';

export default function Header({
  title,
  navigation,
  onSelect,
  addStyle,
  headerRight = () => null,
}) {
  return (
    <View style={styles.headerView}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.onpress}>
          <Image source={LoginScreenImg.arrow} style={styles.arrowStyle} />
        </TouchableOpacity>
        <Text style={[styles.title, addStyle]}>{title}</Text>
      </View>
      {headerRight()}
    </View>
  );
}

const styles = StyleSheet.create({
  arrowStyle: {
    height: 20,
    width: 20,
    alignSelf: 'center',
    marginTop: 8,
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 21,
    color: '#1E222B',
  },
  backIcon: {
    alignSelf: 'center',
    fontSize: 20,
    marginTop: 5,
    color: '#1E222B',
  },
  onpress: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F8F9FB',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerView: {
    height: 40,
    marginTop: 18,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
