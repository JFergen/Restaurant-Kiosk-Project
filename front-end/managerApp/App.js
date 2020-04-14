import Background from './assets/background.jpeg';
import React from 'react';
import {Button} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/HomeScreen';
import Login from './screens/Login';
import EmployeeManagement from './screens/employees/EmployeeManagement';
import Inventory from './screens/inventory/InventoryManagement';
import ViewInventory from './screens/inventory/viewInventory';
import EditInventory from './screens/inventory/editInventory';
import VendorGuide from './screens/inventory/vendorGuide';
import NewEmployee from './screens/employees/newEmployee';
import EditMenu from './screens/menu/editMenu';
import ViewMenu from './screens/menu/viewMenu';
import MenuManagement from './screens/menu/MenuManagement';
import ApproveTimes from './screens/approveTimes/approveTimes';
import ManageTips from './screens/manageTips/manageTips';
import MetricsManagement from './screens/metrics/metricsManagement';
import CompMeals from './screens/metrics/compMeals';
import MetricsPage from './screens/metrics/MetricsPage';
import TotalOrders from './screens/metrics/totalOrders';

const Stack = createStackNavigator();

export function NavStack({ navigation }) {
  return (
     <Stack.Navigator initialRouteName="Login">

      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: 'Login', headerStyle: {height: 70},
                                   headerTitleAlign: 'center'}}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Home' , headerStyle: {height: 70},
                                   headerTitleAlign: 'center'}}

      />
      <Stack.Screen
       name="EmployeeManagement"
       component={EmployeeManagement}
       options={{ title: 'EmployeeManagement' , headerStyle: {height: 70},
                                                headerTitleAlign: 'center'}}
      />
      <Stack.Screen
       name="Inventory"
       component={Inventory}
       options={{ title: 'Inventory' , headerStyle: {height: 70},
                                       headerTitleAlign: 'center'}}
      />

      <Stack.Screen
        name="ViewInventory"
        component={ViewInventory}
        options={{ title: 'View Current Inventory' , headerStyle: {height: 70},
                                                     headerTitleAlign: 'center'}}
      />

      <Stack.Screen
        name="EditInventory"
        component={EditInventory}
        options={{ title: 'Add/Edit Inventory' , headerStyle: {height: 70},
                                                 headerTitleAlign: 'center'}}
      />

      <Stack.Screen
        name="VendorGuide"
        component={VendorGuide}
        options={{ title: 'Vendor Resupply Guide' , headerStyle: {height: 70},
                                                    headerTitleAlign: 'center'}}
      />

      <Stack.Screen
        name="NewEmployee"
        component={NewEmployee}
        options={{ title: 'Add New Employee Form' , headerStyle: {height: 70},
                                                    headerTitleAlign: 'center'}}
      />

      <Stack.Screen
        name="MenuManagement"
        component={MenuManagement}
        options={{ title: 'Menu Management' , headerStyle: {height: 70},
                                              headerTitleAlign: 'center'}}
      />

      <Stack.Screen
        name="ViewMenu"
        component={ViewMenu}
        options={{ title: 'View Menu' , headerStyle: {height: 70},
                                        headerTitleAlign: 'center'}}
      />

      <Stack.Screen
        name="EditMenu"
        component={EditMenu}
        options={{ title: 'Edit Menu' , headerStyle: {height: 70},
                                        headerTitleAlign: 'center'}}
      />

      <Stack.Screen
        name="ApproveTimes"
        component={ApproveTimes}
        options={{ title: 'Approve Times' , headerStyle: {height: 70},
                                            headerTitleAlign: 'center'}}
      />

      <Stack.Screen
        name="ManageTips"
        component={ManageTips}
        options={{ title: 'Manage Tips' , headerStyle: {height: 70},
                                          headerTitleAlign: 'center'}}
      />

      <Stack.Screen
        name="CompMeals"
        component={CompMeals}
        options={{ title: 'Compensated Meals' , headerStyle: {height: 70},
                                                headerTitleAlign: 'center'}}
      />

      <Stack.Screen
        name="MetricsPage"
        component={MetricsPage}
        options={{ title: 'Restaurant Metrics' , headerStyle: {height: 70},
                                                 headerTitleAlign: 'center'}}
      />

      <Stack.Screen
        name="MetricsManagement"
        component={MetricsManagement}
        options={{ title: 'Metrics' , headerStyle: {height: 70},
                                      headerTitleAlign: 'center'}}
      />

    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
}