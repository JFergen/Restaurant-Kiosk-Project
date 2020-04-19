import React, {useState, useEffect, memo} from 'react';
import {View, Text, StyleSheet, Button, TextInput, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import TableCard from '../../components/TableCard';
import firestore from '@react-native-firebase/firestore';
