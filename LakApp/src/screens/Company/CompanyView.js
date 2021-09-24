import * as React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, View, Text ,Dimensions , SafeAreaView, ScrollView,TouchableHighlight} from 'react-native';
import Carousel from './Carsousel/Carsousel';
import { carouselData } from './Carsousel/CarsouselData';
import CompanyReviewList from '../Review/CompanyReviewList';
import TopNav from '../Review/TopNav';
import Star from 'react-native-star-view';

import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';




const {width , height} = Dimensions.get("window")

const styles = StyleSheet.create({
    Bodycontainer:{
        backgroundColor:'#F6F6F9',
        marginTop:0
    },
    scrollView:{
        
    },
    container: {
      width:width,
      height: height +600,
      borderTopRightRadius:30,
      borderTopLeftRadius:30,
      backgroundColor:'#FFFFFF',
      marginTop:20,
      shadowColor:'#000',
      shadowOffset: {width : 0.5,height:0.5},
      shadowOpacity:0.5,
      shadowRadius:3,
      elevation:30,
    },
    Companytitile:{
        marginTop:20,
        fontSize:21,
        fontWeight:"600",
        textAlign: "center",
        fontFamily: 'Raleway-SemiBold',
    
    },
    CompanyDesc:{
        marginTop:15,
        fontSize:15,
        fontWeight:"400",
        textAlign: "left",
        marginLeft:30,
        marginRight:30,
        lineHeight:20,
        letterSpacing:0.2,
        opacity:0.5,
        fontFamily: 'Raleway-Regular',
    },
    rating:{
        marginTop:12,
        marginLeft:30
    },
    starStyle : {
        width: 100,
        height: 20,
        marginBottom: 20,
      },
    CompanyContact:{
        flexDirection:"row",
    },
    CompanyContactIcon:{
        marginTop:15,
        marginLeft:50,
    },
    CompanyNo:{
        marginTop:15,
        fontWeight:"normal",
        marginLeft:20,
        fontSize:17,
        tintColor:"#343333",
        fontFamily: 'Raleway-Regular',
    },
    CompanyLocation:{
        marginTop:15,
        fontWeight:"normal",
        marginLeft:20,
        fontSize:17,
        tintColor:"#343333",
        fontFamily: 'Raleway-Regular',
    },
    CompanyBtnView:{
        flexDirection:"row",
        justifyContent:"center",
        marginTop:20,
        textTransform: 'none'
        
    },
    CompanyCallBtn:{
        zIndex:-1,
        color:"red",
        backgroundColor:'black',
       
    },
    CompanyBtn:{
        width:160,
        height:55,
        borderRadius:10,
        justifyContent: 'center',
        alignItems: 'center',  
        margin:8,
        backgroundColor:"#5956E9",
        borderColor:'#5956E9', 
        borderWidth:1,
        overflow: 'hidden',
        shadowColor: "black",
        shadowRadius: 10,
        shadowOpacity: 0.5,
        
    },
    CompanyBtnTxt:{
        color:"#F6F6F9",
        fontFamily: 'Raleway-Bold',
        fontWeight:"700",
        fontSize:18,
    },
    hrLine:{
         width:268,
         height:1,
         borderColor: "#F2F2F2",
         borderWidth:1,
         alignSelf:"center",
         marginTop:40,
         marginBottom:40
         
    },
    ReviewBody:{
        

    },
    ReviewTitle:{
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
        marginRight:30
    },
    AddReviewBtnContainer:{
        width:230,
        height:52,
        borderRadius:10,
        margin:8,
        backgroundColor:"#5956E9",
        borderColor:'#5956E9', 
        borderWidth:1,
        overflow: 'hidden',
        shadowColor: "black",
        shadowRadius: 10,
        shadowOpacity: 0.5,
        flexDirection:"row",
        justifyContent:"center",
        alignItems: 'center',
    },
    AddReviewBtnText:{
        color:"#F6F6F9",
        fontFamily: 'Raleway-Bold',
        fontWeight:"700",
        fontSize:15,
        textAlign: 'center',
        paddingLeft:8
        },
    FeedbackAddIcon:{
       fontSize:35,
       color:"#F6F6F9",
    },
    hrLine:{
         width:268,
         height:1,
         borderColor: "#F2F2F2",
         borderWidth:1,
         alignSelf:"center",
         marginTop:40,
         marginBottom:40
    },
    textInput: {
      height: 40,
      width: '90%',
      borderColor: 'gray',
      borderWidth: 1,
      marginTop: 8
    }
  })
  
const CompanyView = ({ navigation }) => {

 
return(

   <View style = {styles.Bodycontainer}>

       <TopNav navigation={navigation}  Navtitle={"Burger Palace"}  NavBarColor="#F6F6F9"  NavBarFontColor="black"/>

           <ScrollView style={styles.scrollView}>  
                <Carousel data= {carouselData}/>

                <View style = {styles.container}>
                    <Text style = {styles.Companytitile}>Burger Palace - "Colombo 03"</Text>
                    <Text style = {styles.CompanyDesc}>Labore sunt veniam amet est. Minim nisi dolor eu ad incididunt cillum elit ex ut. lLabore sunt veniam amet est.</Text>
                            <View style={styles.rating}>
                                <Star score={4} style={styles.starStyle} />
                            </View>

                            <View style={styles.CompanyContact}>
                             <Feather style={styles.CompanyContactIcon} name="phone-call" size={25} color="#1CA954" />
                             <Text style = {styles.CompanyNo}>+94115879658 </Text>
                            </View>   

                            <View style={styles.CompanyContact}>
                             <Ionicons style={styles.CompanyContactIcon} name="ios-location-outline" size={33} color="#3C3C42" />
                             <Text style = {styles.CompanyLocation}>No 7,Galle Road, Colombo 03 </Text>
                            </View> 

                            <View style = {styles.CompanyBtnView}>
                                    <Button uppercase={false} style = {styles.CompanyBtn} mode="contained" onPress={() => navigation.navigate('EmptyReviews')}>
                                    <Text style={styles.CompanyBtnTxt}>Call Now</Text>
                                    </Button>
                                    
                                    <Button uppercase={false} style = {styles.CompanyBtn}   mode="contained" onPress={() => navigation.navigate('NoInternet')} >
                                    <Text style={styles.CompanyBtnTxt}>Find Us</Text>
                                    </Button>  

                                 
                                    
                            </View>
                            <View  style = {styles.hrLine} />

                            {/* //REVIEW PART */}
                            <CompanyReviewList/>
                            {/* 
                            

                            <View style = {styles.ReviewBody}>
                                <Text style = {styles.ReviewTitle}>User Reviews (2) </Text>
                              

                                <TouchableHighlight onPress={() => {}} style={styles.AddReviewBtn}>
                                     <View style={styles.AddReviewBtnContainer}>
                                     <Ionicons style={styles.FeedbackAddIcon} name="ios-add-circle-outline" />
                                        <Text style={styles.AddReviewBtnText}>ADD YOUR FEEDBACK</Text>
                                     </View>
                                </TouchableHighlight>


                            </View> */}
                </View>
            </ScrollView>



 







   </View>


)}

export default CompanyView;