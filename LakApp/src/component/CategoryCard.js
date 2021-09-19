import React from "react";
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const CategoryCard = ({ icon, text }) => {
    return (
        <View style={styles.body}>
            <Icon style={{ marginTop: 10, color: "#7D86F5" }} name={icon} size={30} />
            <Text>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        height: 85,
        width: 110,
        backgroundColor: "#fff",
        borderRadius: 10,
        alignItems: "center"
    }
});

export default CategoryCard;