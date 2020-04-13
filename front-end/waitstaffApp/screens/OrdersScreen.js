import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Background from '../components/Background';
import {theme} from '../constants/theme';
import Dot from '../components/Dot';
import Header from '../components/Header';
import OrderCard from '../components/OrderCard';

const OrdersScreen = () => {
  return (
    <ScrollView contentContainerStyle={{flex: 1, backgroundColor: theme.colors.background}}>
      <View style={{backgroundColor: 'white', width: '100%', paddingLeft: 30, paddingRight: 30}}>
        <OrderCard number={1} color="green" />
        <OrderCard number={2} color="red" />
        <OrderCard number={3} />
        <OrderCard number={4} />
        <OrderCard number={5} />
      </View>
    </ScrollView>
  );
};

export default OrdersScreen;
