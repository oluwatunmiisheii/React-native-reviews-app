import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default Header = ({ navigation }) => {
  const onPressMenu = () => {
    navigation.toggleDrawer();
  }
  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={28}
        style={styles.icon}
        onPress={onPressMenu}
      />
      {/* <View>
        <Text style={styles.headerText}>{title}</Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    letterSpacing: 1
  },
  icon: {
    // position: 'absolute',
    // left: 17,
    color: '#fff'
  }
})