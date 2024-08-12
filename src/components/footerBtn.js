import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

export default function FooterButtons({
  leftBtnText,
  rightBtnText,
  onLeftBtnPress,
  onRightBtnPress,
  externalStyles,
  isDisabled,
  isDisabledLeft,
  externalrightBtnContainerStyle,
}) {
  return (
    <View style={{backgroundColor: '#fff'}}>
      <View style={[styles.buttonSection, externalStyles]}>
        <TouchableOpacity
          style={styles.leftBtnContainer}
          disabled={isDisabledLeft}
          onPress={() => onLeftBtnPress()}>
          <Text style={styles.leftBtnText}>{leftBtnText}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.rightBtnContainer, externalrightBtnContainerStyle]}
          disabled={isDisabled}
          onPress={() => onRightBtnPress()}>
          <Text style={styles.rightBtnText}>{rightBtnText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonSection: {
    height: 68,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftBtnContainer: {
    backgroundColor: '#5894F7',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#5894F7',
    height: 40,
    width: '47%',
  },
  rightBtnContainer: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#5894F7',
    height: 40,
    width: '47%',
  },
  leftBtnText: {
    fontSize: 13,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  rightBtnText: {
    fontSize: 13,
    color: '#5894F7',
    fontWeight: '500',
  },
});
