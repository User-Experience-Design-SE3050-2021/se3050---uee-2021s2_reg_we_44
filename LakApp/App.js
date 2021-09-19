import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabScreen from "./src/screens/Tab";
import PostAdCategoryScreen from "./src/screens/ads/PostAdCategory";
import CompanyAddForm from "./src/screens/Company/CompanyAddForm"

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"Home"}>
        <Stack.Screen name="Home" component={TabScreen}></Stack.Screen>
        <Stack.Screen
          options={{
            title: 'vdvd',
            headerStyle: {
              backgroundColor: '#5956E9',
              elevation: 0,
              shadowOpacity: 0,

            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: '700',
              fontSize: 20,
              headerShadowVisible: false,
              textAlign: "left",
              fontFamily: "Raleway-Bold"
            },
          }}
          name="CompanyAddForm" component={CompanyAddForm} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;