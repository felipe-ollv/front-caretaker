import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { Picker } from '@react-native-picker/picker';

const Task = () => {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Título */}
      <Text style={styles.label}>Título *</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o título da tarefa"
        value={'title'}
        // onChangeText={setTitle}
      />

      {/* Descrição */}
      <Text style={styles.label}>Descrição *</Text>
      <TextInput
        style={[styles.input, styles.multilineInput]}
        placeholder="Digite a descrição da tarefa"
        value={'description'}
        // onChangeText={setDescription}
        multiline
      />

      {/* Quem criou */}
      <Text style={styles.label}>Quem criou *</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do criador"
        value={'createdBy'}
        // onChangeText={setCreatedBy}
      />

      {/* Status */}
      <Text style={styles.label}>Status *</Text>
      {/* <Picker
        selectedValue={status}
        onValueChange={(itemValue) => setStatus(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Pendente" value="pendente" />
        <Picker.Item label="Concluída" value="concluída" />
        <Picker.Item label="Fechada" value="fechada" />
      </Picker> */}

      {/* Botão de enviar
      <Button title="Adicionar Tarefa" onPress={handleSubmit} /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  dateText: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default Task;