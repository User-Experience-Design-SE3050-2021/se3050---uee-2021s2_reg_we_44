import  React, {useEffect} from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, View, Text,Image ,Dimensions , SafeAreaView, ScrollView,TouchableHighlight} from 'react-native';
import Star from 'react-native-star-view';
import { Card, ListItem, } from 'react-native-elements'
import { Avatar } from 'react-native-paper';
import GiveFeedbackModel from './GiveFeedbackModel';
import { FacebookLoader, InstagramLoader } from 'react-native-easy-content-loader';
import api from '../../api';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Propic from '../../assest/Images/avatarPic.png'


const {width , height} = Dimensions.get("window")



const styles = StyleSheet.create({

    
    ReviewBody:{
        

    },
    ReviewTitle:{
        fontFamily: 'Raleway-SemiBold',
        fontWeight:"600",
        fontSize:18,
        color:"#000000",
        marginLeft:12,
        marginBottom:10

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
        elevation: 5,
    },
    ReviewAvatarTxt:{
        backgroundColor:"#d9d9d9",
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
    
    const [toggle, setToggle] = React.useState(false);
    
    const [activeE, SetActive] = React.useState(true);
    const [rows, setRows] = React.useState(true);
    
    setTimeout(() => SetActive(false), 1000)

useEffect(() => {
    api.get(`/feedback`)
      .then((res) => {
        setRows(res.data);
        // setIsProgress(false);
       
      })
      .catch((err) => {
        console.log(err);
      });

}, [toggle]);
    
    return(
             <View style = {styles.ReviewBody}>
                
                <Text style = {styles.ReviewTitle}>User Reviews (2) </Text>


                {/* <FacebookLoader  active={false} /> */}


                <View style = {styles.ReviewCard}>
                  <View style = {styles.ReviewCardHeader}>
                    <Avatar.Image  style = {styles.ReviewAvatar} source = {{uri:'https://www.linkpicture.com/q/LPic61503d5b67db4326511614.jpg'}}/>
                    <Text style = {styles.ReviewerName}>Jacob Fran </Text>
                    <Text style = {styles.ReviewDate}>4 Days Ago</Text>
                  </View>

                  <Text style = {styles.ReviewDesc}>Labore sunt veniam amet est. Minim nisi dolor eu ad incididunt cillum elit ex ut. </Text>
                
                  <View style={styles.rating}>
                                <Star score={5} style={styles.starStyle} />
                  </View>

                  
                </View>

                

                <View style = {styles.ReviewCard}>
                  <View style = {styles.ReviewCardHeader}>
                    <Avatar.Image  style = {styles.ReviewAvatar} source = {{uri : 'https://www.linkpicture.com/q/LPic61503e01c29b21361512192.jpg'}}/>
                    <Text style = {styles.ReviewerName}>Arina Heliex </Text>
                    <Text style = {styles.ReviewDate}>6 Days Ago</Text>
                  </View>

                  <Text style = {styles.ReviewDesc}>Labore sunt veniam amet est. Minim nisi dolor eu ad incididunt cillum elit ex ut. </Text>
                
                  <View style={styles.rating}>
                                <Star score={4} style={styles.starStyle} />
                  </View>

                  
                </View>


                <View style = {styles.ReviewCard}>
                  <View style = {styles.ReviewCardHeader}>
                    <Avatar.Image  style = {styles.ReviewAvatar} source = {{uri: 'https://www.linkpicture.com/q/LPic61503cf1dfef52018447189.jpg'}}/>
                    <Text style = {styles.ReviewerName}>Alina Juliet </Text>
                    <Text style = {styles.ReviewDate}>2 Weeks Ago</Text>
                  </View>

                  <Text style = {styles.ReviewDesc}>Labore sunt veniam amet est. Minim nisi dolor eu ad incididunt cillum elit ex ut. </Text>
                
                  <View style={styles.rating}>
                                <Star score={4} style={styles.starStyle} />
                  </View>

                  
                </View>


                {rows.length > 0 && rows.map((row) => {
                
                    return (
                  

                  <View style = {styles.ReviewCard} key={row._id}>
                        <View style = {styles.ReviewCardHeader}>
                        {row.anonymous =="false"? 
                            <Avatar.Image  style = {styles.ReviewAvatar} source = {{uri : 'https://www.linkpicture.com/q/LPic61598684dd9041097341415.jpg'}}/>
                           : <Avatar.Text label={row.userName.substring(0, 2)}  style = {styles.ReviewAvatarTxt}/>}
                            <Text style = {styles.ReviewerName}>{row.anonymous =="true"? row.userName.substring(0, 2) +"****":row.userName}</Text>
                            <Text style = {styles.ReviewDate}>Today</Text>
                        </View>

                        <Text style = {styles.ReviewDesc}>{row.description} </Text>
                        
                        <View style={styles.rating}>
                            <Star score={row.rating} style={styles.starStyle} />
                        </View>
                  </View>
                  

                    );
                  
                })}
                
                <GiveFeedbackModel toggle={toggle}  setToggle={setToggle} />




                   


            </View>
               




    )



    }

export default CompanyReviewList;


