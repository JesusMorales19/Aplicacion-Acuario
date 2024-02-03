import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SoporteScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Soporte Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SoporteScreen;
