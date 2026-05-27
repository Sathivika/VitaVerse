import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Dashboard(){

const router = useRouter();

return(

<View style={styles.container}>

<Text style={styles.title}>Welcome to VitaVerse</Text>

<TouchableOpacity
style={styles.card}
onPress={()=>router.push("/user/health")}
>
<Text>Check Health Metrics</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.card}
onPress={()=>router.push("/user/consult")}
>
<Text>Consult Doctor</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.card}
onPress={()=>router.push("/user/arvr")}
>
<Text>AR / VR Learning</Text>
</TouchableOpacity>

</View>

);
}

const styles = StyleSheet.create({

container:{
flex:1,
padding:30,
backgroundColor:"#F0F3BD"
},

title:{
fontSize:26,
color:"#05668D",
marginBottom:30
},

card:{
backgroundColor:"#02C39A",
padding:20,
borderRadius:10,
marginBottom:20
}

});