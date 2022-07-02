import { View, Text, ImageBackground, StyleSheet, Pressable, Image, TextInput, onPress } from 'react-native'
import React from 'react'
import topBg from '../assets/signinBg.png'
import Button from '../components/button'

const Login = ({setScreen}) => {
  return (
    <View style={styles.container}>
        <ImageBackground style={styles.bgImage} source={topBg}>
           
            <View style={styles.headerContainer}>
            <Pressable style={styles.leftIcon} onPress={() => setScreen(2)} >
            <Image source={require('../assets/left-icon.png')}/>
            </Pressable>
                <Text style={styles.headerTitle}>
                    LOG IN
                </Text>


            </View>
            <Text style={styles.emailText}> LOG IN WITH EMAIL</Text>

            <View>
                <TextInput style={styles.emailInput} placeholder='Email address'>
                </TextInput>
                <TextInput style={styles.emailInput} placeholder='Password'>
                </TextInput>


            </View>
            <Pressable style={styles.btnLogin} onPress={() => setScreen(5)} >
                <Text style={[styles.btnText, styles.white]}> LOG IN</Text>
            </Pressable>


        </ImageBackground>
    </View>
)
}


const styles = StyleSheet.create({

  // Text colors


  white: {
      color: 'white'
  },
  grey: {
      color: 'grey'
  },


  // Text colors
  headerContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      top: 190,
      marginBottom: 70,
  },
  container: {
      flex: 1,
      backgroundColor: "white"

  },
  bgImage: {
      justifyContent: 'center',
      alignItems: "center",
      height: 300,
      width: 400,
  },
  headerTitle: {
      fontSize: 30,
      fontWeight: 'bold',
      padding: 10,
      margin: 10,

  },
  leftIcon:{
      top:-66,
      right:150,
      backgroundColor:'white',
      height:50,
      width:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:25,
  },
  fbIcon: {
      height: 18,
      width: 10,

  },
  googleIcon: {
      height: 18,
      width: 19,
      marginLeft: 10,

  },

  btnFacebook: {
      height: 60,
      width: 350,
      backgroundColor: '#7583CA',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: "center",
      borderRadius: 35,
      marginTop: 10,
  },
  btnGoogle: {
      height: 60,
      width: 350,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: "center",
      borderRadius: 35,
      marginTop: 10,
      borderWidth: 1,
      borderColor: 'grey',

  },
  btnLogin: {
      height: 60,
      width: 350,
      backgroundColor: '#8E97FD',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: "center",
      borderRadius: 35,
      top:250,

  },
  btnText: {
      paddingLeft: 10,
      paddingRight: 10,
      fontSize: 13,
  },
  emailText: {
      top: 139,
  },
  emailInput: {
      top: 180,
      height: 60,
      width: 350,
      backgroundColor: '#F2F3F7',
      borderRadius: 10,
      padding: 15,
      marginTop: 10,
  },
  passwordInput: {
      top: 180,
      height: 60,
      width: 350,
      backgroundColor: '#F2F3F7',
      borderRadius: 10,
      padding: 15,
  }
})

export default Login