import React from 'react';
import {View, Text} from 'react-native';
import Header from './Header';
import Dot from './Dot';
const OrderCard = ({order}) => {
  const {tableNumber, orderedItems, completionStatus, requests} = order;
  const color = completionStatus ? 'green' : ''
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
        <Header>Table {tableNumber}</Header>
        <Dot color={color} />
      </View>
      {orderedItems &&
        orderedItems.map((item, index) => (
          <ItemRow key={index} item={item} index={index} />
        ))}
    </View>
  );
};

export default OrderCard;

const ItemRow = ({index, item}) => (
  <View
    key={index}
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 30,
      paddingLeft: 10,
      paddingRight: 10,
      alignItems: 'center',
    }}>
    <Text style={{fontSize: 16}}>
      {index + 1}. {item.name}
    </Text>
    <Text style={{fontSize: 16, textAlign: 'right'}}>QTY:{item.quantity}</Text>
  </View>
);
