import React from 'react';
import { View, StyleSheet } from 'react-native';
import DashBoard from '../modules/home/dashboard';
import BlockMatching from '../modules/home/blockMatching';
import Stacking from '../modules/home/stacking';

const DashboardScreen = ({ navigation, route }) => {
  const renderContent = () => {
    switch (route.name) {
      case 'Block Matching':
        return <BlockMatching />;
      case 'Staking':
        return <Stacking navigation={navigation} />;
      case 'Dashboard':
      default:
        return <DashBoard />;
    }
  };

  return <View style={styles.container}>{renderContent()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default DashboardScreen;
