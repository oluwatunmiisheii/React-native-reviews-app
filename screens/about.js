import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default function About() {
  return (
    <View styles={styles.container}>
      <Text>About Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  }
});

