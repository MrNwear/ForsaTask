import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface OffersProps {}

const Offers = (props: OffersProps) => {
  return (
    <View style={styles.container}>
      <Text>Offers</Text>
    </View>
  );
};

export default Offers;

const styles = StyleSheet.create({
  container: {}
});
