import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  KeyboardAvoidingView,
  Text
} from "react-native";
import RegisterForm from './RegisterForm';


export default class Register extends Component {
  static navigationOptions ={
    header:null
  }
  render() {
    return (

      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.title}> Registar</Text>
        </View>
        <View style={styles.formContainer}>
          <RegisterForm />
        </View>
      </KeyboardAvoidingView>
    )
  };

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cc3333"
  },

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
    opacity: 0.9
  }
});



