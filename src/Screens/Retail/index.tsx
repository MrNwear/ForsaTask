import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface RetailProps {}

const Retail = (props: RetailProps) => {
  return (
    <View style={styles.container}>
      <Text>Retail</Text>
    </View>
  );
};

export default Retail;

const styles = StyleSheet.create({
  container: {}
});
