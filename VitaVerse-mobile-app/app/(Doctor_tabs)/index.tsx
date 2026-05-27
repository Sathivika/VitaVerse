import { View, Text, StyleSheet } from "react-native";

export default function DoctorDashboard(){

return(

<View style={styles.container}>

<Text style={styles.title}>Doctor Dashboard</Text>

<View style={styles.card}>
<Text>Today's Appointments</Text>
<Text style={styles.number}>12</Text>
</View>

<View style={styles.card}>
<Text>Total Patients</Text>
<Text style={styles.number}>145</Text>
</View>

<View style={styles.card}>
<Text>This Week</Text>
<Text style={styles.number}>18</Text>
</View>

</View>

)

}

const styles = StyleSheet.create({

container:{
flex:1,
padding:20,
backgroundColor:"#bdb5cb"
},

title:{
fontSize:22,
fontWeight:"bold"
},

card:{
backgroundColor:"white",
padding:20,
borderRadius:10,
marginVertical:10
},

number:{
fontSize:24,
fontWeight:"bold"
}

})