import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabScreen from "./src/screens/Tab";
import AdFormScreen from "./src/screens/ads/AdFormScreen";
import SignIn from "./src/screens/account/SignIn";
import AdsImageScreen from "./src/screens/ads/AddImageScreen";
import ProfileScreen from "./src/screens/account/ProfileScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"SignIn"}>
        <Stack.Screen name="Home" component={TabScreen}></Stack.Screen>
        <Stack.Screen name="SignIn" component={SignIn}></Stack.Screen>
        <Stack.Screen name="PostAd" component={AdFormScreen}></Stack.Screen>
        <Stack.Screen name="PostImage" component={AdsImageScreen}></Stack.Screen>
        <Stack.Screen name="Profile" component={ProfileScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;