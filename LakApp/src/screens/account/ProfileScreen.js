import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header, Text } from 'react-native-elements';
import { View, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import CategoryCard from '../../component/CategoryCard';
import { FlatGrid } from 'react-native-super-grid';
import Icon from "react-native-vector-icons/Ionicons";

var primaryColor = '#7D86F5';


function ProfileScreen({ navigation }) {

    const [textName, setTextName] = React.useState("Kamal Perera");
    const [email, setEmail] = React.useState("kamal12@gmail.com");
    const [mobile, setMobile] = React.useState("0765434213");
    const [enable, setEnable] = React.useState(false);
    const [address, setAddress] = React.useState("No 21/10, Kaluwella Road, Galle");

    return (
        <SafeAreaProvider>
            <Header
                placement="left"
                backgroundColor="#7D86F5"
                leftComponent={{ icon: 'arrow-back', color: '#fff', size: 30 }}
                centerComponent={{ text: 'My Profile ', style: { color: '#fff', fontSize: 22 } }}
            />
            <ScrollView>
                <View style={styles.body}>
                    <Text>Profile Information</Text>
                    <Icon name="person-circle" style={{ textAlign: 'center' }} color={primaryColor} size={180}></Icon>
                    <View style={styles.input}>
                        <Text style={{ marginLeft: 8, marginBottom: 5, marginTop: -20 }}>Name:</Text>
                        <TextInput
                            editable={enable}
                            onChangeText={setTextName}
                            value={textName}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.input}>
                        <Text style={{ marginLeft: 8, marginBottom: 5 }}>Email:</Text>
                        <TextInput
                            editable={enable}
                            onChangeText={setEmail}
                            value={email}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.input}>
                        <Text style={{ marginLeft: 8, marginBottom: 5 }}>Phone no:</Text>
                        <TextInput
                            editable={enable}
                            onChangeText={setMobile}
                            value={mobile}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.input}>
                        <Text style={{ marginLeft: 8, marginBottom: 5 }}>Address:</Text>
                        <TextInput
                            editable={enable}
                            multiline
                            numberOfLines={3}
                            onChangeText={setAddress}
                            value={address}
                            style={{
                                borderColor: 'gray',
                                borderWidth: 1,
                                borderRadius: 5,
                                backgroundColor: '#fff'
                            }}
                        />
                    </View>

                    {
                        enable ? (
                            <TouchableOpacity style={styles.button}
                                onPress={() => { setEnable(false) }}>
                                <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold", marginTop: 5 }}>Save Changes</Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity style={styles.button}
                                onPress={() => { setEnable(true) }}>
                                <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold", marginTop: 5 }}>Edit Profile</Text>
                            </TouchableOpacity>
                        )
                    }

                    {
                        enable && (
                            <TouchableOpacity style={[styles.button, { backgroundColor: '#fff', borderColor: 'grey', borderWidth: 1 }]}
                                onPress={() => { setEnable(false) }}>
                                <Text style={{ color: { primaryColor }, fontSize: 20, fontWeight: "bold", marginTop: 5 }}>Cancel</Text>
                            </TouchableOpacity>
                        )
                    }
                </View>
            </ScrollView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    body: {
        marginHorizontal: 16,
        marginVertical: 8
    },
    button: {
        marginTop: 15,
        backgroundColor: '#7D86F5',
        textAlign: "center",
        height: 40,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        alignItems: "center"
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
    body: {
        flexDirection: "column",
        marginHorizontal: 16,
        marginVertical: 8,
    },
    input: {
        marginHorizontal: 8,
        marginVertical: 5
    },
    textInput: {
        height: 40,
        backgroundColor: "#fff",
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5
    },
});

export default ProfileScreen;