import React from "react";
import { StyleSheet,Image, View,Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const MyAdCard = () => {
    return (
        <View style={styles.body}>
            <Image style={styles.img} source={{uri:"https://picsum.photos/200", width:120,height:100 }}/>
            <View style={styles.text}>
                <Text style={{fontSize:16}}>Macbook Pro 2020</Text>
                <Text>All actual images attached</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        padding:12,
        height: 125,
        flexDirection:"row",
        alignSelf: "stretch",
        backgroundColor: "#F2F2F2",
        borderRadius: 5,
        alignItems: "stretch",
        backgroundColor:"white"
    },
    text:{
        marginLeft:24
    }
});

export default MyAdCard;