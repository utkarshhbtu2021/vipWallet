import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Header from '../components/header';
import SearchBox from '../components/searchBox';

const FiatCurrencyScreen = ({navigation}) => {
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Flat Currencies'}
        addStyle={{paddingLeft: 55, fontSize: 18, fontWeight: '500'}}
        navigation={navigation}
      />
      <View style={{paddingHorizontal: 20, marginTop: 32}}>
        <SearchBox
          search={search}
          handleSearch={setSearch}
          placeholder={'Select Language'}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default FiatCurrencyScreen;
