import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text,  View, ImageBackground, Image, Pressable,} from "react-native";
import bgImage from "./assets/banner-bg.png";
import Button from './components/button';
import { useState } from "react";

 // Screen Components
 import SignUp from "./screens/SignUp";
 import Register from "./screens/Register";
 import Login from "./screens/Login";
 import Welcome from "./screens/Welcome";
 import Dashboard from "./screens/Dashboard";
 import DashOpt from "./screens/DashOpt";
 import CourseList from "./screens/Courselist";
 import Booking from "./screens/Booking";
 import AudioPlay from "./screens/Audioplay";
import Newuser from "./screens/Newuser";


export default function App() {
  const [screen, setScreen] = useState(1); 

  const switcher = () => {
    switch(screen){
      case 1:{
        return <SignUp setScreen={setScreen}/>
      }
      case 2:{
        return <Register setScreen={setScreen}/>
      }
      case 3:{
        return <Newuser setScreen={setScreen}/>
      }
      case 4:{
        return <Login setScreen={setScreen}/>
      }
      case 5:{
        return <Welcome setScreen={setScreen}/>
      }
      case 6:{
        return <Dashboard setScreen={setScreen}/>
      }
      case 7:{
        return <DashOpt setScreen={setScreen}/>
      }
      case 8:{
        return <CourseList setScreen={setScreen}/>
      }
      case 9:{
        return <Booking setScreen={setScreen}/>
      }
      case 10:{
        <AudioPlay setScreen={setScreen}/>
      }
    }
  }

  return (
   
    <View style={styles.container}>
     <View>
     {switcher()}
     </View>
    </View>
  );
}

const styles = StyleSheet.create({

  // TEXT COLOR
  grey:{
    color:'grey'
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
    bottom: 100,
  },
  textContainer:{
    justifyContent:'center',
    alignItems:'center',
    top:350,
 
  },
  textTitle:{
    fontSize:26,
    fontWeight:'600',
    
  },
  textPara:{
    textAlign:'center'
  },
  signupButton:{
    top:450,
  },
  footerText:{
    paddingTop:10,
    fontSize:10,
  }
});
