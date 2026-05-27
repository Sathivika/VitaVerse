import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { useEffect, useState } from "react";

import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

// Required for auth flow
WebBrowser.maybeCompleteAuthSession();

export default function Auth(){

  const router = useRouter();
  const { role } = useLocalSearchParams();

  const [showOTP, setShowOTP] = useState(false);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  // ✅ SIMPLE & CLEAN CONFIG (ONLY WEB CLIENT)
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: "653228569188-cbbj98odmm3ahu9pc9e5oo5b08heojpp.apps.googleusercontent.com",
  });

const sendOTP = () => {
  if (phone.length < 10) {
    alert("Enter valid phone number");
    return;
  }
  setShowOTP(true);
};

const verifyOTP = () => {
  if (otp === "2005") {
    handleLogin(); // success
  } else {
    alert("Invalid OTP");
  }
};


  const handleLogin = () => {
    if(role === "patient"){
      router.replace("/(Patient_tabs)");
    }else{
      router.replace("/(Doctor_tabs)");
    }
  };

  // ✅ HANDLE SUCCESS
  useEffect(() => {
    if (response?.type === "success") {
      handleLogin();
    }
  }, [response]);

  return(
    <View style={styles.container}>

      <Text style={styles.title}>Sign In</Text>

      <Text style={styles.subtitle}>
        Continue as {role}
      </Text>

      {/* ✅ GOOGLE LOGIN */}
      <TouchableOpacity 
        style={styles.googleBtn} 
        onPress={() => promptAsync()}
      >
        <Text style={styles.btnText}>Sign in with Google </Text>
      </TouchableOpacity>

      {/* OTP BUTTON */}
      <TouchableOpacity
        style={styles.phoneBtn}
        onPress={() => setShowOTP(true)}
      >
        <Text style={styles.btnText}>Sign in with Phone OTP</Text>
      </TouchableOpacity>

      {/* OTP UI */}
      {showOTP && (
        <View style={styles.otpContainer}>

          <TextInput
            placeholder="Enter Phone Number"
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
          />

          <TextInput
            placeholder="Enter OTP"
            style={styles.input}
            value={otp}
            onChangeText={setOtp}
          />

          <TouchableOpacity style={styles.googleBtn} onPress={handleLogin}>
            <Text style={styles.btnText}>Verify & Continue</Text>
          </TouchableOpacity>

        </View>
      )}

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#f4f7fb"
  },
  title:{
    fontSize:26,
    fontWeight:"bold",
    marginBottom:10
  },
  subtitle:{
    marginBottom:40,
    color:"#5a6b85"
  },
  googleBtn:{
    backgroundColor:"#7a5aad",
    padding:14,
    borderRadius:10,
    width:250,
    alignItems:"center",
    marginBottom:15
  },
  phoneBtn:{
    backgroundColor:"#10b981",
    padding:14,
    borderRadius:10,
    width:250,
    alignItems:"center"
  },
  btnText:{
    color:"white",
    fontWeight:"600"
  },
  otpContainer:{
    marginTop:20,
    alignItems:"center"
  },
  input:{
    backgroundColor:"white",
    width:250,
    padding:12,
    borderRadius:8,
    marginBottom:10,
    borderWidth:1,
    borderColor:"#ddd"
  }
});