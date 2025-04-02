import Header from "@/components/header"
import React from "react"
import AntDesign from '@expo/vector-icons/AntDesign'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'
import { StyleSheet, SafeAreaView, ScrollView, Text, View, TouchableOpacity } from "react-native"
import rt from "@/assets/json/app-text.json"

const Menu = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120, flex: 1 }}>
        <Header userName="Felipe Oliveira" headerText={rt.menu.headertext}/>
        <View style={styles.config}>
          <TouchableOpacity style={[ styles.button, styles.layoutbutton ]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}>
              <MaterialCommunityIcons name="book-settings-outline" size={24} color="#737373" />
              <Text style={styles.buttonText}>Atividades criadas</Text>
            </View>
            <SimpleLineIcons name="arrow-right" size={16} color="#737373" />
          </TouchableOpacity>
          <TouchableOpacity style={[ styles.button, styles.layoutbutton ]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}>
              <MaterialCommunityIcons name="account-circle-outline" size={24} color="#737373" />
              <Text style={styles.buttonText}>Gerenciar conta</Text>
            </View>
            <SimpleLineIcons name="arrow-right" size={16} color="#737373" />
          </TouchableOpacity>
          <TouchableOpacity style={[ styles.button, styles.layoutbutton ]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}>
              <AntDesign name="setting" size={24} color="#737373" />
              <Text style={styles.buttonText}>Configurações</Text>
            </View>
            <SimpleLineIcons name="arrow-right" size={16} color="#737373" />
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
    alignItems: 'stretch',
  },
  config: {
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
    color: '#222',
    fontSize: 18,
  },
  layoutbutton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export default Menu