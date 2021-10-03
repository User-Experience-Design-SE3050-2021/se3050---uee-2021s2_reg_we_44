
import React,{useEffect,useState} from 'react';
import { StyleSheet, View,ScrollView, Dimensions,Text,Pressable } from 'react-native';
import Star from 'react-native-star-view';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TopNav from './TopNav';
import UpdateFeedbackModel from './UpdateFeedbackModel';
import EmptyReviews from './EmptyReviews';
import NoInternet from '../Common/NoInternet'
import NetInfo from "@react-native-community/netinfo";

const {width , height} = Dimensions.get("window")

 const MyReviewList = ({navigation}) => {
  const [IsInternet, setIsInternet] = useState();

  useEffect(() => {
    NetInfo.fetch().then(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      setIsInternet(state.isConnected)
    });
  }, [])




    

    const styles = StyleSheet.create({
        container: {
          backgroundColor:'#F6F6F9',
          width:width,
          height:height
        },
        NoreviewTitle:{
            fontSize:21,
            fontFamily:"Raleway-Regular",
            fontWeight:"400",
            shadowOffset: {width : 0.5,height:0.5},
            shadowOpacity:0.5,
            elevation: 5,
        },
        ReviewCard:{
            overflow: 'hidden',
            shadowRadius: 10,
            borderRadius:8,
            paddingRight:15,
            paddingLeft:15,
            paddingBottom:10,
            paddingTop:8,
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
            alignItems:"center",
            marginTop:10
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
           marginLeft:10,
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
            marginTop:20,
            alignSelf:"flex-start"
        },
        starStyle : {
            width: 100,
            height: 20,
            marginBottom: 12,
            marginLeft:12
          },
          MyReviewBtnFlex:{
            flexDirection:"row",
            justifyContent:"space-between"
          },
          // MyReviewEditBtn:{
          //   width:60,
          //   alignSelf:"flex-end",
          //   height:42,
          //   borderRadius:15,
          //   backgroundColor:"#458EFC",
          //   borderColor:'#458EFC', 
          //   borderWidth:1,
          //   overflow: 'hidden',
          //   shadowColor: "black",
          //   shadowRadius: 10,
          //   flexDirection:"row",
          //   justifyContent:"center",
          //   alignItems: 'center',
          //   shadowOffset: {width : 0.5,height:0.5},
          //   shadowOpacity:0.7,
          //   elevation: 6,
          //   marginRight:5
            
           
          // },
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
           
          
            
          },
          MyReviewIcon:{
            color:"#F6F6F9",
            fontSize:25,
          },
          TryAgainBtnText:{
            fontFamily: 'Raleway-Bold',
            fontWeight:"700",
            fontSize:17,
            textAlign: 'center',
            paddingLeft:6,
            color:"#FFFFFF",
          },
          ReviewCardFooter:{
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:'center',
            marginTop:10
          },
          ReviewListTitle:{
            textAlign:"left",
            marginTop:10,
            fontFamily: 'Raleway-SemiBold',
            fontWeight:"600",
            fontSize:17,
            marginLeft:12,
            marginBottom:16,
            color:"#555555",
          },
          CompanyIcon:{
            fontSize:30,
            marginBottom:10
          }
        
        
      })
      
    
  return (
    <View style={styles.container}>
        <TopNav  Navtitle={"My Reviews"}  NavBarColor="#F6F6F9"  NavBarFontColor="black" navigation={navigation}/>
       {IsInternet ? <View>
        <Text style={styles.ReviewListTitle} onPress={() => navigation.navigate('EmptyReviews')} >Reviews You Have Added</Text>
        <ScrollView style={styles.scrollView}>  
        <View style = {styles.ReviewCard}>
                  <View style = {styles.ReviewCardHeader}>
                    <FontAwesome style={styles.CompanyIcon} name="building-o" />
                    <Text style = {styles.ReviewerName}>Bugar Palace</Text>
                    <Text style = {styles.ReviewDate}>4 Days Ago</Text>
                  </View>

                  <Text style = {styles.ReviewDesc}>Labore sunt veniam amet est. Minim nisi dolor eu ad incididunt cillum elit ex ut. </Text>
                
                <View style={styles.ReviewCardFooter}>
                  <View style={styles.rating}>
                         <Star score={3} style={styles.starStyle} />
                  </View>

                  <View style={styles.MyReviewBtnFlex}>
                    <UpdateFeedbackModel />
                      <Pressable
                        style={styles.MyReviewDelBtn}
                        onPress={() => navigation.navigate('EmptyReviews')} >
                        <MaterialIcons style={styles.MyReviewIcon} name="delete-outline" />
                        {/* <Text style={styles.TryAgainBtnText}>Try Again</Text> */}
                      </Pressable>
                    </View>
                  
                  </View>

            </View>


            <View style = {styles.ReviewCard}>
                  <View style = {styles.ReviewCardHeader}>
                    <FontAwesome style={styles.CompanyIcon} name="building-o" />
                    <Text style = {styles.ReviewerName}>Hotel Lemon Tree </Text>
                    <Text style = {styles.ReviewDate}>2 Weeks Ago</Text>
                  </View>

                  <Text style = {styles.ReviewDesc}>Labore sunt veniam amet est. Minim nisi dolor eu ad incididunt cillum elit ex ut. </Text>
                
                <View style={styles.ReviewCardFooter}>
                  <View style={styles.rating}>
                                <Star score={4} style={styles.starStyle} />
                  </View>

                    <View style={styles.MyReviewBtnFlex}>
                    <UpdateFeedbackModel />
                      <Pressable
                        style={styles.MyReviewDelBtn}
                        onPress={() => navigation.navigate('EmptyReviews')} >
                        <MaterialIcons style={styles.MyReviewIcon} name="delete-outline" />
                        {/* <Text style={styles.TryAgainBtnText}>Try Again</Text> */}
                      </Pressable>
                    </View>
                  </View>

                  

            </View>

            <View style = {styles.ReviewCard}>
                  <View style = {styles.ReviewCardHeader}>
                    <FontAwesome style={styles.CompanyIcon} name="building-o" />
                    <Text style = {styles.ReviewerName}>Coffe Bean </Text>
                    <Text style = {styles.ReviewDate}>1 Month Ago</Text>
                  </View>

                  <Text style = {styles.ReviewDesc}>Labore sunt veniam amet est. Minim nisi dolor eu ad incididunt cillum elit ex ut. </Text>
                
                <View style={styles.ReviewCardFooter}>
                  <View style={styles.rating}>
                                <Star score={5} style={styles.starStyle} />
                  </View>

                    <View style={styles.MyReviewBtnFlex}>
                    <UpdateFeedbackModel />
                      <Pressable
                        style={styles.MyReviewDelBtn}
                        onPress={() => navigation.navigate('MyReviewList')} >
                        <MaterialIcons style={styles.MyReviewIcon} name="delete-outline" />
                        {/* <Text style={styles.TryAgainBtnText}>Try Again</Text> */}
                      </Pressable>
                    </View>
                  </View>

                  

            </View>

            
        </ScrollView>
        </View>:<NoInternet setIsInternet={setIsInternet}/>}
    </View>
    
  );
};

export default MyReviewList;



