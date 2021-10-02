import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabScreen from "./src/screens/Tab";
import PostAdCategoryScreen from "./src/screens/ads/PostAdCategory";
import CompanyAddForm from "./src/screens/Company/CompanyAddForm"
import CompanyView from "./src/screens/Company/CompanyView";
import MyReviewList from "./src/screens/Review/MyReviewList";
import MyCompanies from "./src/screens/Company/MyCompanies";
import CompanyUpdateForm from "./src/screens/Company/CompanyUpdateForm";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"Home"}>
        <Stack.Screen name="Home" component={TabScreen}></Stack.Screen>
        <Stack.Screen
          options={{
            title: 'Company Add',
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


<Stack.Screen
      options={{
      title: 'Burger Palace "Colombo 03"',
      headerStyle: {
      backgroundColor: '#F6F6F9',
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

      name="CompanyView" component={CompanyView} />



<Stack.Screen
      options={{
      title: 'My Reviews',
      headerStyle: {
      backgroundColor: '#F6F6F9',
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

      name="MyReviewList" component={MyReviewList} />

<Stack.Screen
      options={{
      title: 'My Companies',
      headerStyle: {
      backgroundColor: '#F6F6F9',
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

      name="MyCompanies" component={MyCompanies} />

<Stack.Screen
      options={{
      title: 'CompanyUpdateForm',
      headerStyle: {
      backgroundColor: '#F6F6F9',
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

      name="CompanyUpdateForm" component={CompanyUpdateForm} />

      </Stack.Navigator>
      
    </NavigationContainer>
  )
}

export default App;