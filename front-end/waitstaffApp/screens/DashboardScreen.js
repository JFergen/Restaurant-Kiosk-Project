import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Background from '../components/Background';
import Header from '../components/Header';
import TableCard from '../components/TableCard';
import {theme} from '../constants/theme';
import Button from '../components/Button';

const DashboardScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <View style={{flex: 2}}>
          <Header>Tables</Header>
        </View>
        <View style={{flex: 1}}>
          <Button mode="contained" onPress={() => {navigation.navigate('Orders')}}>
            Orders
          </Button>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        <TableCard number={1} />
        <TableCard number={2} />
        <TableCard number={3} showNotification={true} />
        <TableCard number={4} />
        <TableCard number={5} showNotification={true} />
      </View>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: theme.colors.background,
  },
});
