import React from "react"
import { StyleSheet, SafeAreaView, ScrollView, Text } from "react-native"

const Menu = () => {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
            <Text>Menu</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})

export default Menu