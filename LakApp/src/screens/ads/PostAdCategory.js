import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header, Text } from 'react-native-elements';
import { View, StyleSheet, Pressable } from 'react-native';
import CategoryCard from '../../component/CategoryCard';
import { FlatGrid } from 'react-native-super-grid';
import Icon from "react-native-vector-icons/Ionicons";

let data = [
    {
        icon: "car",
        title:"Vehicle",
        text: "Car"
    },
    {
        icon: "bicycle",
        title:"Vehicle",
        text: "Bicycle"
    },
    {
        icon: "phone-portrait-outline",
        title:"Electronic",
        text: "Mobile Phone"
    },
    {
        icon: "home",
        title: "Property",
        text: "Property"
    },
    {
        icon: "shirt",
        title: "Fashion & Beauty",
        text: "Fashion"
    },
    {
        icon: "american-football",
        title: "Hobby, Sport & Kids",
        text: "Sports"
    },
]

function PostCategoryScreen({navigation}) {
    return (
        <SafeAreaProvider>
            <Header
                placement="center"
                backgroundColor="#7D86F5"
                centerComponent={{ text: 'Post an Ad ', style: { color: '#fff', fontSize: 22 } }}
            />
            <View style={styles.body}>
                <Text style={{ fontSize: 16, fontWeight: "400" }}>Welcome Kamal Perera!</Text>
                <Text>Choose and option bellow to post an ad</Text>

                <FlatGrid
                    itemDimension={80}
                    data={data}
                    style={styles.gridView}
                    renderItem={({ item }) => (<Pressable onPress={()=>{navigation.navigate('PostAd',{icon:item.icon, text:item.text, title:item.title})}}><CategoryCard icon={item.icon} text={item.text} /></Pressable>)}
                />

                <View style={styles.box}>
                    <Text>Sell in other categories</Text>
                    <Icon name="chevron-forward" size={18} />
                </View>
                <View style={styles.box}>
                    <Text>Looking for something else</Text>
                    <Icon name="chevron-down" size={18} />
                </View>
            </View>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    body: {
        marginHorizontal: 16,
        marginVertical: 8
    },
    box: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 36,
        paddingLeft: 8,
        paddingRight: 8,
        backgroundColor: "#F2F2F2",
        marginBottom: 12,
        borderWidth: 0.5,
        borderColor: "#8C8B8B",
    },
    category: {
        flexDirection: "row",
        justifyContent: "space-between",
    }
});

export default PostCategoryScreen;