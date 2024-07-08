import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

export default function FullFooterButton({
  BtnText,
  onBtnPress,
  backgroundColor = '#FFF',
}) {
  return (
    <View style={{backgroundColor: backgroundColor}}>
      <View style={styles.buttonSection}>
        <TouchableOpacity
          style={styles.rightBtnContainer}
          onPress={() => onBtnPress()}>
          <Text style={styles.rightBtnText}>{BtnText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonSection: {
    height: 65,
    paddingHorizontal: 12.94,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightBtnContainer: {
    backgroundColor: 'rgba(0, 102, 255, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#0D68FF',
    height: 45,
    width: '100%',
  },
  rightBtnText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    fontWeight: '600',
  },
});
