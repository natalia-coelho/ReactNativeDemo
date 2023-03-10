import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ContadorButton from './ContadorButton';
import './i18n';
import { useTranslation } from 'react-i18next';

export default function App() {
  return (
    <View style={styles.container}>
      <ContadorButton/>
    </View>
  );  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#587792',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30
  }
});
