import Header from "@/components/header"
import React from "react"
import { StyleSheet, SafeAreaView, ScrollView, Text, View, TouchableOpacity } from "react-native"

const Menu = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120, flex: 1 }}>
        <Header />
        <View style={styles.config}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Atividades criadas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Gerenciar conta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Configurações</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  config: {
    width: '100%',
    marginTop: 100,
    gap: 40,
  },
  button: {
    width: '100%',
    padding: 15,
    borderBottomColor: '#708090',
    borderBottomWidth: 1,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
  },
})

export default Menu