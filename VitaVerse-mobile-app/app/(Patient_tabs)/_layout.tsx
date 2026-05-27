
import React from "react";
import { Tabs } from "expo-router";
import { View, Text, Platform } from "react-native";
import { useApp } from "@/components/AppContext";

export default function PatientTabsLayout() {
  const { C, t } = useApp();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: C.card,
          borderTopColor: C.brd,
          borderTopWidth: 1,
          paddingBottom: Platform.OS === "ios" ? 20 : 8,
          paddingTop: 6,
          height: Platform.OS === "ios" ? 84 : 60,
        },
        tabBarActiveTintColor: C.mt,
        tabBarInactiveTintColor: C.mu,
        tabBarLabelStyle: { fontSize: 9, fontWeight: "600" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t.home,
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 18, color }}>🏠</Text>,
        }}
      />
      <Tabs.Screen
        name="consult"
        options={{
          title: t.consult.split(" ")[0],
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 18, color }}>🩺</Text>,
        }}
      />
      <Tabs.Screen
        name="finance"
        options={{
          title: t.finance.split(" ")[0],
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 18, color }}>💰</Text>,
        }}
      />
      <Tabs.Screen
        name="ar_learning"
        options={{
          title: t.ar,
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 18, color }}>🫀</Text>,
        }}
      />
      <Tabs.Screen
        name="health"
        options={{
          title: t.vitals,
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 18, color }}>📊</Text>,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: t.profile,
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 18, color }}>👤</Text>,
        }}
      />
    </Tabs>
  );
}



/*import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";

export default function PatientDrawer() {

return(

<Drawer
screenOptions={{
headerStyle:{backgroundColor:"#735a9f"},
headerTintColor:"white"
}}
>

<Drawer.Screen
name="index"
options={{
title:"Health Dashboard",
drawerIcon:({size,color})=>(
<Ionicons name="heart" size={size} color={color}/>
)
}}
/>

<Drawer.Screen
name="appointments"
options={{
title:"Appointments",
drawerIcon:({size,color})=>(
<Ionicons name="calendar" size={size} color={color}/>
)
}}
/>

<Drawer.Screen
name="ar-learning"
options={{
title:"AR Learning",
drawerIcon:({size,color})=>(
<Ionicons name="cube" size={size} color={color}/>
)
}}
/>

</Drawer>

)

}*/