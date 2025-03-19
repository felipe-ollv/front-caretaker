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
          title: "Início"
        }} 
      />
      <Tabs.Screen
        name="task"
        options={{
          title: "Tarefa"
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil"
        }} 
      />
    </Tabs>
  )
}

export default _layout