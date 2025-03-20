import TabBar from "@/components/tabBar";
import { Tabs } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Tabs
      tabBar={props => <TabBar {...props}/>}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          headerShown: false,
        }} 
      />
      <Tabs.Screen
        name="task"
        options={{
          title: "Tarefa",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          headerShown: false,
        }} 
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          headerShown: false,
        }} 
      />
    </Tabs>
  )
}

export default _layout