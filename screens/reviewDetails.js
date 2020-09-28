import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from './../styles/global';

export default function ReviewDetails() {
  return (
    <View styles={globalStyles.container}>
      <Text>Review ReviewDetails Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  }
});

