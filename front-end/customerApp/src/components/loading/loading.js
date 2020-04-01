import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {getEntrees, getBeverages, getDesserts} from '../../menu_operations';
import styles from './styles';
import MainContainer from '../main_container/main_container';

class Loading extends Component {
  constructor(props){
    super(props);
    this.state = { 
        entrees: [],
        beverages: [],
        desserts: []
    }
  }

  componentDidMount() {
    this.getData();
  }
  
  getData = async () => {
    let newEntrees = await getEntrees();
    let newBeverages = await getBeverages();
    let newDesserts = await getDesserts();
    
    this.setState({
      entrees: newEntrees,
      beverages: newBeverages,
      desserts: newDesserts
    })
  }

  // Add loading until all data is retreived
  renderApp = () => {
    return (
      <MainContainer
        navigation = {this.props.navigation}
        entrees = {this.state.entrees} 
        beverages = {this.state.beverages} 
        desserts = {this.state.desserts}
      />
    )
  }

  renderLoading = () => {
    return (
      <View style = {styles.loadingTextView}>
        <Text style = {styles.loadingText}>Loading...</Text>
      </View>
    )
  }

  render() {
    let view;

    if (this.state.desserts.length == 0) {
      view = this.renderLoading();
    } else {
      view = this.renderApp();
    }

    return (
      view    
    );
  }
}

export default Loading;