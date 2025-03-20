import React from "react"
import Card from "@/components/card"
import { StyleSheet, SafeAreaView, ScrollView, Text } from "react-native"

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
            {/* <Text >Tarefas do dia</Text> */}
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})

export default Home