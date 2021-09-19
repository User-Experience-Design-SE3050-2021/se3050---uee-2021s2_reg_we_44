import * as React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, View, Text,Image ,Dimensions , SafeAreaView, ScrollView,TouchableHighlight} from 'react-native';
import Star from 'react-native-star-view';
import { Card, ListItem, } from 'react-native-elements'
import { Avatar } from 'react-native-paper';
// import GiveFeedbackModel from './GiveFeedbackModel';


import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';


const {width , height} = Dimensions.get("window")


const styles = StyleSheet.create({
    
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
    ReviewCard:{
        overflow: 'hidden',
        shadowRadius: 10,
        borderRadius:8,
        paddingRight:15,
        paddingLeft:15,
        paddingBottom:10,
        paddingTop:12,
        margin:15,
        backgroundColor:"#F6F6F9",
        shadowColor:'#000',
        shadowOffset: {width : 0.5,height:0.5},
        shadowOpacity:0.5,
        shadowRadius:3,
        elevation: 6,
    },
    ReviewCardHeader:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    ReviewAvatar:{
        shadowOffset: {width : 0.5,height:0.5},
        shadowOpacity:0.5,
        shadowRadius:3,
        elevation: 4,
    },
    ReviewerName:{
       fontSize:18,
       textAlign:"left",
       flex:1,
       marginLeft:15,
       fontFamily: "Raleway-Bold",
       fontStyle: "normal",
       fontWeight: "700",
       lineHeight: 19,
       color:"#333333"

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
      },
    
    
  })

  
  
  
const CompanyReviewList = ({ navigation }) => {
    
    
    return(
             <View style = {styles.ReviewBody}>
                
                <Text style = {styles.ReviewTitle}>User Reviews (2) </Text>

                <View style = {styles.ReviewCard}>
                  <View style = {styles.ReviewCardHeader}>
                    <Avatar.Image  style = {styles.ReviewAvatar} source = {{uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"}}/>
                    <Text style = {styles.ReviewerName}>Arina Heliex </Text>
                    <Text style = {styles.ReviewDate}>4 Days Ago</Text>
                  </View>

                  <Text style = {styles.ReviewDesc}>Labore sunt veniam amet est. Minim nisi dolor eu ad incididunt cillum elit ex ut. </Text>
                
                  <View style={styles.rating}>
                                <Star score={3} style={styles.starStyle} />
                  </View>

                  
                </View>

                

                <View style = {styles.ReviewCard}>
                  <View style = {styles.ReviewCardHeader}>
                    <Avatar.Image  style = {styles.ReviewAvatar} source = {{uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"}}/>
                    <Text style = {styles.ReviewerName}>Arina Heliex </Text>
                    <Text style = {styles.ReviewDate}>4 Days Ago</Text>
                  </View>

                  <Text style = {styles.ReviewDesc}>Labore sunt veniam amet est. Minim nisi dolor eu ad incididunt cillum elit ex ut. </Text>
                
                  <View style={styles.rating}>
                                <Star score={3} style={styles.starStyle} />
                  </View>

                  
                </View>


                <View style = {styles.ReviewCard}>
                  <View style = {styles.ReviewCardHeader}>
                    <Avatar.Image  style = {styles.ReviewAvatar} source = {{uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"}}/>
                    <Text style = {styles.ReviewerName}>Arina Heliex </Text>
                    <Text style = {styles.ReviewDate}>4 Days Ago</Text>
                  </View>

                  <Text style = {styles.ReviewDesc}>Labore sunt veniam amet est. Minim nisi dolor eu ad incididunt cillum elit ex ut. </Text>
                
                  <View style={styles.rating}>
                                <Star score={3} style={styles.starStyle} />
                  </View>

                  
                </View>
                
                {/* <GiveFeedbackModel/> */}




                    {/* <TouchableHighlight underlayColor="transparent" onPress={() => {}} style={styles.AddReviewBtn}>
                        <View style={styles.AddReviewBtnContainer}>
                            <Ionicons style={styles.FeedbackAddIcon} name="ios-add-circle-outline" />
                            <Text style={styles.AddReviewBtnText}>ADD YOUR FEEDBACK</Text>
                        </View>
                    </TouchableHighlight> */}


            </View>
               




    )



    }

export default CompanyReviewList;


