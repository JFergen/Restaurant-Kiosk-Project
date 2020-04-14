import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {getMenu} from '../../menu_operations';
import styles from './styles';
import MainContainer from '../main_container/main_container';

class Loading extends Component {
  constructor(props){
    super(props);
    this.state = { 
        entrees: [],
        beverages: [],
        desserts: [],
        appetizers: []
    }
  }

  componentDidMount() {
    this.getData();
  }

  // componentDidUpdate() {
  //   this.getData();
  // }
  
 getData = async () => {
    let newEntrees = await getMenu('entree');
    let newBeverages = await getMenu('beverage');
    let newDesserts = await getMenu('dessert');
    let newAppetizers = await getMenu('appetizer');
    
    this.setState({
      entrees: newEntrees,
      beverages: newBeverages,
      desserts: newDesserts,
      appetizers: newAppetizers
    })

    console.log(this.state.entrees);
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
    //view = this.renderApp();

    return (
      view    
    );
  }
}

export default Loading;