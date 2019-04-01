import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StatusBar
} from "react-native";

export default class RegisterForm extends Component {
  render(){ 
  return(
      <View style={styles.container}>
        <StatusBar barStyle="Light-content" />
        <TextInput 
          placeholder="Nome"
          placeholderTextColor="#FFFF"
          returnKeyType="next"
          autoCapitalize="none"
          onSubmitEditing={()=>this.emailInput.focus()}
          autoCorrect={false}
          style={styles.input}

        />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#FFFF"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          ref={(input)=>(this.emailInput = input)}
        />

        <TextInput
          placeholder="Senha"
          placeholderTextColor="#FFFF"
          returnKeyLabel="next"
          secureTextEntry
          onSubmitEditing={()=>this.passwordConfirmation.focus()}
          style={styles.input}
          ref={(input) => (this.passwordInput = input)}
        />


      <TextInput
          placeholder="Confirmar Senha"
          placeholderTextColor="#FFFF"
          returnKeyLabel="go"
          secureTextEntry
          style={styles.input}
          ref={(input) => (this.passwordConfirmation = input)}
        />

        <TouchableOpacity style={styles.buttonContain}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        
       
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
    fontSize:16
  },
  buttonContain: {
    backgroundColor: "#e55039",
    paddingVertical: 10
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "700"
  },
 


});

