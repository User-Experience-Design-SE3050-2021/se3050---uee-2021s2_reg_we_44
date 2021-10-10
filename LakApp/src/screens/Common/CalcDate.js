import React, { useState, useEffect } from "react";
import { 
  Alert,
  SafeAreaView, 
  Modal, 
  StyleSheet,
  StatusBar,
  Dimensions, 
  TextInput ,
  Text, 
  Pressable, 
  View,
  Animated,
  TouchableHighlight } from "react-native";

const CalcDate = ({ DateC,StyleS }) => {
  const [Day, setDay] = React.useState("");
  const [Year, setYear] = React.useState("");
  const [Month, setMonth] = React.useState("");

  let today = new Date();
  let past;

  const mmm = parseInt(DateC[1]);
  const ddd = parseInt(DateC[2]);
  const yyy = parseInt(DateC[0]);

  const calculateDays = () => {
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); 
    const yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
    past = mmm + "/" + ddd + "/" + yyy;

 
    if (yyy >= yyyy) {
      setYear(yyy - yyyy);
    } else {
      setYear(yyyy - yyy);
    }

    if (mmm >= mm) {
      setMonth(mmm - mm);
    } else {
      setMonth(mm - mmm);
    }

    if (ddd >= dd) {
      setDay(ddd - dd);
    } else {
      setDay(dd - ddd);
    }
  };

  useEffect(() => {
    calculateDays();
    

  }, []);

  return (
    <View>
      {StyleS ?
      <View>
        {Year > 0 && (
          <Text style = {styles.ReviewDate}>
            {ddd}/{mmm}/{yyy}{" "}
          </Text>
        ) }


        {Month > 1 && Year == 0 && (
          <Text style = {styles.ReviewDate}> {Month} months & </Text>
        )}

        {Month == 1 && Year == 0 && Day > 0 &&  (
          <Text style = {styles.ReviewDate}> {Month} month & </Text>
        )}
         {Month == 1 && Year == 0 && Day == 0 && (
          <Text style = {styles.ReviewDate}> {Month} month Ago </Text>
        )}

        {Day > 1 && Year == 0 && (
          <Text style = {styles.ReviewDate}> {Day} days Ago </Text>
        )}

        {Day == 1 && Year == 0 && (
          <Text style = {styles.ReviewDate}> {Day} day Ago </Text>
        )}

        {Day == 0 && Year == 0 && Month == 0 && <Text style = {styles.ReviewDate}> Today </Text> }
      </View>

      :

      <View>
        {Year > 0 && (
          <Text style = {styles.ReviewDateNoDesc}>
            {ddd}/{mmm}/{yyy}{" "}
          </Text>
        ) }


        {Month > 1 && Year == 0 && (
          <Text style = {styles.ReviewDateNoDesc}> {Month} months & </Text>
        )}

        {Month == 1 && Year == 0 && Day > 0 && (
          <Text style = {styles.ReviewDateNoDesc}> {Month} month & </Text>
        )}
         {Month == 1 && Year == 0 && Day == 0 && (
          <Text style = {styles.ReviewDate}> {Month} month Ago </Text>
        )}

        {Day > 1 && Year == 0 && (
          <Text style = {styles.ReviewDateNoDesc}> {Day} days Ago </Text>
        )}

        {Day == 1 && Year == 0 && (
          <Text style = {styles.ReviewDateNoDesc}> {Day} day Ago </Text>
        )}

        {Day == 0 && Year == 0 && Month == 0 && <Text style = {styles.ReviewDateNoDesc}> Today </Text> }
        
      </View>}
    </View>
  );
};
export default CalcDate;


const styles = StyleSheet.create({
  ReviewDateNoDesc:{
         textAlign: 'right',
         color:"#333333",
         fontFamily:"Raleway-Regular",
         fontSize:13,
         opacity:0.7,
         marginTop:-27
  },
  ReviewDate:{
    textAlign: 'right',
    color:"#333333",
    fontFamily:"Raleway-Regular",
    fontSize:13,
    opacity:0.7,
    marginTop:-5
},
})
