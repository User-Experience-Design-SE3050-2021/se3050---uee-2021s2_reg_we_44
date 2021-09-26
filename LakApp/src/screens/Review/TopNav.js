
import React from 'react';
import { StyleSheet, StatusBar,View, Dimensions,Text,Image ,Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const {width , height} = Dimensions.get("window")

 const TopNav = ({navigation,Navtitle,NavBarColor,NavBarFontColor}) => {


    const styles = StyleSheet.create({
        container: {
          backgroundColor:NavBarColor,
          width:width,
          height:90,
          flexDirection:"row",
          justifyContent:"flex-start",
          alignItems: 'center', //Centered vertically
          paddingTop:20,
          paddingLeft:9,
         
          
        },
        HeaderTitle: {
            fontFamily:"Raleway-Bold",
            fontSize:24,
            fontWeight:"700",
            textAlignVertical:"center",
            marginLeft:9,
            marginBottom:0,
            color:NavBarFontColor
        },
       
        BackIcon:{
            color:"#000000",
            fontSize:35,
            marginTop:6
          },
         
        
      })
      
    
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={NavBarColor} barStyle={'dark-content'} />
        <Ionicons style={styles.BackIcon} name="ios-arrow-back" onPress={() => navigation.goBack(null)}  />
        <Text style = {styles.HeaderTitle}>{Navtitle}</Text>
    </View>
    
  );
};

export default TopNav;



