
import React from 'react';
import { StyleSheet, View, Dimensions,Text,Image,TouchableHighlight } from 'react-native';
import TopNav from '../Review/TopNav';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NoCompany from '../../assest/Images/noCompany.png'

const {width , height} = Dimensions.get("window")

 const EmptyCompany = ({navigation}) => {


    

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
        },
        image:{
            width:width-80,
            height:240,
            marginTop:60
        },
        NoreviewTitle:{
            fontSize:21,
            fontFamily:"Raleway-Regular",
            fontWeight:"400",
            shadowOffset: {width : 0.5,height:0.5},
            shadowOpacity:0.5,
            elevation: 5,
            marginBottom:40
        },
        AddReviewBtn:{
            width:230,
            alignSelf:"center",
            height:52,
        },
        AddReviewBtnContainer:{
            width:220,
            height:52,
            borderRadius:10,
            margin:8,
            backgroundColor:"#D5D9FF",
            borderColor:'#D5D9FF', 
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
        
      })
      
    
  return (
    <View style={styles.container}>
        <TopNav navigation={navigation} Navtitle={"My Companies"} NavBarColor="#F6F6F9" NavBarFontColor="black" />
        <Image style = {styles.image} source = {NoCompany}/>
        <Text style = {styles.NoreviewTitle}>You haven’t add any company yet</Text>
       

        <View style={styles.AddButton} >
             <TouchableHighlight underlayColor="transparent" onPress={() => navigation.navigate('CompanyAddForm')} style={styles.AddReviewBtn}>
                <View style={styles.AddReviewBtnContainer}>
                    <Ionicons style={styles.FeedbackAddIcon} name="ios-add-circle-outline" />
                    <Text style={styles.AddReviewBtnText}>ADD MY COMPNAY</Text>
                </View>
            </TouchableHighlight>
        </View>

    </View>
    
  );
};

export default EmptyCompany;



