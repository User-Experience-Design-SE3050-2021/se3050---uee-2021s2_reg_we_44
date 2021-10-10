import React,{useState,useEffect} from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet,RefreshControl, View, Text,Image ,Dimensions , SafeAreaView,ToastAndroid, ScrollView,TouchableHighlight,Pressable} from 'react-native';
import Star from 'react-native-star-view';
import { Card, ListItem, } from 'react-native-elements'
import { Avatar } from 'react-native-paper';
import api from '../../api';
import {  IconButton, Searchbar } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import axios from 'axios';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SearchBar } from 'react-native-elements';
import { style } from '@mui/system';
import { FacebookLoader,InstagramLoader } from 'react-native-easy-content-loader';
const {width , height} = Dimensions.get("window")
import EmptyCompany from './EmptyCompany';


import TopNav from '../Review/TopNav'


const styles = StyleSheet.create({
    
    CompanyListBody:{
    },
    CompanyListTitle:{
        fontFamily: 'Raleway-SemiBold',
        fontWeight:"600",
        fontSize:18,
        color:"#000000",
        marginLeft:12

    },
    AddReviewBtn:{
        width:230,
        alignSelf:"flex-end",
        height:102,
        marginRight:20,
        

    },
    AddReviewBtnContainer:{
        width:220,
        height:52,
        borderRadius:10,
        margin:8,
        backgroundColor:"#FFFFFF",
        borderColor:'#FFFFFF', 
        borderWidth:1,
        overflow: 'hidden',
        shadowColor: "black",
        shadowRadius: 10,
        flexDirection:"row",
        justifyContent:"center",
        alignItems: 'center',
        shadowOffset: {width : 0.5,height:0.5},
        shadowOpacity:0.5,
        elevation: 5,
    },
    AddReviewBtnText:{
        color:"#F6F6F9",
        fontFamily: 'Raleway-Bold',
        fontWeight:"700",
        fontSize:15,
        textAlign: 'center',
        paddingLeft:6,
        color:"#343333",
        },
    FeedbackAddIcon:{
       fontSize:33,
       color:"#343333",
    },
    CompanyListCard:{
        height:190,
        overflow: 'hidden',
        shadowRadius: 10,
        borderRadius:8,
        paddingRight:15,
        paddingLeft:15,
        paddingBottom:10,
        paddingTop:12,
        marginTop:15,
        marginBottom:15,
        marginLeft:3,
        marginRight:3,
        backgroundColor:"#Fff",
        shadowColor:'#000',
        shadowOffset: {width : 0.5,height:0.5},
        shadowOpacity:0.5,
        shadowRadius:3,
        elevation: 6,
    },
    CompanyListCardHeader:{
        flexDirection:"row",
        
    },
    Image:{
        width:100,
        height:110,
        flexDirection:'row',
        alignItems:'center'
    },
    ReviewerName:{
       fontSize:15,
       fontFamily: "Raleway-Regular",
       fontStyle: "normal",
       fontWeight: "700",
       color:"#333333",
       marginLeft:8

    },
    CompanyName:{
        fontSize:15,
        fontFamily: "Raleway-Bold",
        fontStyle: "normal",
        fontWeight: "bold",
        color:"#333333",
        marginLeft:8
 
     },
    ReviewDate:{
        textAlign: 'right',
        color:"#333333",
        fontFamily:"Raleway-Regular",
        fontSize:13,
        opacity:0.7
    },
    ReviewDesc:{
        fontSize:15,
        marginTop:18,
        paddingRight:15,
        paddingLeft:15,
        color:"#666666",
        fontSize:16,
        fontFamily:"Raleway-Regular",
        lineHeight:20,
        fontWeight:"400"

    },
    rating:{
        marginTop:15,
        alignSelf:"flex-end"
    },
    starStyle : {
        width: 100,
        height: 20,
        marginBottom: 8,
        marginLeft:6
      },
    
      baseText: {
        fontFamily: "Raleway-Bold",
        fontSize: 30,
        paddingTop:50,
        fontWeight: "bold",
        color: '#000',
    
      },
      AddButton:{
          marginBottom:0,
          height:140,
          backgroundColor:"#f8f8f8"

      },
      EditBtn:{
        width:50,
        marginRight:5,
        height:42,
        borderRadius:15,
        backgroundColor:"#458EFC",
        borderColor:'#458EFC', 
        borderWidth:1,
        overflow: 'hidden',
        shadowColor: "black",
        shadowRadius: 10,
        shadowOffset: {width : 0.5,height:0.5},
        shadowOpacity:0.7,
        elevation: 6,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
      },
      MyReviewIcon:{
        color:"#F6F6F9",
        fontSize:25,
      },
      DeleteBtn:{
        width:50,
        height:42,
        borderRadius:15,
        backgroundColor:"#FC4545",
        borderColor:'#FC4545', 
        borderWidth:1,
        overflow: 'hidden',
        shadowColor: "black",
        shadowRadius: 10,
        shadowOffset: {width : 0.5,height:0.5},
        shadowOpacity:0.7,
        elevation: 6,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginRight:5,
      },
      MyReviewDelBtn:{
        width:60,
        alignSelf:"flex-end",
        height:42,
        borderRadius:15,
        backgroundColor:"#FC4545",
        borderColor:'#FC4545', 
        borderWidth:1,
        overflow: 'hidden',
        shadowColor: "black",
        shadowRadius: 10,
        flexDirection:"row",
        justifyContent:"center",
        alignItems: 'center',
        shadowOffset: {width : 0.5,height:0.5},
        shadowOpacity:0.7,
        elevation: 5,
       
        position:"absolute",
       right:0
        
      },
  })

  
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  } 
  
const MyCompanies = ({ navigation }) => {
    const[search,setSearch]=useState()
    const[rows,setRows] = useState([])
    const [isLoading,setIsLoading] =useState(true)
    const[toggle,setToggle] = useState(false)
    const [refreshing, setRefreshing] = React.useState(false);

   
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
      }, []);

    useEffect(() => {
        setIsLoading(true)
        api.get('/company/').then(function (response) {
            console.log(response.data);
            setRows(response.data)
            setIsLoading(false)
            if (response.data.message) {
                alert.info(response.data.message);
            }
        })
            .catch(function (error) {
                console.log(error);
            })
    }, [toggle,refreshing])
function deleteCompany(id){
    setIsLoading(true)
    api.delete(`company/delete/${id}`).then(function (response) {
        console.log(response.data);
        setToggle(!toggle)
        ToastAndroid.showWithGravityAndOffset(
            "Successfully Deleted",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
          );
          setIsLoading(false)
        if (response.data.message) {
            alert.info(response.data.message);
        }
    })
        
}
    return (
        <View style={{height:height}}>
        
        <SafeAreaProvider >
            <TopNav navigation={navigation} Navtitle={"My Companies"} NavBarColor="#F6F6F9" NavBarFontColor="black" />


            <View style={{height:height}}>


                {/* <StatusBar backgroundColor={'#5956E9'} barStyle={'dark-content'} /> */}
                {/* <View
            style={{
                backgroundColor: '#f9f9f9',
                flexDirection: "row",
                height: 150,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>

            <Text style={styles.baseText}>
                List of Companies
            </Text>

           
        </View> */}
        
                <View style={{
                    flexDirection: "row",
                    justifyContent: 'space-between',
                    backgroundColor: '#f9f9f9',
                    alignItems: 'stretch',
                    alignItems: 'center',
                }}>
                    <Searchbar
                        style={{ margin: 10, marginLeft: 10, borderRadius: 30, height: 35, width: 320 }}
                        placeholder="Search.."
                        onChangeText={setSearch}
                        inputStyle={{ fontSize: 14, }}
                        value={search}

                    />
                    <IconButton
                        style={{}}
                        icon='filter'
                        color='#000'
                        size={30}
                        onPress={() => console.log('Pressed')}
                    />
                </View>
                
                <ScrollView
        scrollEnabled={true}
                    contentInsetAdjustmentBehavior="automatic"
                    refreshControl={
                        <RefreshControl
                          refreshing={refreshing}
                          onRefresh={onRefresh}
                        />}
                    style={{
                        backgroundColor: '#f9f9f9',
                        padding: 20,
                        marginTop: 0,
                       
                    }}>
                        {isLoading && <FacebookLoader active/> }
                        {isLoading && <FacebookLoader active/> }
 {isLoading ? <FacebookLoader active/>  : 
 rows.length > 0 ?
                    <View style={styles.CompanyListBody}>
                   
                        <Text style={styles.CompanyListTitle}>My Companies ({rows.length}) </Text>
                        
                        {rows.map((row) => {
                
                return (
                        <Pressable key={row._id} onPress={() => navigation.navigate('CompanyView')} style={styles.CompanyListCard}>
                            
                            <View style={styles.CompanyListCardHeader}>
                                <Image style={styles.Image} source={{ uri: row.images[0] }} />
                                <View style={{ marginTop: 5,width:235 }}>

                                    <View style={{ flexDirection: 'row', marginLeft: 10, marginBottom: 5 }} >
                                        <Feather name='home' color='#5c5c5c' size={22} />
                                        <Text style={styles.CompanyName}>{row.companyName}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginLeft: 10, marginBottom: 5 }} >
                                        <Feather name='map-pin' color='#5c5c5c' size={22} />
                                        <Text style={styles.ReviewerName}>{row.address}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginLeft: 10, marginBottom: 5 }} >
                                        <Feather name='phone-call' color='#5c5c5c' size={22} />
                                        <Text style={styles.ReviewerName}>{row.contactNo}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginLeft: 10, marginBottom: 5 }} >
                                        <Feather name='eye' color='#5c5c5c' size={22} />
                                        <Star score={3} style={styles.starStyle} />
                                    </View>
                                    <View style={{ flexDirection: 'row',justifyContent:'flex-end', marginRight: 10, marginBottom: 5 }} >

                                        <Pressable  onPress={() => navigation.navigate('CompanyUpdateForm',{ id:row._id,companyName: row.companyName, companyAddress:row.address,contactNo:row.contactNo,desc:row.description,category:row.category,thumbnail:row.images[0]})} style={styles.EditBtn}>
                                            <Feather style={styles.MyReviewIcon} name="edit-3" />
                                        </Pressable>

                                        <Pressable  onPress={() => deleteCompany(row._id)}  style={styles.DeleteBtn}>
                                            <MaterialIcons style={styles.MyReviewIcon} name="delete-outline" />
                                        </Pressable>
                                    </View>
                                </View>

                            </View>
                            
                        </Pressable>
 ) ;
                  
})}

                     

                     









                    </View>
: <EmptyCompany navigation={navigation}/> 

}
                </ScrollView>
                
                <View  style={styles.AddButton} >
                    <Pressable  onPress={() => navigation.navigate('CompanyAddForm')} style={styles.AddReviewBtn}>
                        <View style={styles.AddReviewBtnContainer}>
                            <Ionicons style={styles.FeedbackAddIcon} name="ios-add-circle-outline" />
                            <Text style={styles.AddReviewBtnText}>ADD MY COMPNAY</Text>
                        </View>
                    </Pressable>
                </View>

            </View>
            
        </SafeAreaProvider>
        
        </View>
    )
};

export default MyCompanies;

{/* <Button style={{ marginTop: 150, width: 200 }} icon="" mode="contained" onPress={() => navigation.navigate('CompanyUpdateForm')}>
Edit Button
</Button> */}