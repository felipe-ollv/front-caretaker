import React, { useEffect, useState } from "react"
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
import Loader from "@/components/loader"

const Home = () => {

  const [cardTaskData, setCardTaskData] = useState(Array<any>)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchListTask()
  }, [])

  const fetchListTask = async () => {
    const res = await fetch('http://192.168.1.54:3000/home/task-list')

    if (res.ok) {
      const data = await res.json()
      setCardTaskData(data)
      setLoading(false)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header userName="Felipe Oliveira" headerText={rt.home.headertext}/>
        {
          loading ? <Loader /> :
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
        }
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