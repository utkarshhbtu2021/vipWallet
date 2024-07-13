import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import Header from '../components/header';
import SearchBox from '../components/searchBox';
import {CurrenciesIcon} from '../asserts/images/image';

const FiatCurrencyScreen = ({navigation}) => {
  const [search, setSearch] = useState('');

  const countries = [
    {name: 'English', image: CurrenciesIcon.English},
    {name: 'Australia', image: CurrenciesIcon.Australia},
    {name: 'Franch', image: CurrenciesIcon.Franch},
    {name: 'Spanish', image: CurrenciesIcon.Spanish},
    {name: 'America', image: CurrenciesIcon.America},
    {name: 'Vietnam', image: CurrenciesIcon.Vietnam},
  ];

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Fiat Currencies'}
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
      <FlatList
        data={countries}
        renderItem={renderItem}
        keyExtractor={item => item.name}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  listContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop:22,
    paddingVertical: 10,
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  itemText: {
    fontSize: 16,
    fontFamily:'Poppins',
    fontWeight:'500',
    color:'#1E1E2D'
  },
});

export default FiatCurrencyScreen;
