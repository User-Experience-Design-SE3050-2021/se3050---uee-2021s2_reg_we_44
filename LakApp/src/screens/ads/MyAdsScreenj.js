import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header, Text } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import MyAdCard from '../../component/MyAdCard';

let data = [
    {
        icon: "car",
        text: "Car"
    },
    {
        icon: "bicycle",
        text: "Bicycle"
    },
    {
        icon: "phone-portrait-outline",
        text: "Mobile Phone"
    },
    {
        icon: "home",
        text: "Property"
    },
    {
        icon: "shirt",
        text: "Fashion"
    },
    {
        icon: "american-football",
        text: "Sports"
    },
]

function MyAdsScreen() {
    return (
        <SafeAreaProvider>
            <Header
                placement="left"
                backgroundColor="#7D86F5"
                leftComponent={{ icon: 'arrow-back', color: '#fff', size: 30 }}
                centerComponent={{ text: 'My Ads', style: { color: '#fff', fontSize: 22 } }}
            />
            <View style={styles.body}>
                <Text style={{ fontSize: 16, fontWeight: "400" }}>Ads you have posted</Text>           
            </View>
            <FlatGrid
                    scrollEnabled={true}
                    itemDimension={200}
                    data={[1, 2, 3, 4, 5, 6, 7]}
                    renderItem={({ item }) => (
                        <MyAdCard />)}
                />
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    body: {
        marginHorizontal: 16,
        marginVertical: 8,
    },

});

export default MyAdsScreen;