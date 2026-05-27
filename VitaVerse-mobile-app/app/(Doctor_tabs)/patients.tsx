import { View, Text, StyleSheet } from "react-native";

export default function Patients(){

return(

<View style={styles.container}>
<Text style={styles.title}>Patients</Text>
<Text>View and manage patient records here.</Text>
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
fontSize:22,
fontWeight:"bold",
marginBottom:10
}

});