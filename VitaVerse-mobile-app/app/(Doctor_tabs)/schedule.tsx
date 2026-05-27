import { View, Text, StyleSheet } from "react-native";

export default function Schedule(){

return(

<View style={styles.container}>
<Text style={styles.title}>Doctor Schedule</Text>
<Text>Today's appointments and availability will appear here.</Text>
</View>

)

}

const styles = StyleSheet.create({

container:{
flex:1,
justifyContent:"center",
alignItems:"center",
backgroundColor:"#ffffff"
},

title:{
fontSize:22,
fontWeight:"bold",
marginBottom:10
}

});