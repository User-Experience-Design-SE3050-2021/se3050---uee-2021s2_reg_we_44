import React from "react";
import { View, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { Header, Text } from 'react-native-elements';
import Icon from "react-native-vector-icons/Ionicons";

const AccountScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Header
                placement="center"
                backgroundColor="#7D86F5"
                centerComponent={{ text: 'Account ', style: { color: '#fff', fontSize: 22 } }}
            />
            <View style={{ backgroundColor: "#E1E4FF" }} >
                <Text style={styles.text2}>Kamal Perera</Text>
            </View>
            <TouchableOpacity style={[styles.button, { marginBottom: 10, marginTop:10, flexDirection:"row" }]}
                onPress={() => { navigation.navigate('MyAds') }}
            >
                <Icon style={styles.icon} size={30} name="ribbon"></Icon>
                <Text style={styles.btnText}>My Ads</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { marginBottom: 10, flexDirection:"row" }]}
                onPress={() => { navigation.navigate('Home') }}
            >
                <Icon style={styles.icon} size={30} name="briefcase"></Icon>
                <Text style={styles.btnText}>My Companies</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { marginBottom: 10, flexDirection:"row" }]}
                onPress={() => { navigation.navigate('Home') }}
            >
                <Icon style={styles.icon} size={30} name="create"></Icon>
                <Text style={styles.btnText}>My Reviews</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { marginBottom: 10, flexDirection:"row" }]}
                onPress={() => { navigation.navigate('Profile') }}
            >
                <Icon style={styles.icon} size={30} name="person-circle"></Icon>
                <Text style={styles.btnText}>My Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { marginBottom: 50, flexDirection:"row" }]}
                onPress={() => { navigation.navigate('Home') }}
            >
                <Icon style={styles.icon} size={30} name="help-circle"></Icon>
                <Text style={styles.btnText}>FAQ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { marginBottom: 10, flexDirection:"row" }]}
                onPress={() => { navigation.navigate('SignIn') }}
            >
                <Icon style={styles.icon} size={30} name="power"></Icon>
                <Text style={styles.btnText}>Log out</Text>
            </TouchableOpacity>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    category: {
        flexDirection: "row",
        marginHorizontal: 16,
        marginVertical: 8,
    },
    button: {
        backgroundColor: '#7D86F5',
        textAlign: "left",
        height: 50,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    icon:{
        color:"#fff",
        paddingTop:10,
        paddingLeft: 10
    },
    text2: {
        paddingLeft: 20,
        paddingVertical: 15,
        fontSize: 16
    },
    btnText: {
        paddingTop: 10,
        paddingLeft: 20,
        textAlign: "left",
        color: "#fff",
        fontSize: 20
    },
    input: {
        marginHorizontal: 20,
        marginVertical: 5
    },
    textInput: {
        height: 40,
        backgroundColor: "#fff",
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5
    },
    text1: {
        fontSize: 18,
        marginLeft: 16,
        marginTop: 4,
    }

});

export default AccountScreen;