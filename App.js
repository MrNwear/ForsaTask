import AppContainer from 'navigation';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import HomeScreen from 'Screens/Home';

export default function App() {
  return (
    <>
    <StatusBar barStyle="light-content"/>
   <AppContainer/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
