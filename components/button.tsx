import { Pressable, Text, View,StyleSheet } from 'react-native'
import React, { Component, } from 'react'

const Button = ({title})=>  {

    return (
      <View>
        <Pressable style={styles.button}>
        <Text style={styles.textColor}>
            {title}
        </Text>
        </Pressable>
       
      </View>
    )
  
}

const styles = StyleSheet.create({
    button:{
        height:60,
        width:300,
        backgroundColor:"#8E97FD",
        justifyContent:'center',
        alignItems:'center',
        borderRadius:40,
    },
    textColor:{
        color:'white',
    }
})

export default Button;