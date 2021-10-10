import React,{useState,useEffect} from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet,RefreshControl, View, Text,Image ,Dimensions , SafeAreaView, ScrollView,TouchableHighlight,Pressable,StatusBar} from 'react-native';
import Star from 'react-native-star-view';
import { Card, ListItem, } from 'react-native-elements'
import { Avatar } from 'react-native-paper';
import api from '../../api';
import {  IconButton, Searchbar } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FacebookLoader,InstagramLoader } from 'react-native-easy-content-loader';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SearchBar } from 'react-native-elements';
import { style } from '@mui/system';
import TopNav from '../Review/TopNav'
const {width , height} = Dimensions.get("window")


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
        height:52,
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
          height:140

      }
  })

  
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  } 
  
const CompanyList = ({ navigation }) => {
    var lightColor = '#CFD4FF' 
    const[search,setSearch]=useState()
    const[rows,setRows] = useState([])
    const [isLoading,setIsLoading] =useState(true)
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
    }, [refreshing])

    return(

        <View>
            <TopNav navigation={navigation}  Navtitle={"Company List"}  NavBarColor="#F6F6F9"  NavBarFontColor="black"/>
   
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
        
            contentInsetAdjustmentBehavior="automatic"
            refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                />}
            style={{
                backgroundColor: '#f9f9f9',
                height: 800,
                padding: 20,
                marginTop: 0,

            }}> 
              {isLoading && <FacebookLoader active/> }
                        {isLoading && <FacebookLoader active/> }
 {isLoading ? <FacebookLoader active/>  : 
             <View style = {styles.CompanyListBody}>
                
                <Text style = {styles.CompanyListTitle}>Companies ({rows.length}) </Text>


                    {rows.length > 0 && rows.map((row) => {
                
                return (
                    <Pressable key={row._id} onPress={() => navigation.navigate('CompanyView')} style={styles.CompanyListCard}>
                        <View style={styles.CompanyListCardHeader}>
                            <Image style={styles.Image} source={{ uri: row.images[0] }} />
                            <View>

                                <View style={{ flexDirection: 'row', marginLeft: 10, marginBottom: 5 }} >
                                    <Feather name='home' color='#5c5c5c' size={22} />
                                    <Text style={styles.CompanyName}>{row.companyName}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginLeft: 10, marginBottom: 5 }} >
                                    <Feather name='map-pin' color='#5c5c5c' size={22} />
                                    <Text style={styles.ReviewerName}>{row.address} </Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginLeft: 10, marginBottom: 5 }} >
                                    <Feather name='phone-call' color='#5c5c5c' size={22} />
                                    <Text style={styles.ReviewerName}>{row.contactNo}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginLeft: 10, marginBottom: 5 }} >
                                    <Feather name='eye' color='#5c5c5c' size={22} />
                                    <Star score={3} style={styles.starStyle} />
                                </View>
                            </View>
                        </View>
                    </Pressable>
                 ) ;
                  
            })}
            

                    



                   


            </View>
               
        }

</ScrollView>

            <View style={styles.AddButton} >
                <TouchableHighlight underlayColor="transparent"  onPress={() => navigation.navigate('CompanyAddForm')} style={styles.AddReviewBtn}>
                    <View style={styles.AddReviewBtnContainer}>
                        <Ionicons style={styles.FeedbackAddIcon} name="ios-add-circle-outline" />
                        <Text style={styles.AddReviewBtnText}>ADD YOUR COMPNAY</Text>
                    </View>
                </TouchableHighlight>
            </View>
            
</View>

    )



    }

export default CompanyList;


