import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SearchBox({ search, handleSearch, placeholder, style, iconStyle }) {
  return (
    <View style={[styles.searchContainer, style]}>
      <View style={{ flex: 12, height: 36 }}>
        <TextInput
          style={{ height: "100%", fontSize: 12 }}
          placeholder={placeholder}
          placeholderTextColor="#6D7C93"
          textAlignVertical={"center"}
          value={search}
          onChange={(text) => handleSearch(text.nativeEvent.text)}
        />
      </View>
      <Ionicons style={styles.iconStyle} name={"search"} color={"#7C7D7E"} size={16} />
    </View>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#E1E4E7",
    backgroundColor: "#FFFFFF"
  },
})