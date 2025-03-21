import React from "react"
import Card from "@/components/card"
import { 
  StyleSheet,
  SafeAreaView, 
  TouchableOpacity,
  FlatList,
} from "react-native"
import Header from "@/components/header"

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
  }
]

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header userName="Felipe Oliveira" headerText="Aqui estão suas atividades do dia, não deixe para depois!"/>

        <FlatList 
          data={cardTaskData}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => console.log("Click Card", item)}
              activeOpacity={0.9}
            >
              <Card data={item} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.title}
          style={{ paddingBottom: 10}}
        />
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
})

export default Home