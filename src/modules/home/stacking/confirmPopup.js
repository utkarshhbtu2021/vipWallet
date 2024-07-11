import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FullFooterButton from '../../../components/FullFooterButton';

const ConfirmPopup = ({refRBSheet}) => {
  return (
    <View style={{paddingHorizontal: 22, justifyContent: 'flex-end', flex: 1}}>
      <View>
        <Text
          style={{
            fontFamily: 'Poppins',
            fontSize: 17,
            fontWeight: '500',
            color: '#1E1E2D',
            marginBottom: 20,
            alignSelf:'center'
          }}
          numberOfLines={2}
          adjustsFontSizeToFit={true}>
          Are you sure want to stake currency?
        </Text>
      </View>
      <FullFooterButton BtnText={'Register'} />
      <TouchableOpacity onPress={() => refRBSheet.current.close()}>
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConfirmPopup;

const styles = StyleSheet.create({
  cancelText: {
    color: '#1E90FF',
    textAlign: 'center',
    marginTop: 2,
    paddingBottom: 15,
  },
});
