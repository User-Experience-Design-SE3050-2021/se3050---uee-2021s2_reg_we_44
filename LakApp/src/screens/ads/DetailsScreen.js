import * as React from 'react';
import { View, Text, TouchableOpacity, Image, Animated, Dimensions, FlatList, SafeAreaView, ScrollView, StyleSheet, } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Card, Divider, IconButton, Paragraph, Searchbar, Title } from 'react-native-paper';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import { FlatGrid } from 'react-native-super-grid';
import { Header, Button, Icon } from 'react-native-elements';
import { SliderBox } from "react-native-image-slider-box";

var primaryColor = '#7D86F5'
var lightColor = '#887AFE'

function DetailScreen({route,navigation}) {
    var images = [ ];
    const {item} = route.params;
    images.push(item.uri)
    return (
        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            <Header
                placement="left"
                backgroundColor="#7D86F5"
                leftComponent={{ icon: 'arrow-back', color: '#fff', size: 30 }}
                centerComponent={{ text: 'Details ', style: { color: '#fff', fontSize: 22 } }}
                rightComponent={{ icon: 'share', color: '#fff', size: 30 }}
            />

            <ScrollView>
                <SliderBox images={images} dotColor="#FFEE58" />
                <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start', padding: 20 }}>
                    <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20 }}>{item.name}</Text>
                    <Text style={{ color: 'grey', fontSize: 12 }}>Publish on 29 Aug 8: 27 AM</Text>
                    <Text style={{ color: 'grey', fontSize: 12, paddingBottom: 10 }}>{item.address}</Text>
                    <Divider orientation="horizontal" width={360} style={{ color: 'grey', borderWidth: 0.5, marginBottom: 10 }} />
                    <Text style={{ fontWeight: 'bold', color: primaryColor, fontSize: 18 }}>{item.price}</Text>
                    <Text style={{ color: 'grey', fontSize: 12, marginBottom: 10 }}>Publish on 29 Aug 8: 27 AM</Text>
                    <Divider orientation="horizontal" width={360} style={{ color: {primaryColor}, borderWidth: 0.5, marginBottom: 10 }} />
                    <View>
                        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15 }}>Description</Text>
                        <Text style={{ color: 'grey', fontSize: 14, height: 220 }}>This is a Description.This is a Description.This is a Description.This is a Description.
                            {item.description}
                        </Text>
                    </View>
                    <Divider orientation="horizontal" width={360} style={{ borderWidth: 0.2, marginTop: 10 }} />
                    <View style={{
                        width: '100%',
                        flex: 1,
                        padding: 10,
                        flexDirection: "row",
                        marginBottom: -20,
                        justifyContent: 'space-between'
                    }}>
                        <TouchableOpacity style={[styles.button,{marginRight:15,marginLeft:-5}]}
                            onPress={() => {}}>
                            <Icon
                                    name="call"
                                    size={20}
                                    color='white'
                                />    
                            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold"}}>
                               {' '} Call</Text>
                        </TouchableOpacity>              
                        <TouchableOpacity style={styles.button}
                            onPress={() => navigation.navigate('PostImage')}>
                            <Icon
                                    name="chat"
                                    size={20}
                                    color='white'
                                />
                            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
                            {' '} Chat</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    button: {
        backgroundColor: '#7D86F5',
        textAlign: "center",
        flexDirection: "row",
        height: 40,
        paddingLeft: 50,
        paddingRight: 50,
        borderRadius: 10,
        alignItems: "center"
    },
    hr: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        height: 1,
        backgroundColor: "#8C8B8B",
        marginLeft: 28,
        borderWidth: 1
    }
});

export default DetailScreen;