import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'

const course = ({info}) => {

  const {title, image, duration} = info;


  return (
    <View style={styles.card}>

     
      <ImageBackground style={styles.newBg} source={image} resizeMode="contain">
       <Text  style={[styles.textCourse, styles.grey]}>{title}</Text>
      </ImageBackground>
     
    </View>
  )
}

const styles = StyleSheet.create({
  grey:{
    color:'#FEF9F3',
  },
  card: {
    height: 240,
    width: 190,
    // backgroundColor:"green",
    justifyContent:'space-between',
    alignItems:'center',
    // paddingBottom:20,
    paddingLeft:20,
    paddingRight:20,
    marginBottom:-30,
  },
  newBg:{
    height:200,
    width:190,
    justifyContent: "center",
    alignItems:'center',
    borderRadius:20,
  },
  textCourse: {
    fontSize: 15,
    position:'absolute',
    bottom:19,
    fontWeight:'bold',
    width:130,
    textAlign:'center',
    paddingBottom:5,

  
    
  }
})
export default course;