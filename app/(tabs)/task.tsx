import Header from '@/components/header'
import InputComponent from '@/components/input'
import React, { useState } from 'react'
import { Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import rt from '@/assets/json/app-text.json'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'

const Task = () => {

  const [date, setDate] = useState<Date | null>(null)

  const showDatePicker = () => {
    DateTimePickerAndroid.open({
      value: date || new Date(),
      onChange: (event, selectedDate: any) => {
        if (event.type !== 'dismissed') {
          setDate(selectedDate)
        }
      },
      mode: 'date',
      display: 'spinner',
      minimumDate: new Date(),
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header userName='Felipe Oliveira' headerText={rt.task.headertext}/>
      <InputComponent placeholder={rt.task.titleTask} inputMode='text'/>
      <InputComponent placeholder={rt.task.descriptionTask} inputMode='text'/>
      
      <TouchableOpacity 
        style={styles.dateInputContainer}
        onPress={showDatePicker}
      >
        <Text style={date ? styles.dateText : styles.placeholderText}>
          {date ? date.toLocaleDateString('pt-BR') : rt.task.dateplaceholder || 'Selecione uma data'}
        </Text>
      </TouchableOpacity>
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
  dateInputContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
  dateText: {
    fontSize: 16,
    color: '#000',
  },
  placeholderText: {
    fontSize: 16,
    color: '#888',
  },
  button: {
    width: '100%',
    padding: 10,
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
    fontSize: 18,
    fontWeight: '300',
  },
})

export default Task