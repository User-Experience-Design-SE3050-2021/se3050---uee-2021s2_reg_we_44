import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabScreen from "./src/screens/Tab";
import CompanyAddForm from "./src/screens/Company/CompanyAddForm"
import CompanyView from "./src/screens/Company/CompanyView";
import MyReviewList from "./src/screens/Review/MyReviewList";
import MyCompanies from "./src/screens/Company/MyCompanies";
import CompanyUpdateForm from "./src/screens/Company/CompanyUpdateForm";
import GiveFeedbackModel from "./src/screens/Review/GiveFeedbackModel";
import AdFormScreen from "./src/screens/ads/AdFormScreen";
import SignIn from "./src/screens/account/SignIn";
import AdsImageScreen from "./src/screens/ads/AddImageScreen";
import DetailScreen from "./src/screens/ads/DetailsScreen";
import ProfileScreen from "./src/screens/account/ProfileScreen";
import MyAdsScreen from "./src/screens/ads/MyAdsScreenj";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"Home"}>
        <Stack.Screen name="Home" component={TabScreen}></Stack.Screen>
        <Stack.Screen name="SignIn" component={SignIn}></Stack.Screen>
        <Stack.Screen name="PostAd" component={AdFormScreen}></Stack.Screen>
        <Stack.Screen name="PostImage" component={AdsImageScreen}></Stack.Screen>
        <Stack.Screen name="Profile" component={ProfileScreen}></Stack.Screen>
        <Stack.Screen name="Details" component={DetailScreen}></Stack.Screen>
        <Stack.Screen name="MyAds" component={MyAdsScreen}></Stack.Screen>
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

<Stack.Screen name="feedback" component={GiveFeedbackModel}  headerShadowVisible="false" />

      </Stack.Navigator>
      
    </NavigationContainer>
  )
}

export default App;