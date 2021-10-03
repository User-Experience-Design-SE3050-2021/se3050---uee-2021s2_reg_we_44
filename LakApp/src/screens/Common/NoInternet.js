
import React,{useEffect,useState} from 'react';
import { StyleSheet, View, Dimensions,Text,Image ,Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NoInternetImage from '../../assest/Images/noconnection.jpeg'
import NetInfo from "@react-native-community/netinfo";

const {width , height} = Dimensions.get("window")

 const NoInternet = ({setIsInternet}) => {


  useEffect(() => {
   
  }, [])


  const checkInternet =()=>{
      NetInfo.fetch().then(state => {
      setIsInternet(state.isConnected)
    });
  }

    const styles = StyleSheet.create({
        container: {
          alignItems: 'center',
          backgroundColor:'#F6F6F9',
          width:width,
          height:height
        },
        textInput: {
          height: 40,
          width: '90%',
          borderColor: 'gray',
          borderWidth: 1,
          marginTop: 8
        },
        image:{
            width:width-70,
            height:200,
            marginTop:100
        },
        NoInternetTitle:{
            fontSize:24,
            fontFamily:"Raleway-SemiBold",
            fontWeight:"600",
            shadowOffset: {width : 0.5,height:0.5},
            shadowOpacity:0.5,
            elevation: 5,
        },
        NoInternetDesc:{
            fontSize:16,
            fontFamily:"Raleway-Regular",
            fontWeight:"400",
            width:300,
            marginTop:15,
            color:"#636262"
        },
        TryAgainBtn:{
            width:180,
            alignSelf:"center",
            height:52,
            marginRight:20,
            height:52,
            borderRadius:10,
            margin:8,
            backgroundColor:"#5956E9",
            borderColor:'#5956E9', 
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
            marginTop:30 
          },
          TryAgainIcon:{
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
        
      })
      
    
  return (
    <View style={styles.container}>
        <Image style = {styles.image} source = {NoInternetImage}/>
        <Text style = {styles.NoInternetTitle}>No internet Connection</Text>
        <Text style = {styles.NoInternetDesc}>Your internet connection is currently not available please check or try again.</Text>
       

                 <Pressable
                    style={styles.TryAgainBtn}
                    onPress={() => checkInternet()} >
                     <Ionicons style={styles.TryAgainIcon} name="ios-refresh" />
                     <Text style={styles.TryAgainBtnText}>Try Again</Text>
                </Pressable>

    </View>
    
  );
};

export default NoInternet;



