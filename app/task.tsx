import InputComponent from '@/components/input'
import React from 'react'
import { Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'


const Task = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <InputComponent placeholder='Título da atividade' inputMode='text'/>
      <InputComponent placeholder='Uma breve descrição da atividade' inputMode='text'/>
      <InputComponent />
      <TouchableOpacity style={[styles.button, styles.logoutButton]}>
        <Text style={styles.buttonText}>Salvar atividade</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    gap: 16
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#708090',
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: '#4682B4',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default Task