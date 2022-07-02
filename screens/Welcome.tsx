import { View, Text, ImageBackground, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import BgImage from '../assets/welcomefull.png'

const Welcome = ({setScreen}) => {
  return (
    <View style={styles.container}>

      <ImageBackground style={styles.BgImage} source={BgImage}>
        <View>
          <Image style={styles.logo} source={require('../assets/whiteLogo.png')} />
        </View>

        <View style={styles.titleContainer}>
          <Text style={[styles.nameTitle, styles.white]}>
            Hi Afsar, Welcome
          </Text>
          <Text style={[styles.brandTitle, styles.white]}>
            to Silent Moon
          </Text>
          <Text style={[styles.paraText, styles.white]}>
            Explore the app, Find some peace of mind to prepare for meditation.
          </Text>

        </View>

        <Pressable style={styles.btnLogin} onPress={() => setScreen(6)} >
                    <Text style={[styles.btnText, styles.black]}> GET STARTED</Text>
                  
                </Pressable>


      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({

  // Text colors
  black:{
    color:'black',
  },
  white:{
    color:'white',
  },
  grey:{
    color:'grey',
  },
  BgImage: {
    justifyContent: 'center',
    alignItems: "center",
    height: 900,
    width: 400,
  },

  logo: {
    bottom: 230,
  },
  titleContainer:{
    bottom:160,
    alignItems:'center',
  },
  nameTitle:{
    fontSize:30,
    fontWeight:'bold',
  },
  brandTitle:{
    fontSize:25,
  },
  paraText:{
    fontSize:12,
    width:300,
    textAlign:'center'
  },

  btnLogin: {
    height: 60,
    width: 350,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
    borderRadius: 35,
    top:250,

},
})
export default Welcome