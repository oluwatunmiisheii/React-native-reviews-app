import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

// screen import
import ReviewDetailsScreen from '../screens/reviewDetails';
import HomeScreen from '../screens/home';
import AboutScreen from '../screens/about';

// header import
import Header from '../shared/header'

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#753ff6',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerTitleAlign: 'center'
}

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName="Home">
      <Stack.Screen
        pageTitle="GameZone"
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: 'Home',
          headerLeft: () => (
            <Header navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetailsScreen}
      />
    </Stack.Navigator>
  );
}

const AboutStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={({ navigation }) => ({
          title: 'About',
          headerLeft: () => (
            <Header navigation={navigation} />
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export { HomeStackNavigator, AboutStackNavigator };