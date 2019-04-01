import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  Button
} from "react-native";
// import { Container } from './styles';
import logo from "../../assets/murdock.png";
import LoginForm from "./LoginForm";

export default class Login extends Component{

  static navigationOptions ={
    header:null
  }
  render(){
    
      return(
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={logo} />
          <Text style={styles.title}> Murdock App</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm /> 
        <TouchableOpacity style={styles.buttonContain}>
        <Text style={styles.buttonText} onPress={() => this.props.navigation.push('Register')}>Registrar</Text>
        </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      )};
 }

const styles = StyleSheet.create({
  containerRegister: {
    
  },

  container: {
    flex: 1,
    backgroundColor: "#cc3333"
  },

  logo:{
    width:100,
    height:100
  }
  ,
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },

  title: {
    color: "#fff",
    marginTop: 10,
    width: 160,
    textAlign: "center",
    fontSize:20,
    opacity: 0.9
  },
  buttonContain: {
    backgroundColor: "#8c7ae6",
    paddingVertical: 10,
    marginBottom: 20,
    marginLeft:50,
    marginRight:50,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
},
  
});

