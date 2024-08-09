import React from 'react';
import {StyleSheet, TextInput, View, Image} from 'react-native';
import {CurrenciesIcon} from '../assets/images/image';

export default function SearchBox({
  search,
  handleSearch,
  placeholder,
  style,
  iconStyle,
}) {
  return (
    <View style={[styles.searchContainer, style]}>
      <Image source={CurrenciesIcon.Search} style={{height: 20, width: 20}} />
      <View style={{flex: 12, height: 36}}>
        <TextInput
          style={styles.textStyle}
          placeholder={placeholder}
          placeholderTextColor="#6D7C93"
          textAlignVertical={'center'}
          value={search}
          onChange={text => handleSearch(text.nativeEvent.text)}
        />
      </View>
      {/* <Ionicons style={styles.iconStyle} name={"search"} color={"#7C7D7E"} size={16} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    height: '100%',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '400',
    marginTop:2
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderWidth: 1,
    height: 44,
    borderRadius: 10,
    borderColor: '#E1E4E7',
    backgroundColor: '#F4F4F4',
  },
});
