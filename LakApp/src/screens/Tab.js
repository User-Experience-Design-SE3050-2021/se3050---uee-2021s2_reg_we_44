import * as React from 'react';
import { View, Text, Image, Animated, Dimensions, FlatList, SafeAreaView, ScrollView, StyleSheet, Pressable, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Header } from 'react-native-elements';
import HomeScreen from './ads/HomeScreen';
import PostAdCategoryScreen from './ads/PostAdCategory';
import { Button } from 'react-native-paper';
import CompanyList from "./Company/CompanyList";
import MyCompanies from "./Company/MyCompanies";
import AccountScreen from './account/AccountScreen';

var primaryColor = '#7D86F5'
var lightColor = '#CFD4FF'


function SettingsScreen({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor:'#f9f9f9'}}>
             <CompanyList navigation={navigation}/>
        </View>
    );
}


function MainScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
            <Header
                placement="left"
                backgroundColor="#7D86F5"
                leftComponent={{ icon: 'arrow-back', color: '#fff', size: 30 }}
                centerComponent={{ text: 'Post Ad ', style: { color: '#fff', fontSize: 22 } }}
            />
            <Text>Main Screen</Text>
        </View>
    );
}

function ChatScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Chat Screen</Text>
        </View>
    );
}

function PersonScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           
            <Button mode="contained" onPress={() => navigation.navigate('MyCompanies')}>
                My Companies
            </Button>
            <Button style={{marginTop:20 }} icon="" mode="contained" onPress={() => navigation.navigate('MyReviewList')}>
                 My Reviews
            </Button>
        </View>
    );
}

const Tab = createBottomTabNavigator();


function TabScreen() {
    const tabOffsetValue = React.useRef(new Animated.Value(0)).current;
    const [color, setColor] = React.useState(primaryColor);

    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarShowLabel: false,
            tabBarStyle: [
                {
                    backgroundColor: '#7D86F5',
                    position: 'absolute',
                    paddingBottom: 20,
                    height: 60,
                    shadowColor: '#000',
                    shadowOpacity: 0.06,
                    shadowOffset: {
                        width: 10,
                        height: 10
                    }
                }
            ],
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused
                        ? 'ios-information-circle'
                        : 'ios-information-circle-outline';
                } else if (route.name === 'Settings') {
                    iconName = focused ? 'ios-list-box' : 'ios-list';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
        })}
        >
            <Tab.Screen name="Lak.lk" component={HomeScreen} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        position: 'absolute',
                        top: '35%'
                    }}>
                        <Ionicons name='home' size={27} color={focused ? 'white' : 'white'} />
                    </View>
                )
            }} listeners={({ navigation, route }) => ({
                tabPress: e => {
                    setColor(primaryColor)
                }
            })} />
            <Tab.Screen name="Business" component={SettingsScreen} options={{
                 headerShown: false,
                headerTitleAlign: 'center',
                headerTitleStyle: [{
                    color: 'white'
                }],
                headerStyle: [{
                    backgroundColor: primaryColor
                }],
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        position: 'absolute',
                        top: '35%'
                    }}>
                        <Ionicons name='business' size={27} color={focused ? 'white' : 'white'} />
                    </View>
                )
            }} listeners={({ navigation, route }) => ({
                tabPress: e => {
                    setColor(primaryColor)
                }
            })} />
            {

            }

            <Tab.Screen name="ActionButton" component={PostAdCategoryScreen} options={{
                 headerShown: false,
                headerTitleAlign: 'center',
                headerTitleStyle: [{
                    color: 'white'
                }],
                headerStyle: [{
                    backgroundColor: primaryColor
                }],
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        width: 55,
                        height: 55,
                        backgroundColor: "#CFD4FF",
                        borderRadius: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: 10,
                        shadowColor: '#000',
                        shadowOpacity: 0.06,
                        shadowOffset: {
                            width: 10,
                            height: 10
                        }
                    }}>
                        <Icon name="plus-circle" size={30} color={primaryColor} />
                    </View>
                )
            }} listeners={({ history, route }) => ({
                tabPress: e => {
                    setColor('transparent')
                }
            })} />

            <Tab.Screen name="Chat" component={ChatScreen} options={{
                 headerShown: false,
                headerTitleAlign: 'center',
                headerTitleStyle: [{
                    color: 'white'
                }],
                headerStyle: [{
                    backgroundColor: primaryColor
                }],
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        position: 'absolute',
                        top: '35%'
                    }}>
                        <Ionicons name='chatbubbles' size={27} color={focused ? "white" : "white"} />
                    </View>
                )
            }} listeners={({ navigation, route }) => ({
                tabPress: e => {
                    setColor(primaryColor)
                }
            })} />

            <Tab.Screen name="Person" component={AccountScreen} options={{
                 headerShown: false,
                headerTitleAlign: 'center',
                headerTitleStyle: [{
                    color: 'white'
                }],
                headerStyle: [{
                    backgroundColor: primaryColor
                }],
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        position: 'absolute',
                        top: '35%'
                    }}>
                        <Ionicons name='person' size={27} color={focused ? "white" : "white"} />
                    </View>
                )
            }} listeners={({ navigation, route }) => ({
                tabPress: e => {
                    setColor(primaryColor)
                }
            })} />
        </Tab.Navigator>
    );
}

export default TabScreen;