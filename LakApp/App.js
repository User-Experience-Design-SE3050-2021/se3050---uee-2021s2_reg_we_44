import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabScreen from "./src/screens/Tab";
import SignUp from "./src/screens/account/SignUp";
import SignIn from "./src/screens/account/SignIn";


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"SignIn"}>
        <Stack.Screen name="Home" component={TabScreen}></Stack.Screen>
        <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
        <Stack.Screen name="SignIn" component={SignIn}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;