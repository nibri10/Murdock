import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StatusBar,
  Button
} from "react-native";


export default class LoginForm extends Component{
  
  render(){
    
    return(
      <View style={styles.container}>
        <StatusBar barStyle="Light-content" />

        <TextInput
          placeholder="Email"
          placeholderTextColor="#FFFF"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
        />

        <TextInput
          placeholder="Senha"
          placeholderTextColor="#FFFF"
          returnKeyLabel="go"
          secureTextEntry
          style={styles.input}
          ref={(input) => (this.passwordInput = input)}
        />
        <TouchableOpacity style={styles.buttonContain}>
          <Text style={styles.buttonText}
           >Entrar</Text>
        </TouchableOpacity>
  
        <View>
         
        </View>
 
      </View>
    )};

}



const styles = StyleSheet.create({
  container: {
    padding: 50
  },

  input: {
    height: 40,
    backgroundColor: "#e55039",
    marginBottom: 20,
    color: "#fff",
    paddingHorizontal: 30,
    fontSize: 16
  },
  buttonContain: {
    backgroundColor: "#e55039",
    paddingVertical: 10
  },

  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
},


});
