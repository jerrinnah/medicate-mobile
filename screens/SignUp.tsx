import React from 'react'
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Image, Pressable, } from "react-native";
import bgImage from "../assets/banner-bg.png";
import Clicker from '../components/button';
import { useState } from 'react';

const SignUp = ({setScreen}) => {


  return (
    <View style={styles.container}>
      <ImageBackground style={styles.bgImage} source={bgImage}>
        <Image style={styles.logo} source={require("../assets/logo-full.png")} />
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}> We are what we do</Text>
          <Text style={styles.textPara}>
            Thousand of people are usign silent moon for smalls meditation{" "}
          </Text>
        </View>

       

        <Pressable onPress={() => setScreen(2)}  style={[styles.btn]}>
             <Text style={ styles.white}> SIGN UP</Text>
          </Pressable>
        <View style={styles.signupButton}>
          <Text style={[styles.textPara, styles.footerText, styles.grey]}>
            ALREADY HAVE AN ACCOUNT? LOG IN
          </Text>
        </View>





      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({

  // TEXT COLOR
  grey: {
    color: 'grey'
  },
  white:{
    color:'white'
  },
  // TEXT COLOR ENDS
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bgImage: {
    height: 500,
    width: 400,
    bottom: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    bottom: 40,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 350,

  },
  textTitle: {
    fontSize: 26,
    fontWeight: '600',

  },
  textPara: {
    textAlign: 'center'
  },
  signupButton: {
    top: 450,
  },
  footerText: {
    paddingTop: 10,
    fontSize: 10,
  },
  click: {
    top: 200,
  },
  btn:{
    top:420,
    height:50,
    width:300,
    backgroundColor:'#8E97FD',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
  }
});


export default SignUp