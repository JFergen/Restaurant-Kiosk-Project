import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Background from '../components/Background';
import Header from '../components/Header';
import TableCard from '../components/TableCard';
import {theme} from '../constants/theme';
import Button from '../components/Button';
import firestore from '@react-native-firebase/firestore';

const DashboardScreen = ({navigation}) => {
  const [tables, setTables] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let waitStaff = await AsyncStorage.getItem('user');
    waitStaff = JSON.parse(waitStaff);
    firestore()
      .collection('Tables')
      .where('waitstaff', '==', waitStaff.id)
      .onSnapshot(snap => {
        const temp = [];
        snap.forEach(doc => {
          temp.push(doc.data());
        });
        setTables(temp);
      });
  };

  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <View style={{flex: 2}}>
          <Header>Tables</Header>
        </View>
        <View style={{flex: 1}}>
          <Button
            mode="contained"
            onPress={() => {
              navigation.navigate('Orders');
            }}>
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
        {tables &&
          tables.map(item => (
            <TableCard
              key={item.tableNumber}
              number={item.tableNumber}
              showNotification={item.helpNeeded}
            />
          ))}
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
