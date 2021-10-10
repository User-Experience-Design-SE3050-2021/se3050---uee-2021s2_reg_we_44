
import React from 'react';
import { StyleSheet, View, Dimensions,Text,Image } from 'react-native';
import TopNav from './TopNav';
import NoReview from '../../assest/Images/noreview.jpeg'

const {width , height} = Dimensions.get("window")

 const EmptyReviews = ({navigation}) => {


    

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
            width:width-200,
            height:250,
            marginTop:100
        },
        NoreviewTitle:{
            fontSize:21,
            fontFamily:"Raleway-Regular",
            fontWeight:"400",
            shadowOffset: {width : 0.5,height:0.5},
            shadowOpacity:0.5,
            elevation: 5,
        }
        
      })
      
    
  return (
    <View style={styles.container}>
        <Image style = {styles.image} source = {NoReview}/>
        <Text style = {styles.NoreviewTitle}>You haven’t add any review yet</Text>
       

    </View>
    
  );
};

export default EmptyReviews;



