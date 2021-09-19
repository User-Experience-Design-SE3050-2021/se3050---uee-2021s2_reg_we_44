import React from "react";
import { ImageBackground, StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({navigation}) => (
  <View style={styles.container}>
    <ImageBackground source={require("../../assest/log.png")} resizeMode="cover" style={styles.image}>
      <Text style={styles.text1}>Welcome</Text>
      <Text style={styles.text2}>Back</Text>

      <View style={styles.body}>

        <View style={styles.input}>
          <Icon name="envelope" color="#7D86F5" size={24} />
          <TextInput
            style={{ paddingHorizontal: 10, }}
            placeholder="Enter your email"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.input}>
          <Icon name="lock" color="#7D86F5" size={30} />
          <TextInput
            style={{ paddingHorizontal: 14 }}
            placeholder="Enter a password"
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity style={[styles.button, { marginBottom: 12 }]}     
          onPress={()=>{navigation.navigate('Home')}}  
        >
          <Text style={styles.btnText}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.hrm}>
          <View style={styles.hr} />
          <View>
            <Text style={{ width: 50, textAlign: 'center' }}>or</Text>
          </View>
          <View style={[styles.hr, { marginRight: 28, marginLeft: 0 }]} />
        </View>
        <TouchableOpacity style={[styles.button, { backgroundColor: "#fff", borderColor: "#8C8B8B", borderWidth: 1, marginTop: 20 }]}
          onPress={()=>{navigation.navigate('SignUp')}}  
        >
          <Text style={[styles.btnText, { color: "#8C8B8B" }]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    height: 40,
    backgroundColor: "#fff",
    marginHorizontal: 24,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#8C8B8B",
  },
  body: {
    flex: 1,
    marginTop: 8,
    marginBottom: 50,
    justifyContent: "flex-end"
  },
  image: {
    flex: 1,
  },
  text1: {
    paddingTop: 50,
    paddingLeft: 24,
    paddingBottom: 5,
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "left",
  },
  text2: {
    color: "white",
    paddingLeft: 24,
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "left",
  },
  button: {
    marginTop: 10,
    backgroundColor: '#7D86F5',
    textAlign: "center",
    height: 40,
    borderRadius: 10,
    marginLeft: 24,
    marginRight: 24
  },
  btnText: {
    paddingTop: 5,
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  },
  hrm: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hr: {
    flex: 1,
    height: 1,
    backgroundColor: "#8C8B8B",
    marginLeft: 28
  }
});

export default Login;