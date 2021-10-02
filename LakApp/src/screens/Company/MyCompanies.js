/* eslint-disable */
import React, { useState } from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button } from 'react-native-paper';
import {
  View,Text
} from 'react-native';

import TopNav from '../Review/TopNav'

  
const MyCompanies = ({ navigation }) => {


    return (
        <SafeAreaProvider >
            <TopNav navigation={navigation} Navtitle={"My Companies"} NavBarColor="#5956E9" NavBarFontColor="black" />

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                <Button style={{ marginTop: 150, width: 200 }} icon="" mode="contained" onPress={() => navigation.navigate('CompanyUpdateForm')}>
                    Edit Button
                </Button>
            </View>
        </SafeAreaProvider>

    )
};

export default MyCompanies;