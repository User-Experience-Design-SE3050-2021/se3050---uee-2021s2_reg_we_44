import React, { useState ,useEffect} from "react";
import { Alert,SafeAreaView, Modal, StyleSheet,StatusBar,Dimensions, TextInput ,Text, Pressable, View,Animated,TouchableHighlight } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

const {width , height} = Dimensions.get("window")

const UpdateFeedbackModel = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, onChangeText] = React.useState("");
  const [CheckBtn, SetCheckBtn] = React.useState(false);
  const [starName, setStarName] = React.useState(["star","star","star","star","star"]);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  const array=[5];


 const onStarRatingPress =(rating) => {
    console.log(starName[1])
    for (let i=0;i<5;i++){
        if(i<=rating){
            array[i]="star"
        }else{
            array[i]="star-o"
        }
    }
    setStarName(array);
  }

  const onCheckBtnPress =(res) => {
    console.log(res)
    SetCheckBtn(!CheckBtn)
    
  }

  useEffect(() => {
    
  }, [starName]);

  return (
  
  <View style={styles.centeredViewMain}>
      
      { modalVisible ? <StatusBar backgroundColor="rgba(0,0,0,0.5)" barStyle={'light-content'} /> : 
      <StatusBar backgroundColor={"#F6F6F9"} barStyle={'dark-content'} />}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        animationIn='slideInUp'
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
        <View style={styles.modelViewBackground}>
          <View style={styles.modalView}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Update Feedback</Text>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)} >
                     {/* <Text style={styles.textStyle}>Hide Modal</Text> */}
                    <Ionicons style={styles.ModalCloseIcon} name="ios-close"/>
                </Pressable>
              </View>

                <SafeAreaView>
                    <View style={styles.nameFlex}>
                    <Text style={styles.InputLable}>Name</Text> 
                    
                    </View>
                    {/* <TextInput style={styles.InputName} onChangeText={onChangeText}   placeholder="Name" /> */}
                    <Text style={styles.NameLable}>Arina Heliex</Text> 

                    <Text style={styles.InputLable}>Description</Text>
                    <TextInput style={styles.InputDesc} onChangeText={onChangeText}   placeholder="Don't be shy, tell us more" 
                    value ='Labore sunt veniam amet est. Minim nisi dolor eu ad incididunt cillum elit ex ut.' multiline={true} numberOfLines={5} />
                
                    <Text style={styles.InputLable}>Rating</Text>
                    
                    <View style={styles.StarRating} >
                       <FontAwesome style={styles.StarIcon} name={starName[0]}  onPress={() => onStarRatingPress(0)} />
                       <FontAwesome style={styles.StarIcon} name={starName[1]} onPress={() => onStarRatingPress(1)}/>
                       <FontAwesome style={styles.StarIcon} name={starName[2]} onPress={() => onStarRatingPress(2)}/>
                       <FontAwesome style={styles.StarIcon} name={starName[3]} onPress={() => onStarRatingPress(3)}/>
                       <FontAwesome style={styles.StarIcon} name={starName[4]} onPress={() => onStarRatingPress(4)}/>
                    </View>
                    
                    <View style={styles.Anonymous}>
                    
                             <CircleCheckBox   style={styles.InputSwitch} checked={CheckBtn}  onToggle={(checked) => onCheckBtnPress(checked)}
                             labelPosition={LABEL_POSITION.RIGHT}
                             outerColor="#d3d3d3"
                             innerColor ="#3d3d3d"
                             />
                             
                     <Text style={styles.InputLableSmall}>Anonymous</Text>
                     {CheckBtn ? 
                     <Text style={styles.MsgLable}>Your name will be showed as Ma***</Text>
                     : <Text style={styles.MsgLable}></Text>
                     } 
                    </View>
                       

                </SafeAreaView>

                <Pressable
                    style={styles.SaveButton}
                    onPress={() => console.log('Pressed')} >
                     <Ionicons style={styles.SaveIcon} name="ios-add-circle-outline" />
                     <Text style={styles.SaveBtnText}>UPDATE FEEDBACK</Text>
                </Pressable>

                
          </View>
          </View>
        </View>
      </Modal>



      {/* <Pressable
        style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}


                   <Pressable
                     style={styles.MyReviewEditBtn}
                     onPress={() => setModalVisible(true)} >
                     <Feather style={styles.MyReviewIcon} name="edit-3" />
                  </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({

    MyReviewEditBtn:{
        width:60,
        height:42,
        borderRadius:15,
        backgroundColor:"#458EFC",
        borderColor:'#458EFC', 
        borderWidth:1,
        overflow: 'hidden',
        shadowColor: "black",
        shadowRadius: 10,
        flexDirection:"row",
        justifyContent:"center",
        alignItems: 'center',
        marginTop:10,
        marginRight:5
      }, 
      MyReviewIcon:{
        color:"#F6F6F9",
        fontSize:25,
      },
    modelViewBackground: {
    backgroundColor:"rgba(0,0,0,0.5)",
    width:width,
    height:height,
    
   
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    marginTop: 0,
   
  },
  modalView: {
    width:width,
    height:550,
    backgroundColor: "#FFFEFE",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position:"absolute",
    bottom:0,
    zIndex: 2,
  },
  button: {
    borderRadius: 8,
    elevation: 5
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "white",
    alignSelf:"flex-end",
    marginRight:25,
    marginBottom:14
  },
  ModalCloseIcon:{
    fontSize:25,
    color:"#555555",
  },
  modalHeader:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    width:width,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: "left",
    marginLeft:20,
    marginTop:25,
    fontFamily:"Raleway-SemiBold",
    fontSize:20
  },
  SaveButton:{
    width:220,
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
    marginTop:10 
  },
  SaveIcon:{
    color:"#F6F6F9",
    fontSize:30,
  },
  SaveBtnText:{
    fontFamily: 'Raleway-Bold',
    fontWeight:"700",
    fontSize:15,
    textAlign: 'center',
    paddingLeft:6,
    color:"#F6F6F9",
  },
  InputName:{
    height: 47,
    width:width-70,
    margin: 12,
    borderWidth: 1,
    borderRadius:8,
    borderColor:"#E8E8E8",
    padding: 10,
    backgroundColor:"#F6F6F6",
    marginBottom:12,
    color:"#3C3B3B",
    fontSize:16,
    fontFamily:"Raleway-Meadium",
  },
  InputDesc:{
    height: 120,
    width:width-60,
    margin: 12,
    borderWidth: 1,
    borderRadius:8,
    borderColor:"#E8E8E8",
    padding: 10,
    backgroundColor:"#F6F6F6",
    marginBottom:12,
    textAlignVertical: 'top',
    color:"#3C3B3B",
    fontSize:16,
    fontFamily:"Raleway-Meadium",
  },
  InputLable:{
    marginLeft: 12,
    marginTop:5,
    color:"#555555",
    fontSize:17,
    fontFamily:"Raleway-Meadium",
  },
  StarRating:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  StarIcon:{
    fontSize:24,
    marginLeft:10,
    color:"#FFC22B"

  },
  Anonymous:{
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
    marginLeft: 15,
    marginTop:20,
    marginBottom:10
  },
  InputSwitch:{
    marginLeft: 10,
    marginTop:15,
  },
  InputLableSmall:{
    marginLeft: 8,
    color:"#555555",
    fontSize:16,
    fontFamily:"Raleway-Meadium",
    marginBottom:3
  },
  MsgLable:{
    marginLeft: 10,
    color:"#848484",
    fontSize:12,
  },
  nameFlex:{
      flexDirection:"row",
      justifyContent:"space-between"
      
  },
  NameLable:{
    fontSize:18,
    textAlign:"left",
    marginLeft:5,
    padding:10,
    fontFamily: "Raleway-Bold",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 19,
    color:"#333333"
  }
});

export default UpdateFeedbackModel;