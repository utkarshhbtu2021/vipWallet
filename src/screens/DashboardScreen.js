import React, {useState, useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import HeaderNav from '../modules/home/header';
import BottomNav from '../modules/home/bottomNav';
import DashBoard from '../modules/home/dashboard';
import BlockMatching from '../modules/home/blockMatching';
import Stacking from '../modules/home/stacking';

const DashboardScreen = ({navigation}) => {
  const [heading, setHeading] = useState('Dashboard');

  const handleSetHeading = useCallback(newHeading => {
    setHeading(newHeading);
  }, []);

  const renderContent = () => {
    switch (heading) {
      case 'Block Matching Affiliate':
        return <BlockMatching />;
      case 'Staking':
        return <Stacking />;
      case 'Dashboard':
      default:
        return <DashBoard />;
    }
  };

  return (
    <View style={styles.container}>
      <HeaderNav heading={heading} />
      {renderContent()}
      <BottomNav setHeading={handleSetHeading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default React.memo(DashboardScreen);
