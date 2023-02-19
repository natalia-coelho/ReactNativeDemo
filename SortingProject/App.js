import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SortButton from './SortButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}> Entre com o intervalo: </Text>
      <SortButton/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  mainText: {
    fontSize: 20
  },
  first: {
    fontSize: 10
  },
  second: {
    fontSize: 20
  } 
});
