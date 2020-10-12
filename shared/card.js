import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = ({ children }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowColor: '#3333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    shadowOffset: {
      width: 1,
      height: 1
    }
  },
  cardContent: {
    paddingHorizontal: 18,
    paddingVertical: 10
  }
})

export default Card;