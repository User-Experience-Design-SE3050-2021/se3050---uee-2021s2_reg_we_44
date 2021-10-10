import * as React from 'react';
import { View, Text, Image, Animated, Dimensions, FlatList, SafeAreaView, ScrollView, StyleSheet, Pressable, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, IconButton, Searchbar } from 'react-native-paper';
import { FlatGrid } from 'react-native-super-grid';
import { Header } from 'react-native-elements';

var cardData = [{
    name: 'Toyota CHR',
    address: 'Galle, Galle',
    description:"2018 registered, First user. Permit vehicle used by an engineer. Toyota Lanka maintained, records available, accident free. Mint condition.,Accident-free, Untouched paint, Maintained under Max warranty, All service records available, Original catalog, JAAI inspection certificates copies available, Currently not under lease/finance",
    uri: "https://cdn.jdpower.com/JDPA_2020%20Toyota%20C-HR%20Limited%20Blue%20Front%20View.jpg",
    price: '8,500,000',
    updated: '1 week ago'
}, {
    name: 'Toyota Vitz',
    address: 'Galle, Galle',
    description:"2018 registered, First user. Permit vehicle used by an engineer. Toyota Lanka maintained, records available, accident free. Mint condition.,Accident-free, Untouched paint, Maintained under Max warranty, All service records available, Original catalog, JAAI inspection certificates copies available, Currently not under lease/finance",
    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/2008_Toyota_Vitz_02.jpg/1200px-2008_Toyota_Vitz_02.jpg",
    price: '3,500,000',
    updated: '1 week ago'
}, {
    name: 'Toyota Premio',
    address: 'Galle, Galle',
    description:"2018 registered, First user. Permit vehicle used by an engineer. Toyota Lanka maintained, records available, accident free. Mint condition.,Accident-free, Untouched paint, Maintained under Max warranty, All service records available, Original catalog, JAAI inspection certificates copies available, Currently not under lease/finance",
    uri: "https://importdirect.lk/wp-content/uploads/2020/03/20190712_162124.jpg",
    price: '9,500,000',
    updated: '1 week ago'
}, {
    name: 'Discovery Sport',
    address: 'Galle, Galle',
    description:"2018 registered, First user. Permit vehicle used by an engineer. Toyota Lanka maintained, records available, accident free. Mint condition.,Accident-free, Untouched paint, Maintained under Max warranty, All service records available, Original catalog, JAAI inspection certificates copies available, Currently not under lease/finance",
    uri: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-land-rover-discovery-r-dynamic-103-1604948700.jpg?crop=0.806xw:0.906xh;0.117xw,0.0938xh&resize=640:*",
    price: '13,500,000',
    updated: '1 week ago'
}, {
    name: 'Toyota CHR',
    address: 'Galle, Galle',
    description:"2018 registered, First user. Permit vehicle used by an engineer. Toyota Lanka maintained, records available, accident free. Mint condition.,Accident-free, Untouched paint, Maintained under Max warranty, All service records available, Original catalog, JAAI inspection certificates copies available, Currently not under lease/finance",
    uri: "https://cdn.jdpower.com/JDPA_2020%20Toyota%20C-HR%20Limited%20Blue%20Front%20View.jpg",
    price: '8,500,000',
    updated: '1 week ago'
}, {
    name: 'Toyota Vitz',
    address: 'Galle, Galle',
    description:"2018 registered, First user. Permit vehicle used by an engineer. Toyota Lanka maintained, records available, accident free. Mint condition.,Accident-free, Untouched paint, Maintained under Max warranty, All service records available, Original catalog, JAAI inspection certificates copies available, Currently not under lease/finance",
    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/2008_Toyota_Vitz_02.jpg/1200px-2008_Toyota_Vitz_02.jpg",
    price: '3,500,000',
    updated: '1 week ago'
}, {
    name: 'Toyota Premio',
    address: 'Galle, Galle',
    description:"2nd owner ngx10 2 wheel drive with boost impulse body kit black top full leather factory fitted seat set. duel multifunctions stearing tv dvd camera alloys new tyrs lane departure keyless entry with smary key. HID xenon schoop head lights. toyota lanka maintaind. accidant free first owner. orginal paint. accidant free. well maintained. ",
    uri: "https://importdirect.lk/wp-content/uploads/2020/03/20190712_162124.jpg",
    price: '9,500,000',
    updated: '1 week ago'
}, {
    name: 'Discovery Sport',
    address: 'Galle, Galle',
    description:"2nd owner ngx10 2 wheel drive with boost impulse body kit black top full leather factory fitted seat set. duel multifunctions stearing tv dvd camera alloys new tyrs lane departure keyless entry with smary key. HID xenon schoop head lights. toyota lanka maintaind. accidant free first owner. orginal paint. accidant free. well maintained. ",
    uri: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-land-rover-discovery-r-dynamic-103-1604948700.jpg?crop=0.806xw:0.906xh;0.117xw,0.0938xh&resize=640:*",
    price: '13,500,000',
    updated: '1 week ago'
}]

var primaryColor = '#7D86F5'
var lightColor = '#CFD4FF'

function HomeScreen({ navigation }) {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 80 }}>
            <SafeAreaView>

                <Header
                    placement="center"
                    backgroundColor="#7D86F5"
                    centerComponent={<View style={{ height: 35, backgroundColor: primaryColor, alignItems: "center" }}>
                        <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold', marginTop:-10 }}>LAK.LK</Text>
                        <Text style={{ fontSize: 12, color: 'white', }}>7248 results</Text>
                    </View>}
                />
                <View style={{
                    flexDirection: "row",
                    justifyContent: 'space-between',
                    backgroundColor: lightColor,
                    alignItems: 'stretch'
                    , alignItems: 'center',
                }}>
                    <Searchbar
                        style={{ margin: 10, marginLeft: 10, borderRadius: 30, height: 35, width: 320 }}
                        placeholder="Search.."
                        onChangeText={onChangeSearch}
                        inputStyle={{ fontSize: 14, }}
                        value={searchQuery}

                    />
                    <IconButton
                        style={{}}
                        icon='sort-variant'
                        color={primaryColor}
                        size={30}
                        onPress={() => console.log('Pressed')}
                    />
                </View>
                <FlatGrid
                    scrollEnabled={true}
                    itemDimension={130}
                    data={cardData}
                    renderItem={({ item }) => (
                        <Pressable onPress={() => { navigation.navigate('Details',{item:item}) }}>
                            <Card
                                style={{
                                    margin: 0,
                                    padding: 10
                                }}
                            >
                                <Card.Content style={{
                                    alignItems: 'center',
                                    borderRadius: 50,
                                    marginTop: -10
                                }}>
                                    <Image style={{
                                        resizeMode: 'contain',
                                        alignItems: 'center',
                                        borderRadius: 10
                                    }} source={{ uri: item.uri, width: 160, height: 160 }} />
                                </Card.Content>
                                <Card.Title style={{
                                    marginTop: -10,
                                    marginBottom: -10
                                }} title={item.name} subtitle={item.address} />
                                <Text style={{
                                    marginBottom: -25,
                                    marginLeft: 15,
                                    fontSize: 16,
                                    fontWeight: 'bold'
                                }} >{'Rs ' + item.price}</Text>
                                <View style={[styles.container, {
                                    // Try setting `flexDirection` to `"row"`.
                                    flexDirection: "row",
                                    marginBottom: -20,
                                    alignItems: 'stretch'
                                }]}>
                                    <View style={{ flex: 1, marginTop: 10 }} >
                                        <Ionicons style={{ marginLeft: -5 }} name='time-outline' size={10} color='grey' />

                                    </View>
                                    <View style={{ flex: 10, marginTop: -20 }} >
                                        <Card.Title style={{
                                            marginBottom: -40,
                                            paddingLeft: -20
                                        }} subtitle={item.updated} />
                                    </View>
                                </View>
                            </Card>
                        </Pressable>
                    )}
                />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

export default HomeScreen;