/* eslint-disable */
import React, { useState } from 'react';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {successImage} from './../../../assets/images/success.jpg'
import { Backdrop } from "react-native-backdrop";
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';
import { Hoshi } from 'react-native-textinput-effects';
import { Kohana } from 'react-native-textinput-effects';
import { useValidation } from 'react-native-form-validator';
import api from '../../api';
import {
    Dimensions ,
    Alert, 
    Modal,
    Pressable,
  ImageBackground,
  TouchableOpacity ,
  TextInput,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Image,
  TouchableHighlight,
  ToastAndroid
} from 'react-native';



import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import TopNav from '../Review/TopNav'

const {width , height} = Dimensions.get("window")

const styles = StyleSheet.create({
  errorMsg: {
    fontFamily: 'Raleway-Semibold',
    color: "red"
  },
    input: {
        height: 45,
        marginLeft: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
      },
      inputMultiline: {
        display: 'flex',
        alignItems: 'flex-start',
        height: 100,
        marginLeft: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
      },
      label: {
        marginTop: 20,
        margin: 12,
        fontFamily: "Raleway-Bold",
        fontSize: 22,
        fontWeight:'normal',
    
      },
      baseText: {
        fontFamily: "Raleway-Bold",
        fontSize: 40,
        marginTop:40,
        color: '#fff',
      },
      sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
      },
      sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
      },
      sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
      },
      highlight: {
        fontWeight: '700',
      },
      AddBtn:{
        width:120,
        alignSelf:"center",
        height:52,
        marginRight:20,
        marginTop:20,

    },
    AddBtnContainer:{
        backgroundColor: '#5956E9',
        width:120,
        height:52,
        borderRadius:10,
        margin:8,
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
    AddBtnText:{
        color:"#fff",
        fontFamily: 'Raleway-Bold',
        fontWeight:"bold",
        fontSize:15,
        textAlign: 'center',
        paddingLeft:6,
        },
    AddIcon:{
       fontSize:33,
       color:"#fff",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        justifyContent: "center",
        alignItems: "center",
        width:370,
        height:200,
        margin: 20,
        marginTop: 220,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 25,
        textAlign: "center",
        fontFamily: 'Raleway-Regular',
        fontWeight:"700",
        fontSize:22,
      },
      AddReviewBtn:{
        width:230,
        alignSelf:"flex-end",
        height:52,
        marginRight:20,
        

    },
    AddReviewBtnContainer:{
        width:150,
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
    TopImage:{
      height:100,
      position:'absolute',
      top: 100,
   },
  })
  
const CompanyAddForm = ({ navigation }) => {

    const [number, onChangeNumber] = useState(null);
    const [cname, onChangeCName] = useState(null);
    const [address, onChangeAddress] = useState(null);
    const [description, onChangeDescription] = useState(null);
    const [selectedValue, setSelectedValue] = useState("Restaurant");
    const [image, setImage] = useState('https://www.linkpicture.com/q/Placeholder.jpg');
    const [modalVisible, setModalVisible] = useState(false);
    
    const [visible, setVisible] = useState(false);
  
  const handleOpen = () => {
    setVisible(true);
  };
  
  const handleClose = () => {
    setVisible(false);
  }
    const backgroundStyle = {
      backgroundColor: '#5956E9',
  
    };
    const choosePhotoFromLibrary = () => {
      ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
        compressImageQuality: 0.7
      }).then(image => {
        console.log("image",image);
        setImage(image.path);
        this.bs.current.snapTo(1);
      });
    }

    const handleSubmit = () => {
      const company = {

        companyName: cname,
        address: address,
        contactNo: number,
        category: selectedValue,
        images: [image],
        description: description,
      }
         console.log(company)
         
        api.post('/company/create/', company).then(function (response) {
          console.log(response.data);
          if (response.data.message) {
              alert.info(response.data.message);
          }
          setModalVisible(true)
          onChangeCName(null)
          onChangeAddress(null)
          onChangeDescription(null)
          onChangeNumber(null)
    })
    .catch(function (error) {
        console.log(error);
    })


}

    const { validate, isFieldInError, getErrorsInField, getErrorMessages } =
    useValidation({
      state: { cname, number, address, description },
    });

    const _onPressButton = () => {
      if (!cname || !number || !address || !description)
        ToastAndroid.showWithGravityAndOffset(
          "Please fill all the fields",
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50
        );
      validate({
        cname: { minlength: 3, },
        address: {minlength: 3, },
        number: { numbers: true },
        description: { minlength: 6 },
      });
     handleSubmit()
    };

    function navigateCompanyList(){
      navigation.navigate('Business')
      setModalVisible(!modalVisible)
    }
    return(
      
      
    <SafeAreaProvider style={backgroundStyle}>
      <TopNav navigation={navigation}    NavBarColor="#5956E9"  NavBarFontColor="#fff"/>
        <View
            style={{
                flexDirection: "row",
                height: 180,
                padding: 20,
                marginTop: -65,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
              <ImageBackground
                    source={{
                        uri: 'https://www.linkpicture.com/q/Menu-2_1.png',
                    }}
                    style={{ position:'absolute',top:50, height: 130,width:400 }}
                    imageStyle={{ }}>
                    
                </ImageBackground>
            <Text style={styles.baseText}>
                ADD NEW COMPANY
            </Text>
        </View>
        <ScrollView
        
            contentInsetAdjustmentBehavior="automatic"
            style={backgroundStyle}
            style={{
                backgroundColor: '#fff',
                height: 800,
                padding: 20,
                marginTop: 0,
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,

            }}>
          <Kohana
            style={{ backgroundColor: '#f9f9f9', borderRadius: 5,marginTop:18}}
            label={'Company Name'}
            iconClass={FontAwesomeIcon}
            iconName={'building-o'}
            iconColor={'#5956E9'}
            iconSize={32}
            inputPadding={16}
            labelStyle={{ color: '#000', fontSize: 22,fontWeight:'normal',fontFamily: 'Raleway-Bold' }}
            inputStyle={{ color: '#000', fontSize: 18 }}
            iconContainerStyle={{ padding: 20 }}
            onChangeText={onChangeCName}
            value={cname}
            useNativeDriver
          />
          {isFieldInError('cname') &&
          getErrorsInField('cname').map(errorMessage => (
            <Text style={styles.errorMsg}>Please enter a valid Name</Text>
          ))}
          <Kohana
            style={{ backgroundColor: '#f9f9f9', borderRadius: 5,marginTop:18}}
            label={'Address'}
            iconClass={FontAwesomeIcon}
            iconName={'envelope-square'}
            iconColor={'#5956E9'}
            iconSize={38}
            inputPadding={16}
            labelStyle={{ color: '#000', fontSize: 22,fontWeight:'normal',fontFamily: 'Raleway-Bold'  }}
            inputStyle={{ color: '#000', fontSize: 18 }}
            iconContainerStyle={{ padding: 20 }}
            onChangeText={onChangeAddress}
            value={address}
            useNativeDriver
          />
          {isFieldInError('address') &&
          getErrorsInField('address').map(errorMessage => (
            <Text style={styles.errorMsg}>Please enter a valid Address</Text>
          ))}
   <Kohana
            style={{ backgroundColor: '#f9f9f9', borderRadius: 5,marginTop:18 }}
            label={'Contact No'}
            iconClass={FontAwesomeIcon}
            iconName={'mobile'}
            iconColor={'#5956E9'}
            iconSize={38}
            inputPadding={16}
            labelStyle={{ color: '#000', fontSize: 22 ,fontWeight:'normal',fontFamily: 'Raleway-Bold' }}
            inputStyle={{ color: '#000', fontSize: 18 }}
            iconContainerStyle={{ padding: 20 }}
            onChangeText={onChangeNumber}
            value={number}
            useNativeDriver
          />
            {isFieldInError('number') &&
          getErrorsInField('number').map(errorMessage => (
            <Text style={styles.errorMsg}>Please enter a valid Phone Number</Text>
          ))}
               
                <Text style={styles.label}>
                    Category
                </Text>
                <Picker
                    selectedValue={selectedValue}
                    fullWidth
                    style={{ height: 50, backgroundColor: '#F6F6F6', marginLeft: 12,fontWeight:'normal',  }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    mode={'dropdown'}
                >
                    <Picker.Item style={{ fontSize: 18}} fullWidth label="Restaurant" value="restaurant" />
                    <Picker.Item   style={{ fontSize: 18}}fullWidth label="Hotel" value="hotel" />
                    <Picker.Item  style={{ fontSize: 18}} fullWidth label="Grocery" value="grocery" />
                    <Picker.Item  style={{ fontSize: 18}} fullWidth label="Other" value="other" />
                </Picker>
                

                <Text style={styles.label}>
                    Image
                </Text>
                <Pressable
              
              onPress={() => choosePhotoFromLibrary()}
            >
                <ImageBackground
                    source={{
                        uri: image,
                    }}
                    style={{ borderRadius: 15,height: 300, width: 300,display:'flex' , marginLeft:30, marginBottom:30, justifyContent: 'center', backgroundColor:'#808080' }}
                    imageStyle={{ borderRadius: 15 }}>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                    </View>
                </ImageBackground>
               </Pressable>
               <Kohana
            style={{ backgroundColor: '#f9f9f9', borderRadius: 5,marginTop:18 }}
            label={'Description'}
            iconClass={FontAwesomeIcon}
            iconName={'file-text-o'}
            iconColor={'#5956E9'}
            iconSize={32}
            inputPadding={16}
            labelStyle={{ color: '#000', fontSize: 22,fontWeight:'normal',fontFamily: 'Raleway-Bold'  }}
            inputStyle={{ color: '#000', fontSize: 18 }}
            iconContainerStyle={{ padding: 20 }}
            onChangeText={onChangeDescription}
            value={description}
            useNativeDriver
          />
           {isFieldInError('description') &&
          getErrorsInField('description').map(errorMessage => (
            <Text style={styles.errorMsg}>Please enter a valid Description</Text>
          ))}      
                
      <TouchableHighlight underlayColor="transparent"   onPress={() => _onPressButton()} style={styles.AddBtn}>
            
            <View style={styles.AddReviewBtnContainer}>
                        <Ionicons style={styles.FeedbackAddIcon} name="ios-add-circle-outline" />
                        <Text style={styles.AddReviewBtnText}>ADD NEW</Text>
                    </View>
     </TouchableHighlight>



                <Pressable onPress={() => navigateCompanyList()} style={styles.centeredView}>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={{backgroundColor:"rgba(0,0,0,0.8)",height:height}}>
                                <View style={styles.modalView}>

                                    <Pressable  onPress={() => navigateCompanyList()} 

                                        
                                    >
                                        <ImageBackground
                                            source={{
                                                uri: 'https://www.linkpicture.com/q/success.jpg',
                                            }}
                                            style={{ height: 100, width: 100, display: 'flex', justifyContent: 'center' }}
                                        >
                                            <View
                                                style={{
                                                    flex: 1,
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                }}>
                                            </View>
                                        </ImageBackground>

                                    </Pressable>
                                    <Text style={styles.modalText}>You have Succesfully added your company !</Text>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </Pressable>

       

        <View
            style={{
               
                flexDirection: "row",
                height: 80,
                padding: 20,
                marginTop: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>

        </View>

        </ScrollView>
       
    </SafeAreaProvider>



)
                };

export default CompanyAddForm;