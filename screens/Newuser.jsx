import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
  onPress,
} from "react-native";

import React from "react";
import topBg from "../assets/signinBg.png";
import Ionicons from "@expo/vector-icons/Ionicons";
import Button from "../components/button";
const Newuser = ({setScreen}) => {
  return (
    <View style={styles.container}>

      <ImageBackground style={styles.bgImage} source={topBg}>
        
        <Pressable style={styles.leftIcon} onPress={() => setScreen(1)}>
          <Image onPress={() => setScreen(1)}
            style={styles.leftIcon}
            source={require("../assets/left-icon.png")}
          />
        </Pressable>

        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>CREATE YOUR ACCOUNT</Text>
        </View>

        <View>
          <View style={styles.nameInputHolder}>
            <TextInput
              style={styles.emailInput}
              placeholder="Full name"
            ></TextInput>
            <Ionicons
              style={styles.check}
              name="checkmark"
              size={20}
              color="grey"
            />
          </View>

          <View>
            <TextInput
              style={styles.emailInput}
              placeholder="Email address"
            ></TextInput>
            <Ionicons
              style={styles.check}
              name="checkmark"
              size={20}
              color="grey"
            />
          </View>

          <View>
            <View>
              <TextInput
                style={styles.emailInput}
                placeholder="Password"
              ></TextInput>
              <Ionicons
                style={styles.check}
                name="eye-off"
                size={20}
                color="grey"
              />
            </View>
          </View>
          <TextInput
            style={styles.emailInput}
            placeholder=" Confirm Password"
          ></TextInput>
        </View>
        <Pressable style={styles.btnLogin} onPress={() => setScreen(4)}>
          <Text style={[styles.btnText, styles.white]}> REGISTER</Text>
        </Pressable>
        <View style={styles.forgetPassword}>
          <Text style={[styles.grey, styles.fpassword]}>
            Please check your email to verify
          </Text>
        </View>
        <View style={styles.policyContainer}>
          <Text style={styles.policyText}>i have read the Privace Policy</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  // Text colors

  white: {
    color: "white",
  },
  grey: {
    color: "grey",
  },

  // Text colors
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    top: 190,
    marginBottom: 70,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  bgImage: {
    justifyContent: "center",
    alignItems: "center",
    height: 300,
    width: 400,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    margin: 10,
  },
  leftIcon: {
    position: "absolute",
    top: 40,
    right: 165,
    backgroundColor: "white",
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
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
    backgroundColor: "#7583CA",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
    marginTop: 10,
  },
  btnGoogle: {
    height: 60,
    width: 350,
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "grey",
  },
  btnLogin: {
    height: 60,
    width: 350,
    backgroundColor: "#8E97FD",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
    top: 250,
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
    backgroundColor: "#F2F3F7",
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
  },
  passwordInput: {
    top: 180,
    height: 60,
    width: 350,
    backgroundColor: "#F2F3F7",
    borderRadius: 10,
    padding: 15,
  },
  forgetPassword: {
    top: 260,
  },
  fpassword: {
    fontSize: 10,
  },
  check: {
    // flexDirection:'row'
    top: 209,
    right: 15,
    position: "absolute",
  },
  policyContainer: {
    top: 120,
  },
  policyText: {
    fontSize: 10,
  },
});
export default Newuser;
