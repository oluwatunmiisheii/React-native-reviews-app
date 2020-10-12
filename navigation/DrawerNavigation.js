
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { HomeStackNavigator, AboutStackNavigator } from "./StackNavigator";


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen
        name="About"
        component={AboutStackNavigator}
        options={{ drawerLabel: 'About' }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;