import React from 'react';
import {View, Text} from 'react-native';
import Header from './Header';
import Dot from './Dot';
const OrderCard = ({number, color}) => {
  return (
    <View style={{marginTop: 20}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 50,          
          paddingLeft: 10,
          paddingRight: 10,
          alignItems: 'center',
        }}>
        <Header>Table {number}</Header>
        <Dot color={color} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 30,          
          paddingLeft: 10,
          paddingRight: 10,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 16}}>1. Order List</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 30,          
          paddingLeft: 10,
          paddingRight: 10,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 16}}>2. Order List</Text>
      </View>
    </View>
  );
};

export default OrderCard;
