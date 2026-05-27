import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions } from "react-native";
import { useRouter } from "expo-router";

export default function Login() {

const router = useRouter();

const { width } = useWindowDimensions();
const isWebLayout = width > 768;

return(

<View style={styles.container}>

<Text style={styles.title}>VitaVerse</Text>
<Text style={styles.subtitle}>
Healthcare and Wealth at Your Fingertips
</Text>

<View
  style={[
    styles.cardContainer,
    { flexDirection: isWebLayout ? "row" : "column" }
  ]}
>

<View style={styles.card}>

<Text style={styles.cardTitle}>I'm a Patient</Text>

<Text style={styles.cardText}>
Book appointments, consult with doctors,
and manage health records.
</Text>

<TouchableOpacity
style={styles.button}
onPress={() =>
  router.push({
    pathname: "/auth",
    params: { role: "patient" }
    })
}
>
<Text style={styles.buttonText}>Continue as Patient</Text>
</TouchableOpacity>

</View>


<View style={styles.card}>

<Text style={styles.cardTitle}> I'm a Healthcare Provider </Text>

<Text style={styles.cardText}>
Manage appointments, conduct consultations,
and provide care remotely.
</Text>

<TouchableOpacity
style={styles.button}
onPress={() =>
  router.push({
    pathname: "/auth",
    params: { role: "doctor" }
  })
}
>
<Text style={styles.buttonText}>Continue as Provider</Text>
</TouchableOpacity>

</View>

</View>

</View>

)

}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#ffffff",
alignItems:"center",
justifyContent:"center",
padding:24
},

title:{
fontSize:28,
fontWeight:"bold",
color:"#1f2a44"
},

subtitle:{
marginBottom:30,
color:"#5a6b85",
fontSize:16
},

cardContainer:{
width:"100%",
gap:30,
alignItems:"center",
justifyContent:"center"
},

card:{
backgroundColor:"white",
padding:20,
borderRadius:12,
width:300,
marginHorizontal:10,
shadowColor:"#000",
shadowOpacity:0.1,
shadowRadius:6,
elevation:4
},

cardTitle:{
fontSize:18,
fontWeight:"600"
},

cardText:{
fontSize:13,
marginVertical:10,
color:"#131519"
},

button:{
backgroundColor:"#7a5aad",
padding:10,
borderRadius:8,
alignItems:"center"
},

buttonPurple:{
backgroundColor:"#7a5aad",
padding:10,
borderRadius:8,
alignItems:"center"
},

buttonText:{
color:"white"
}

})