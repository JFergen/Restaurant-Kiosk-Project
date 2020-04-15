import React, {useState, useEffect, memo} from 'react';
import {View, Text, StyleSheet, Button, TextInput, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import TableCard from '../../components/TableCard';
import firestore from '@react-native-firebase/firestore';

const MetricsPage = ({navigation}) => {
const [revenue, setRevenue] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let revenue = await AsyncStorage.getItem('MonthlyRevenue');
    revenue = JSON.parse(revenue);
    firestore()
      .collection('MonthlyRevenue')
      .where('revenue', '==', revenue)
      .get()
      .then(snap => {
        let temp = [];
        console.log('revenue', snap.size);
        snap.forEach(doc => {
          temp.push(doc.data());
        });
        console.log(temp);
        setOrders(temp);
      })
      .catch(err => console.warn(err.message));
  };
  return (
    <ScrollView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          backgroundColor: 'white',
          width: '100%',
          paddingLeft: 30,
          paddingRight: 30,
        }}>
        {revenue &&
          revenue.map((revenue, indx) => <View key={indx} revenue={revenue} />)}
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 12,
    paddingRight: 12,
  },
});

export default MetricsPage;