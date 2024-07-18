import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import Modal from 'react-native-modal'
import { Button } from 'native-base'

const CustomDialog = ({
  cancelButtonText = 'Cancel',
  onClose,
  okButtonText = 'OK',
  handleOK,
  open,
  content,
  headerIcon,
  title,
  headerTextStyle,
  headerContainerStyle,
  contentContainerStyle,
  okButtonStyle,
  okButtonTextColor,
  cancelButtonStyle,
  cancelButtonTextColor,
}) => {
  return (
    <Modal isVisible={open} onBackdropPress={onClose} useNativeDriver>
      <View style={styles.modalContainer}>
        <View style={[styles.headerContainer, headerContainerStyle]}>
          {headerIcon && <Image style={styles.headerIcon} source={headerIcon} />}
          <Text style={[styles.headerText, headerTextStyle]}>{title}</Text>
        </View>
        <View style={[styles.contentContainer, contentContainerStyle]}>
          <Text style={{ color: '#1D2D56', fontSize: 13 }}>{content}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={onClose}
            style={[styles.cancelButton, cancelButtonStyle]}
            _text={{ color: cancelButtonTextColor || '#1D2D56' }}>
            {cancelButtonText}
          </Button>
          <Button
            onPress={handleOK}
            style={[styles.okButton, okButtonStyle]}
            _text={{ color: okButtonTextColor || '#FFF' }}>
            {okButtonText}
          </Button>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    borderRadius: 8,
    padding: 17,
    paddingTop: 14,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: '#ECECEC',
    paddingBottom: 10,
  },
  headerIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  headerText: {
    fontSize: 15,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#1D2D56',
    marginBottom: 3,
  },
  contentContainer: {
    marginTop: 16,
    marginBottom: 18,
    color: '#1D2D56',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    width: '48%',
    borderColor: '#E6E6E6',
    backgroundColor: '#F0F0F0',
    borderWidth: 1,
  },
  okButton: {
    width: '48%',
    backgroundColor: '#F53649',
  },
})

export default CustomDialog
