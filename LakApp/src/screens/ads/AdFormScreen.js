import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header, Text } from 'react-native-elements';
import { View, StyleSheet, TextInput,TouchableOpacity, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

var primaryColor = '#7D86F5'

function AdFormScreen({ route,navigation}) {
    const { icon, text, title } = route.params;
    return (
        <SafeAreaProvider>
            <Header
                placement="left"
                backgroundColor="#7D86F5"
                leftComponent={{ icon: 'arrow-back', color: '#fff', size: 30 }}
                centerComponent={{ text: 'Post an Ad ', style: { color: '#fff', fontSize: 22 } }}
            />
            <ScrollView>
            <View style={styles.category}>
                <Icon name={icon} color={primaryColor} size={32} />
                <Text style={styles.text1}>{title}</Text>
            </View>
            <View style={{ backgroundColor: "#E1E4FF" }} >
                <Text style={styles.text2}>{text}</Text>
            </View>
            <View style={styles.input}>
                <Text style={{ marginLeft: 8, marginBottom: 5 }}>Title</Text>
                <TextInput
                    placeholder="Enter an ad title"
                    style={styles.textInput}
                />
            </View>
            <View style={styles.input}>
                <Text style={{ marginLeft: 8, marginBottom: 5 }}>Description</Text>
                <TextInput
                    multiline
                    numberOfLines={5}
                    placeholder="Enter a description"
                    style={{
                        borderColor: 'gray',
                        borderWidth: 1,
                        borderRadius: 5,
                        backgroundColor:"#fff",
                        textAlignVertical: 'top'
                    }}
                />
            </View>
            <View style={styles.input}>
                <Text style={{ marginLeft: 8, marginBottom: 5 }}>Location</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{marginLeft:8, marginTop:4}}>{"Galle -> Hapugala"}</Text>
                    <Icon name="location" color={primaryColor} size={30}></Icon>
                </View>
            </View>
            <View style={styles.input}>
                <Text style={{ marginLeft: 8, marginBottom: 5 }}>Price</Text>
                <TextInput
                    placeholder="Enter an amount"
                    keyboardType="numeric"
                    style={styles.textInput}
                />
            </View>
            <View style={styles.input}>
                <Text style={{ marginLeft: 8, marginBottom: 5 }}>Contact Name</Text>
                <TextInput
                 placeholder="Enter a contact name"
                    style={styles.textInput}
                />
            </View>
            <View style={styles.input}>
                <Text style={{ marginLeft: 8, marginBottom: 5 }}>Contact No</Text>
                <TextInput
                 placeholder="Enter a contact no"
                    style={styles.textInput}
                    keyboardType="number-pad"
                />
            </View>
            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('PostImage')}>
                <Text style={{ color: "#fff",fontSize:20,fontWeight: "bold",marginTop:5 }}>Next</Text>
            </TouchableOpacity>
            </ScrollView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    category: {
        flexDirection: "row",
        marginHorizontal: 16,
        marginVertical: 8,
    },
    button: {
        marginTop: 15,
        backgroundColor: '#7D86F5',
        textAlign: "center",
        height: 40,
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
        alignItems:"center"
      },
    text2: {
        paddingLeft: 20,
        paddingVertical: 15,
        fontSize:16
    },
    input: {
        marginHorizontal: 20,
        marginVertical: 5
    },
    textInput: {
        height: 40,
        backgroundColor:"#fff",
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

export default AdFormScreen;