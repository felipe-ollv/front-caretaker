import React from "react"
import Card from "@/components/card"
import { StyleSheet, SafeAreaView, ScrollView, Text } from "react-native"
import Header from "@/components/header"

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
          <Header />
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
    flex: 1,
    paddingHorizontal: 12
  },
})

export default Home