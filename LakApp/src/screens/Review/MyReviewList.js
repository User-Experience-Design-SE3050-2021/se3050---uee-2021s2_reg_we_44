
import React,{useEffect,useState} from 'react';
import { StyleSheet, View,ScrollView, Dimensions,Text,Pressable,ToastAndroid } from 'react-native';
import Star from 'react-native-star-view';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TopNav from './TopNav';
import UpdateFeedbackModel from './UpdateFeedbackModel';
import EmptyReviews from './EmptyReviews';
import NoInternet from '../Common/NoInternet'
import NetInfo from "@react-native-community/netinfo";
import { FacebookLoader, InstagramLoader } from 'react-native-easy-content-loader';
import CalcDate from '../Common/CalcDate';
import api from '../../api';

const {width , height} = Dimensions.get("window")

 const MyReviewList = ({navigation}) => {

  const [toggle, setToggle] = React.useState(false);
  const [IsInternet, setIsInternet] = useState();
  const [rows, setRows] = React.useState(true);
  const [isLoading,setIsLoading] = useState(true)
  const [IsData, setIsData] = React.useState(true)
  

  useEffect(() => {
    NetInfo.fetch().then(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      setIsInternet(state.isConnected)
    });
  }, [])




useEffect(() => {
  setIsLoading(true)
  api.get(`/feedback/last/`)
    .then((res) => {
      if(res.data){
        setRows(res.data);
        setIsLoading(false)
      }else{
        setIsData(false);
        setIsLoading(false)
      }
     
     
    })
    .catch((err) => {
      console.log(err);
    });

}, [IsInternet,toggle]);

const handleDelete =(id)=>{
  setIsLoading(true)
  api.delete(`feedback/delete/${id}`)
  .then((res) => {
    setToggle(!toggle)
    setIsLoading(false)
    ToastAndroid.showWithGravityAndOffset(
      "Successfully Deleted",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
    
  })
  .catch((err) => {
    console.log(err);
  });
}

    

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
            elevation: 7,
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
          },
          containerBody:{
            height:height-100,
            paddingVertical:20
          },
          hrLine:{
            width:268,
            height:1,
            borderColor: "#e3e3e3",
            borderWidth:0.8,
            alignSelf:"center",
            marginTop:30,
            marginBottom:10
        },
        
        
      })
      
    
  return (
    
    <View style={styles.container}>
      {IsInternet ?
      <View>
        <TopNav  Navtitle={"My Reviews"}  NavBarColor="#F6F6F9"  NavBarFontColor="black" navigation={navigation}/>
       

       
        <View style={styles.containerBody}>
        {rows.length > 0 && <Text style={styles.ReviewListTitle} >Reviews You Have Added ({rows.length})</Text>}
          <View style = {styles.fbLoader}>
                {isLoading && <FacebookLoader  active />}

                {isLoading && <FacebookLoader  active />}

                {isLoading && <FacebookLoader  active />}

                {isLoading && <FacebookLoader  active />}
              </View>
              {rows.length >0  ?
            <ScrollView style={styles.scrollView} nestedScrollEnabled = {true}>  
            

                {rows.length > 0 && rows.map((row) => {
                
                return (

                
                <View style = {styles.ReviewCard} key={row._id}>
                      <View style = {styles.ReviewCardHeader}>
                        <FontAwesome style={styles.CompanyIcon} name="building-o" />
                        <Text style = {styles.ReviewerName}>{row.companyName}</Text>
                        <CalcDate  DateC={row.date.split("T", [1]) .pop() .split("-", 3)} StyleS={true} />
                      </View>

                      {row.description !="" && <Text style = {styles.ReviewDesc}>{row.description}</Text>}
                    
                    <View style={styles.ReviewCardFooter}>
                      <View style={styles.rating}>
                                    <Star score={row.rating} style={styles.starStyle} />
                      </View>

                        <View style={styles.MyReviewBtnFlex}>
                        <UpdateFeedbackModel Data={row} toggle={toggle}  setToggle={setToggle}/>
                          <Pressable
                            style={styles.MyReviewDelBtn}
                            onPress={() => handleDelete(row._id)} >
                            <MaterialIcons style={styles.MyReviewIcon} name="delete-outline" />
                            {/* <Text style={styles.TryAgainBtnText}>Try Again</Text> */}
                          </Pressable>
                        </View>
                      </View>

                      

                </View>)})}
                <View  style = {styles.hrLine} />
               

                
            </ScrollView>:
        <EmptyReviews/>}
        </View>
        </View>:<NoInternet setIsInternet={setIsInternet}/>}
    </View>
    
  );
};

export default MyReviewList;



