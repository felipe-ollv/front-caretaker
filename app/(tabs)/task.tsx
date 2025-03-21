import Header from '@/components/header'
import InputComponent from '@/components/input'
import React from 'react'
import { Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import rt from '@/assets/json/app-text.json'

const Task = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header userName='Felipe Oliveira' headerText={rt.task.headertext}/>
      <InputComponent placeholder={rt.task.titleTask} inputMode='text'/>
      <InputComponent placeholder={rt.task.descriptionTask} inputMode='text'/>
      <InputComponent />
      <TouchableOpacity style={[styles.button, styles.logoutButton]}>
        <Text style={styles.buttonText}>{rt.task.saveTask}</Text>
      </TouchableOpacity>
    </SafeAreaView>
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