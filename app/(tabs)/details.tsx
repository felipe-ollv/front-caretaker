import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

import Header from "@/components/header"

const Details = () => {
  return (
    <View style={styles.container}>
      <Header userName="Felipe" headerText="Aqui você pode concluir, cancelar ou editar uma atividade!"/>
      <View style={styles.detailcard}>
        <Text style={styles.tasktitle}>Titulo da atividade</Text>
        <Text style={{ marginBottom: 10 }}>Descrição da atividade a ser feita</Text>
        <Text style={{ marginBottom: 10 }}>Quem criou a atividade e data</Text>
        <Text style={{ marginBottom: 10 }}>Status da atividade</Text>
        <View style={styles.detailbuttons}>
          <TouchableOpacity style={[styles.button, styles.logoutButton]}>
            <Text style={styles.buttontext}>Concluir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttontext}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.editbutton}>
        <Text style={styles.buttontext}>Editar atividade</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12
  },
  detailcard: {
    backgroundColor: '#F8F9FD',
    backgroundImage: 'linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(244, 247, 251) 100%)',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderWidth: 5,
    borderColor: 'rgb(255, 255, 255)',
    shadowColor: 'rgba(133, 189, 215, 0.8784313725)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 10, // Para Android
    marginTop: 20,
    marginBottom: 20
  },
  tasktitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 14
  },
  button: {
    width: '60%',
    padding: 10,
    backgroundColor: '#708090',
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: '#4682B4',
  },
  buttontext: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '300',
  },
  editbutton: {
    width: '100%',
    padding: 10,
    backgroundColor: '#708090',
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 10,
    // marginHorizontal: 20
  },
  detailbuttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    marginTop: 16
  }
})

export default Details