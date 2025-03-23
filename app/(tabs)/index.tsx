import React from "react"
import Card from "@/components/card"
import { 
  StyleSheet,
  SafeAreaView, 
  TouchableOpacity,
  FlatList,
} from "react-native"
import Header from "@/components/header"
import { router } from "expo-router"

import rt from "@/assets/json/app-text.json"

const cardTaskData = [
  {
    title: 'Passear com o pet',
    description: "Dar uma volta com o Thor na rua",
    author:"Felipe",
    status:"Pendente",
    dateCreate:"21/03/2025"
  },
  {
    title:"Levar o lixo",
    description:"Levar o lixo na lixeira em frente ao prédio",
    author:"Felipe",
    status:"Pendente",
    dateCreate:"21/03/2025"
  },
  {
    title:"Ligar para o Gustavo",
    description:"Chamada de vídeo para ver o filho mais velho",
    author:"Felipe",
    status:"Pendente",
    dateCreate:"21/03/2025"
  },
  {
    title:"Levar o lix",
    description:"Levar o lixo na lixeira em frente ao prédio",
    author:"Felipe",
    status:"Pendente",
    dateCreate:"21/03/2025"
  },
  {
    title:"Levar o li",
    description:"Levar o lixo na lixeira em frente ao prédio",
    author:"Felipe",
    status:"Pendente",
    dateCreate:"21/03/2025"
  },
  {
    title:"Levar o l",
    description:"Levar o lixo na lixeira em frente ao prédio",
    author:"Felipe",
    status:"Pendente",
    dateCreate:"21/03/2025"
  },
  {
    title:"Levar o ",
    description:"Levar o lixo na lixeira em frente ao prédio",
    author:"Felipe",
    status:"Pendente",
    dateCreate:"21/03/2025"
  },
]

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header userName="Felipe Oliveira" headerText={rt.home.headertext}/>

        <FlatList 
          data={cardTaskData}
          renderItem={({item, index}) => {
            const isLastItem = index === cardTaskData.length - 1
            return (
              <TouchableOpacity
                onPress={() => router.push({pathname: '/(tabs)/details', params: {...item}})}
                activeOpacity={0.9}
                style={isLastItem ? styles.lastitem : null}
              >
                <Card data={item} />
              </TouchableOpacity>
            )
          }}
          keyExtractor={item => item.title}
        />
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
  lastitem: {
    marginBottom: 120
  }
})

export default Home