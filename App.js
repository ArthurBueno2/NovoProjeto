import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList,  } from 'react-native';

const request = async(callback) =>{
  const response = await fetch('https://swapi.dev/api/people/');
  const parsed = await response.json();
  callback(parsed.results);
}

export default function App() {
  const [registro, setRegistro] = useState([]);

  useEffect(()=>{
    request(setRegistro);
  },[]
  )

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>API do StarWars</Text>
      <FlatList
        data={registro}
        renderItem={({item}) =>
        <View style={styles.itens}>
          <Text>Nome:{item.name}{'\n'}</Text>
          <Text>Peso:{item.mass}</Text>
        </View>

        }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 25,
    paddingBottom: 25,
    fontSize: 20
  },
  itens:{
    backgroundColor:'#c8a2c8',
    flex:1,
    marginBottom: 10,
    marginRight: 10,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    paddingVertical: 10,
    color:'#fff',
    fontSize:18
  },
  titulo:{
    fontSize:30,
    textAlign:'center', 
    marginVertical:40
  }
});
