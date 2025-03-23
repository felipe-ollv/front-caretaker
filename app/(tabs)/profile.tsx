import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const Profile = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/11539820.png')}
        style={styles.profileImageCss}
      />

      <Text style={styles.name}>Felipe Oliveira</Text>

      <Text style={styles.bio}>Pai | Desevolvedor | Entusiasta</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Email: felipeoliveira264@gmail.com</Text>
        <Text style={styles.infoText}>Telefone: (11) 97764-8119</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Editar Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.logoutButton]}>
        <Text style={styles.buttonText}>Relatório de tarefas</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  profileImageCss: {
    width: 200,
    height: 200,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  infoContainer: {
    width: '100%',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
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

export default Profile